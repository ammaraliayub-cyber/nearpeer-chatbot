export default function handler(req, res) {
  console.log('TEST API CALLED:', req.method, req.url);
  res.status(200).json({ 
    message: 'Test API is working!', 
    method: req.method,
    url: req.url,
    timestamp: new Date().toISOString()
  });
}
