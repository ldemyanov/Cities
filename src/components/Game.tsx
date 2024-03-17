import ButtonSend from "./ButtonSend";
import Message from "./Message";

const Game = () => {
  return (
    <div className="grid place-items-center min-h-screen bg-gray-100">
      <div className="h-[385px] w-[576px] bg-white border rounded-2xl shadow-md">
        <div className="flex flex-col h-full">
          {/* Head */}
          <div className="flex justify-between pt-5 px-4 h-16 border-b-5 border-violet-300">
            <div>Сейчас ваша очередь</div>
            <div>01:59</div>
          </div>
          {/* Body */}
          <div className="p-6 grid place-items-center text-center grow text-sm text-gray-400">Первый участник вспоминает города...</div>
          <div className="p-6">
            <Message />
            <Message left />
          </div>
          {/* Footer */}
          <div className="mt-auto p-4">
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-4 text-sm text-gray-900 border-0 rounded-lg bg-gray-100 placeholder:text-black"
                placeholder="Напишите любой город, например: Где вы живете?"
                required
              />
              <ButtonSend className="absolute end-2.5 bottom-2.5"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
