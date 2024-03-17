const Preview = () => {
  return (
    // Wrapper
    <div className="grid place-items-center min-h-screen bg-gray-100">   
      {/* GameWindow or Container */}
      <div className="h-[385px] w-[576px] bg-white border rounded-2xl shadow-md">
        {/* Header */}
        <div className="h-16 grid place-items-center border-b-3 border-color-gray-100">Игра в города на время</div>
        {/* Preview Text */}
        <div className="flex flex-col gap-6 p-6">
          <p>Цель: Назвать как можно больше реальных городов.</p>
          <ul className="list-disc ps-5">
            <li>Запрещается повторение городов.</li>
            <li>Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого бы пропускаем эту букву и игрок должен назвать город на букву стоящую перед ъ или ь знаком.</li>
            <li>Каждому игроку дается 2 минуты на размышления, если спустя это время игрок не вводит слово он считается проигравшим</li>
          </ul>
          <button
            type="button"
            className="w-[126px] px-5 py-2.5 mx-auto text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm focus:outline-none"
          >
            Начать игру
          </button>
        </div>
      </div>
    </div>
  )
}

export default Preview;