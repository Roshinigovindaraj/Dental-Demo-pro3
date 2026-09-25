import './App.css'

const CANVA_EMBED_URL =
  'https://www.canva.com/design/DAHWM7OkdXE/69Ll3N4EtsJlMcNRir4JMg/view?embed'

function App() {
  return (
    <main className="canva-page">
      <iframe
        className="canva-embed"
        src={CANVA_EMBED_URL}
        title="Untitled (1024 x 1536 px) by Roshini"
        loading="eager"
        allow="fullscreen"
        allowFullScreen
      />
    </main>
  )
}

export default App
