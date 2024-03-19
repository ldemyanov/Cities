// import Preview from "../components/Preview";
import { store } from "./store";
import { Provider } from "react-redux";
import GameWindow from "../components/GameWindow";

export default function App() {
  return (
    <Provider store={store}>
      <GameWindow />
    </Provider>
  );
}
