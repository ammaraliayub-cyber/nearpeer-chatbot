# Nearpeer AI Chatbot - Deployment Guide

## Overview
This chatbot has been prepared for secure deployment with server-side API key management. The API key is stored securely in Vercel environment variables and users never see or enter any API keys.

## Architecture
- **Frontend**: Pure HTML/CSS/JavaScript (no API keys exposed)
- **Backend**: Vercel serverless function (`/api/chat`) that handles OpenAI API calls
- **Security**: API key stored in Vercel environment variables only

## Files Structure
- `index.html` - Main chatbot file (no API keys, calls our backend)
- `index-internal.html` - Internal copy with hardcoded API key (for internal use only)
- `api/chat.js` - Backend serverless function for OpenAI API calls
- `vercel.json` - Vercel deployment configuration
- `env.example` - Environment variables template

## Deployment Instructions

### Step 1: Prepare Your Repository
1. **Push to GitHub**: Upload your code to a GitHub repository
2. **Ensure all files are included**:
   - `index.html`
   - `api/chat.js`
   - `vercel.json`
   - All assets (images, etc.)

### Step 2: Deploy to Vercel
1. **Connect to Vercel**: 
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the `vercel.json` configuration

2. **Set Environment Variables**:
   - In your Vercel dashboard, go to Settings → Environment Variables
   - Add: `OPENAI_API_KEY` = `your_actual_openai_api_key`
   - **Important**: Use your actual OpenAI API key (starts with `sk-`)

3. **Deploy**: Vercel will automatically deploy your chatbot

### Step 3: Test Your Deployment
1. Visit your deployed URL
2. Try sending a message - it should work without any API key prompts
3. Test different models and settings

## How It Works

### User Experience
- ✅ **No API key prompts** - users can start chatting immediately
- ✅ **Seamless experience** - all API calls handled transparently
- ✅ **Full functionality** - all features work without user configuration

### Technical Flow
1. User sends message in frontend
2. Frontend calls `/api/chat` endpoint
3. Backend serverless function receives request
4. Backend uses environment variable API key to call OpenAI
5. Response is returned to frontend
6. User sees AI response

## Security Features

### API Key Security
- ✅ **Server-side only** - API key never exposed to client
- ✅ **Environment variables** - secure storage in Vercel
- ✅ **No client-side storage** - no API keys in browser
- ✅ **Secure transmission** - all API calls through HTTPS

### User Privacy
- ✅ **No data collection** - no user information stored
- ✅ **Local settings only** - user preferences stored locally
- ✅ **No tracking** - no analytics or user tracking

## Local Development

### For Testing
1. Use `index-internal.html` for local testing (has hardcoded API key)
2. **Never commit** `index-internal.html` to public repositories

### For Development
1. Set up local Vercel development:
   ```bash
   npm install -g vercel
   vercel dev
   ```
2. Set environment variable locally:
   ```bash
   vercel env add OPENAI_API_KEY
   ```

## API Key Requirements
- Get your API key from: https://platform.openai.com/api-keys
- Keys should start with `sk-`
- Ensure you have sufficient credits in your OpenAI account
- **Important**: This is the only API key needed - users don't need their own

## Troubleshooting

### Common Issues
1. **"API key not configured"**: Check Vercel environment variables
2. **"Internal server error"**: Check Vercel function logs
3. **"Rate limit exceeded"**: Check your OpenAI account credits
4. **"Network error"**: Check your internet connection

### Debugging
1. **Check Vercel logs**: Go to your Vercel dashboard → Functions → View logs
2. **Test API endpoint**: Try calling `/api/chat` directly
3. **Verify environment variables**: Check Vercel settings

### Support
- Check OpenAI API status: https://status.openai.com/
- Review API documentation: https://platform.openai.com/docs
- Vercel documentation: https://vercel.com/docs

## Security Notes
- ✅ **Zero client-side API keys** - completely secure
- ✅ **Server-side processing** - all sensitive operations on server
- ✅ **Environment variable security** - Vercel handles encryption
- ✅ **No user data exposure** - users never see API keys
- ✅ **HTTPS only** - all communications encrypted

## Cost Management
- **OpenAI API costs** are charged to your account
- **Vercel hosting** is free for personal use
- **Monitor usage** in your OpenAI dashboard
- **Set usage limits** in OpenAI to control costs
