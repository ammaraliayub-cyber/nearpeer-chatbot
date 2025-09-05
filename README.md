# AI Chatbot - Simple Setup

A beautiful AI chatbot with a modern ChatGPT-style interface. Your API key is included directly in the code for easy deployment.

## Features

- 🎨 **Modern UI**: Beautiful, responsive design with ChatGPT-style interface
- 📷 **Image Support**: Upload images or paste from clipboard for analysis
- ⚙️ **Customizable**: Adjust model, temperature, max tokens, and reasoning effort
- 📋 **Copy Options**: Multiple copy formats (formatted, plain text, LaTeX, Markdown)
- 🔢 **Math Support**: Beautiful LaTeX rendering with MathJax
 - 🧮 **DOCX Export with Editable Equations (OMML)**: Optional local server uses Pandoc to convert Markdown (with LaTeX math) to DOCX so equations remain editable in Word
- 🔒 **Simple Setup**: No server required - just open the HTML file!

## How to Use

### Option 1: Use the included API key
1. **Open the file**: Double-click `My chat bot.html` to open it in your browser
2. **Start chatting**: The API key is already included in the code
3. **That's it!** No installation or setup required

### Option 2: Use your own API key
1. **Edit the file**: Open `My chat bot.html` in a text editor
2. **Find line ~650**: Look for `this.apiKey = 'sk-proj-...'`
3. **Replace with your key**: Put your OpenAI API key there
4. **Save and open**: Open the file in your browser

## Changing Your API Key

To change the API key:

1. **Open `My chat bot.html`** in any text editor
2. **Find this line** (around line 650):
   ```javascript
  
   ```
3. **Replace with your key**: Put your new API key between the quotes
4. **Save the file** and refresh your browser

## Deployment

### Upload to any web server:
- Upload `My chat bot.html` and `logo.png` to any web hosting service
- No special server setup required
- Works on GitHub Pages, Netlify, Vercel, or any basic web hosting

### Local use:
- Just double-click the HTML file to open in your browser
- No internet connection needed (except for API calls)

## Optional: Server DOCX Export (Pandoc)

To generate DOCX with native, editable Word equations (OMML), run the small Python service and click the "DOCX (server)" button on assistant messages. The client will send the original Markdown to the server, which runs Pandoc.

### Prereqs
- Python 3.9+
- Pandoc installed on your system (macOS: `brew install pandoc`, Ubuntu: `sudo apt-get install pandoc`, Windows: install from pandoc.org)
- Optional: LaTeX distribution if you later want PDF via Pandoc+LaTeX

### Install & Run
```bash
cd "My 1st project"
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
python server.py
```

The API will listen on `http://127.0.0.1:5000`. In the UI, press "DOCX (server)" on a message to download a DOCX with equations as OMML.

### Troubleshooting
- If you see "pandoc not found", ensure Pandoc is installed and on your PATH.
- On first run, macOS may block; allow Python in Security & Privacy if prompted.

## File Structure

```
├── My chat bot.html   # Main chatbot file (includes API key)
├── logo.png          # Your logo
└── README.md         # This file
```

## Features Explained

- **Image Analysis**: Upload images or paste from clipboard to analyze them
- **Settings Panel**: Click the ⚙️ button to adjust AI model settings
- **Copy Options**: Right-click on AI responses to copy in different formats
- **Math Rendering**: LaTeX equations are beautifully rendered
- **Responsive Design**: Works on desktop, tablet, and mobile

## Troubleshooting

- **API errors**: Make sure your API key is valid and has credits
- **Images not working**: Check that you're using a modern browser
- **Settings not saving**: Make sure localStorage is enabled in your browser

## Security Note

⚠️ **Important**: The API key is visible in the source code. This is fine for personal use or when you control who accesses the file, but don't share the file publicly if you don't want others to use your API key.

## License

MIT License - feel free to modify and use as needed!
