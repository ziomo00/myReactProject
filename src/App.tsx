
import Navbar from "./components/Navbar";

const pageBackground = {
  background:
    "radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.16), transparent 26%), radial-gradient(circle at 84% 12%, rgba(118, 196, 255, 0.24), transparent 24%), linear-gradient(135deg, #8a43d6, #3347d9)",
};

function App() {


  return (
  <main
      className="min-h-screen px-7 py-7 text-white"
      style={pageBackground}
    >
      <Navbar />

      <section className="mx-auto max-w-7xl py-12">
        {/* Здесь будет контент страницы */}
      </section>
    </main>
)
}

export default App