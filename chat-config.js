/* The studio assistant's server, for this GitHub Pages copy of the site.
   GitHub Pages cannot keep the Gemini key, so the chat runs on a free
   Cloudflare Worker (chat-worker/worker.js in the project folder). Put its
   address between the quotes, like 'https://enliven-chat.NAME.workers.dev',
   and the chat button appears. Empty, the button stays hidden. */
window.__EE_CHAT_API = '';
