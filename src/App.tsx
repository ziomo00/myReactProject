import Navbar from "./components/Navbar";
import Calendar from "./components/Calendar";

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

      <section className="mx-auto max-w-7xl py-12 grid grid-cols-2 ">
        <div>
          <p>Доброе утро, Денис</p>
          <h1 className="text-4xl font-[1000]">
            Держи фокус,<br />
            Двигай линию</h1>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 px-6 shadow-[0_18px_45px_rgba(23,23,38,0.14)] backdrop-blur-[18px]">
            На сегодня запланировано 3 лавных шага.<br/>
            Отличнный день, чтобы закрыть все дедлайны.
        </div>
      </section>

      <section className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-3xl shadow">
          <p className="text-muted text-sm font-bold">СЕЙЧАС В ФОКУСЕ</p>
          <h2 className="text-4xl text-black font-[900]">Запустить MVP<br />FocusLine</h2>
          <div className="grid grid-cols-3 gap-3 text-black">
            <div>
              <p className="text-muted text-sm">Следующий шаг</p>
              Экран задач
            </div>
            <div>
              <p className="text-muted text-sm">Дедлайн</p>
              20 июня
            </div>
            <div>
              <p className="text-muted text-sm">Осталось</p>
              12 задач
            </div>
          </div>
        </div>
        <div>
          <Calendar/>
        </div>
        <div className="p-6 bg-white rounded-3xl shadow text-black">
          <p className="text-muted text-sm font-bold">ПЛАН НА СЕГОДНЯ</p>
        </div>
        <div className="p-6 bg-white rounded-3xl shadow text-black">
          <p className="text-muted text-sm font-bold">ФОКУС-СЕССИЯ</p>
        </div>
        <div className="p-6 bg-white rounded-3xl shadow text-black col-span-2">
          <p className="text-muted text-sm font-bold">ЛИНИЯ ФОКУСА</p>
        </div>
      </section>
    </main>
)
}

export default App