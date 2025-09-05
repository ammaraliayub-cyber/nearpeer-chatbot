# Nearpeer AI Chatbot

A modern, responsive AI chatbot built with HTML, CSS, and JavaScript that supports multiple OpenAI models including GPT-5.

## 🚀 Quick Start

1. **Open the chatbot**: Simply open `index.html` in your browser
2. **Start chatting**: Begin your conversation with the AI immediately
3. **No setup required**: Everything works out of the box

## 🔑 API Key Setup

### For Users
- **No API key needed!** Users can start chatting immediately
- All API calls are handled transparently by the backend
- No configuration or setup required

### For Deployment
- Set environment variable in Vercel: `OPENAI_API_KEY=your_key_here`
- Only the administrator needs to provide the API key
- See `DEPLOYMENT_GUIDE.md` for detailed instructions

## ✨ Features

- 🤖 **Multiple AI Models**: GPT-5, GPT-4o, GPT-4o Mini, GPT-3.5 Turbo
- 🧠 **Advanced Reasoning**: GPT-5 with configurable reasoning effort
- 🖼️ **Image Support**: Upload and analyze images
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🎨 **Modern UI**: Clean, dark theme with smooth animations
- 📋 **Copy Options**: Multiple copy formats (formatted, plain text, LaTeX, markdown)
- ⚙️ **Customizable Settings**: Adjust temperature, max tokens, and more
- 🔒 **Secure**: No hardcoded API keys, secure key management

## 📁 Files

- `index.html` - Main chatbot (deployment ready, no API keys)
- `index-internal.html` - Internal version with hardcoded key (for testing)
- `api/chat.js` - Backend serverless function for OpenAI API calls
- `vercel.json` - Vercel deployment configuration
- `DEPLOYMENT_GUIDE.md` - Detailed deployment instructions
- `env.example` - Environment variables template

## 🛠️ Technical Details

- **Frontend**: Pure HTML, CSS, JavaScript (no frameworks)
- **Backend**: Vercel serverless functions for API calls
- **API**: Secure server-side OpenAI API integration
- **Storage**: Local browser storage for user settings only
- **Math**: MathJax integration for LaTeX rendering
- **Images**: Base64 encoding for image uploads

## 🔧 Configuration

The chatbot works seamlessly:
1. **Users**: No configuration needed - just start chatting
2. **Administrators**: Set `OPENAI_API_KEY` environment variable in Vercel
3. **Backend**: Handles all API calls securely

## 📱 Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## 🚨 Security

- ✅ **Zero client-side API keys** - completely secure
- ✅ **Server-side processing** - all sensitive operations on server
- ✅ **Environment variable security** - Vercel handles encryption
- ✅ **No user data exposure** - users never see API keys
- ✅ **HTTPS only** - all communications encrypted

## 📞 Support

For issues or questions:
1. Check the troubleshooting section in `DEPLOYMENT_GUIDE.md`
2. Verify Vercel environment variables are set correctly
3. Check OpenAI service status

---

**Note**: This chatbot uses server-side API key management. Users don't need their own API keys - the administrator sets one API key in Vercel environment variables.
