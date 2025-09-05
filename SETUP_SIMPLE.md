# Simple Setup Guide

## How to Add Your OpenAI API Key

1. **Open the `index.html` file** in any text editor (VS Code, Notepad, etc.)

2. **Find this line** (around line 970):
   ```javascript
   this.apiKey = 'YOUR_OPENAI_API_KEY_HERE';
   ```

3. **Replace `YOUR_OPENAI_API_KEY_HERE`** with your actual OpenAI API key:
   ```javascript
   this.apiKey = 'sk-proj-abc123...'; // Your actual key here
   ```

4. **Save the file**

5. **Open `index.html` in your web browser** - that's it! No server needed.

## Where to Get Your API Key

1. Go to [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key (starts with `sk-proj-`)

## Important Notes

- ✅ **No server setup required** - just open the HTML file in a browser
- ✅ **No Node.js needed** - everything runs in the browser
- ⚠️ **Keep your API key private** - don't share the HTML file publicly
- ⚠️ **API usage costs money** - check OpenAI's pricing

## That's It!

Your chatbot will work immediately after adding the API key. Just double-click `index.html` to open it in your browser!
