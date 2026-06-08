function NowInFocus(){
    const value = 49;
    return(
        <div className="p-6 bg-white rounded-3xl shadow">
          <p className="text-muted text-sm font-bold">СЕЙЧАС В ФОКУСЕ</p>
          <h2 className="text-4xl text-black font-[900]">Запустить MVP<br />FocusLine</h2>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-3 rounded-full bg-gray-200 overflow-hidden">
              <div 
                className="
                h-full
                rounded-full
                bg-gradient-to-r
              from-violet-600
              to-blue-500
                transition-all
                duration-500
                "
                style={{
                        width: `${value}%`
                }}
              />
            </div>
            <span className="font-bold text-2xl text-black">
                {value}%
            </span>
          </div>
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
    )
}
export default NowInFocus;