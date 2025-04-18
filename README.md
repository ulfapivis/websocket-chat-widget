# WebSocket Chat Widget

A customizable chat widget that connects to a WebSocket server, perfect for adding live chat functionality to websites.

## Version 1.0.2
- Fixed Markdown parsing after images
- Improved DOMPurify configuration for better HTML rendering
- Enhanced content sanitization while preserving all formatting
- Added support for more HTML tags in messages

## Version 1.0.1
- Fixed icon rendering and sizing issues
- Improved WebSocket connection stability
- Enhanced markdown rendering for messages
- Added support for image and URL-based icons

## Installation via jsDelivr CDN

```html
<!-- Required Dependencies -->
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dompurify/dist/purify.min.js"></script>

<!-- Chat Widget Script -->
<script src="https://cdn.jsdelivr.net/gh/username/websocket-chat-widget@1.0.2/dist/websocket-chat-widget.min.js"></script>

<!-- Optional: Chat Widget Styles (if you don't want to use the built-in styles) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/username/websocket-chat-widget@1.0.2/dist/websocket-chat-widget.css">
```

> **Note:** Replace `username` with your actual GitHub username once you've created the repository.

## Usage

### Basic Usage

```javascript
// Initialize the chat widget with configuration options
const chatWidget = new WebSocketChatWidget({
  websocket: {
    url: 'wss://your-websocket-server.com/endpoint',
    autoConnect: true
  },
  chatId: 'unique-chat-id',  // Required - identifies which assistant to use
  theme: {
    primaryColor: '#2563eb',     // Main theme color
    secondaryColor: '#1e40af'    // Secondary color
    // See documentation for more theme options
  },
  text: {
    headerTitle: 'Chat Support',
    welcomeMessage: 'Welcome! How can I help you today?'
  }
});
```

## Using the Widget Configurator

The package includes a visual configurator that allows you to customize the widget without writing code. To use it:

1. Open `websocket-chat-widget-configurator.html` in your browser
2. Customize all aspects of the widget using the visual interface
3. Click "Generate Code" to get the customized code
4. Copy and paste the generated code into your website

The configurator allows you to:
- Set up theme colors and styling
- Configure predefined questions
- Customize icons and branding
- Test the widget appearance in real-time

## Configuration Options

### Required Options

| Option | Description |
|--------|-------------|
| `chatId` | Unique identifier for the chat session |

### WebSocket Options

| Option | Default | Description |
|--------|---------|-------------|
| `websocket.url` | `'wss://apivisflow.onrender.com/nodes/chatagent'` | WebSocket server URL |
| `websocket.autoConnect` | `true` | Whether to automatically connect when initialized |

### Theme Options

| Option | Default | Description |
|--------|---------|-------------|
| `theme.primaryColor` | `'#2563eb'` | Main theme color (button, header, etc) |
| `theme.secondaryColor` | `'#1e40af'` | Secondary color (user avatar) |
| `theme.userMessageBg` | `'#dbeafe'` | User message background |
| `theme.userMessageText` | `'#1e40af'` | User message text |
| `theme.botMessageBg` | `'#f3f4f6'` | Bot message background |
| `theme.botMessageText` | `'#1f2937'` | Bot message text |
| `theme.systemMessageBg` | `'#f3f4f6'` | System message background |
| `theme.systemMessageText` | `'#4b5563'` | System message text |

### Size and Position Options

| Option | Default | Description |
|--------|---------|-------------|
| `size.width` | `'380px'` | Widget width |
| `size.height` | `'550px'` | Widget height |
| `size.buttonSize` | `'60px'` | Chat button size |
| `position.bottom` | `'20px'` | Distance from bottom |
| `position.right` | `'20px'` | Distance from right |

### Text Options

| Option | Default | Description |
|--------|---------|-------------|
| `text.headerTitle` | `'Chat Support'` | Title displayed in the header |
| `text.welcomeMessage` | `'Welcome! How can I help you today?'` | Initial message displayed |
| `text.inputPlaceholder` | `'Type your message...'` | Placeholder for input field |

### Predefined Questions

| Option | Default | Description |
|--------|---------|-------------|
| `predefinedQuestions.enabled` | `false` | Whether to enable predefined question buttons |
| `predefinedQuestions.position` | `'top'` | Where to position buttons ('top', 'bottom', 'welcome') |
| `predefinedQuestions.style` | `'button'` | Button style ('button' or 'pill') |
| `predefinedQuestions.questions` | `[]` | Array of question objects with text and value |
| `predefinedQuestions.buttonColor` | `'#3b82f6'` | Button background color |
| `predefinedQuestions.textColor` | `'#ffffff'` | Button text color |
| `predefinedQuestions.hoverColor` | `'#2563eb'` | Button hover color |
| `predefinedQuestions.hideAfterSelection` | `false` | Whether to hide buttons after selection |

## Methods

| Method | Description |
|--------|-------------|
| `toggleChat()` | Toggle the chat panel visibility |
| `showChat()` | Show the chat panel |
| `hideChat()` | Hide the chat panel |
| `sendMessage(text)` | Send a message programmatically |
| `connect()` | Connect to the WebSocket server |

## License

MIT
