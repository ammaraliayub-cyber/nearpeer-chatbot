const fetch = require('node-fetch');

// API Configuration
const API_KEY = 'YOUR_OPENAI_API_KEY_HERE';
const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

async function testAPI() {
    console.log('🧪 Testing OpenAI API...');
    console.log('API Key:', API_KEY.substring(0, 20) + '...');
    console.log('Endpoint:', API_ENDPOINT);
    console.log('');

    try {
        // Test 1: Simple GPT-3.5 request
        console.log('📝 Test 1: Simple GPT-3.5 request');
        const simpleRequest = {
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: 'Say hello!' }
            ],
            max_tokens: 50,
            temperature: 0.7
        };

        console.log('Request body:', JSON.stringify(simpleRequest, null, 2));
        
        const simpleResponse = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(simpleRequest)
        });

        console.log('Response status:', simpleResponse.status, simpleResponse.statusText);
        
        if (!simpleResponse.ok) {
            const errorText = await simpleResponse.text();
            console.log('Error response:', errorText);
            return;
        }

        const simpleData = await simpleResponse.json();
        console.log('✅ Simple request successful!');
        console.log('Response:', simpleData.choices[0].message.content);
        console.log('');

        // Test 2: GPT-5 request with the problematic prompt
        console.log('🧠 Test 2: GPT-5 request with "Create two MCQs for differential equations"');
        const gpt5Request = {
            model: 'gpt-5-2025-08-07',
            messages: [
                { role: 'system', content: 'You are a helpful AI assistant. Provide clear, concise, and helpful responses.' },
                { role: 'user', content: 'Create two MCQs for differential equations.' }
            ],
            max_completion_tokens: 1000,
            temperature: 0.7
        };

        console.log('Request body:', JSON.stringify(gpt5Request, null, 2));
        
        const gpt5Response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gpt5Request)
        });

        console.log('Response status:', gpt5Response.status, gpt5Response.statusText);
        
        if (!gpt5Response.ok) {
            const errorText = await gpt5Response.text();
            console.log('Error response:', errorText);
            return;
        }

        const gpt5Data = await gpt5Response.json();
        console.log('✅ GPT-5 request successful!');
        console.log('Response:', gpt5Data.choices[0].message.content);
        console.log('');

        // Test 3: GPT-5 with reasoning effort
        console.log('🧠 Test 3: GPT-5 with reasoning effort');
        const gpt5ReasoningRequest = {
            model: 'gpt-5-2025-08-07',
            messages: [
                { role: 'system', content: 'You are a helpful AI assistant. Provide clear, concise, and helpful responses.' },
                { role: 'user', content: 'Create two MCQs for differential equations.' }
            ],
            max_completion_tokens: 1000,
            reasoning_effort: 'high'
        };

        console.log('Request body:', JSON.stringify(gpt5ReasoningRequest, null, 2));
        
        const gpt5ReasoningResponse = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gpt5ReasoningRequest)
        });

        console.log('Response status:', gpt5ReasoningResponse.status, gpt5ReasoningResponse.statusText);
        
        if (!gpt5ReasoningResponse.ok) {
            const errorText = await gpt5ReasoningResponse.text();
            console.log('Error response:', errorText);
            return;
        }

        const gpt5ReasoningData = await gpt5ReasoningResponse.json();
        console.log('✅ GPT-5 with reasoning effort successful!');
        console.log('Response:', gpt5ReasoningData.choices[0].message.content);

    } catch (error) {
        console.error('❌ Test failed:', error.message);
        console.error('Stack trace:', error.stack);
    }
}

// Run the test
testAPI();
