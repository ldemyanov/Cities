import { store } from "../store";
import { Provider } from "react-redux";
import GameWindow from "../components/GameWindow";
import "./fonts.css";
import "./index.css";

export default function App() {
  return (
    <Provider store={store}>
      <GameWindow />
    </Provider>
  );
}
