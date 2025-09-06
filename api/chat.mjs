// Vercel serverless function to handle OpenAI API calls
export default async function handler(req, res) {
  console.log('=== API Function Called ===');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS preflight request');
    return res.status(200).end();
  }

  // Handle GET requests for testing
  if (req.method === 'GET') {
    console.log('Handling GET request - API is working');
    return res.status(200).json({ 
      message: 'API is working!', 
      method: req.method,
      timestamp: new Date().toISOString()
    });
  }

  // Only allow POST requests for actual chat
  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ 
      error: 'Method not allowed', 
      received: req.method,
      allowed: ['POST', 'OPTIONS', 'GET']
    });
  }

  try {
    console.log('Processing POST request');
    
    // Get API key from environment variable
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      console.error('OpenAI API key not found in environment variables');
      return res.status(500).json({ 
        error: 'API key not configured. Please contact the administrator.' 
      });
    }
    
    console.log('API key found:', apiKey.substring(0, 10) + '...');

    // Get request body
    const { messages, model, maxTokens, temperature, reasoningEffort } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    // Prepare OpenAI request body
    const requestBody = {
      model: model || 'gpt-4o',
      messages: messages,
      max_tokens: maxTokens || 4000,
      temperature: temperature || 0.7
    };

    // Handle GPT-5 specific parameters
    if (model && model.startsWith('gpt-5')) {
      requestBody.max_completion_tokens = maxTokens || 4000;
      delete requestBody.max_tokens;
      delete requestBody.temperature; // GPT-5 uses default temperature
      
      if (reasoningEffort) {
        requestBody.reasoning_effort = reasoningEffort;
      }
    }

    console.log('Making OpenAI API request:', {
      model: requestBody.model,
      messageCount: messages.length,
      maxTokens: requestBody.max_tokens || requestBody.max_completion_tokens
    });

    // Make request to OpenAI API
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.json().catch(() => ({}));
      console.error('OpenAI API error:', {
        status: openaiResponse.status,
        statusText: openaiResponse.statusText,
        error: errorData
      });
      
      return res.status(openaiResponse.status).json({
        error: `OpenAI API error: ${openaiResponse.status} ${openaiResponse.statusText}`,
        details: errorData.error?.message || 'Unknown error'
      });
    }

    const data = await openaiResponse.json();
    
    // Return the response from OpenAI
    return res.status(200).json({
      success: true,
      data: data
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
