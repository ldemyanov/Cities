import { useEffect, useRef } from "react";
import { useAppSelector } from "../app/store";
import Message from "./Message";

const GameChat = () => {
  const cities = useAppSelector((state) => state.game.cities);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [cities]);

  return (
    <div ref={ref} className="p-6 grow overflow-y-auto">
      {cities.map((city, index) => (
        <Message key={city} text={city} left={index % 2 === 1} />
      ))}

      {cities.length === 0 && (
        <div className="p-6 grid place-items-center text-center grow text-sm text-gray-400">
          Первый участник вспоминает города...
        </div>
      )}
    </div>
  );
};

export default GameChat;
