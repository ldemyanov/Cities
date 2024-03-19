import { useStartGame } from "../store/game.hooks";
import Button from "./ui/Button";

const GameDescription = () => {
  const start = useStartGame();

  return (
    <>
      <div className="h-16 grid place-items-center border-b-3 border-color-gray-100 font-bold">
        Игра в города на время
      </div>
      <div className="flex flex-col gap-6 p-6">
        <p className="text-sm">Цель: Назвать как можно больше реальных городов.</p>
        <ul className="list-disc ps-5 text-sm">
          <li>Запрещается повторение городов.</li>
          <li>
            Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого бы пропускаем эту букву и игрок должен
            назвать город на букву стоящую перед ъ или ь знаком.
          </li>
          <li>
            Каждому игроку дается 2 минуты на размышления, если спустя это время игрок не вводит слово он считается
            проигравшим
          </li>
        </ul>
        <Button onClick={start} text="Начать игру" />
      </div>
    </>
  );
};

export default GameDescription;
