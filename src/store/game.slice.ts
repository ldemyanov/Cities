import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getLastSymbolOfCity } from '../shared/functions/getLastSymbolOfCity';
import { capitalize } from '../shared/functions/capitalize';

export type Player = "player" | "computer";
export type Winner = Player | "";

type GameState = {
  isGame: boolean;
  cities: string[],
  currentSymbol: string,
  currentPlayer: Player,
  winner: Winner,
  startTime: number,
  endTime: number,
}

const initialState: GameState = {
  isGame: false,
  startTime: 0,
  endTime: 0,
  cities: [],
  currentSymbol: "",
  currentPlayer: "player",
  winner: "",
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addCity: (state, { payload }: PayloadAction<string>) => {
      const city = capitalize(payload);
      state.cities.push(city);
      state.currentSymbol = getLastSymbolOfCity(city);
      state.currentPlayer = state.currentPlayer === "player" ? "computer" : "player";
    },
    startGame: (state) => {
      state.isGame = true;
      state.startTime = Date.now();
      state.cities = [];
      state.currentSymbol = "";
      state.currentPlayer = "player";
      state.winner = "";
    },
    finishGame: (state) => {
      state.winner = state.currentPlayer === "player" ? "computer" : "player";
      state.isGame = false;
      state.endTime = Date.now();
    }
  },
})

export const { addCity, startGame, finishGame } = gameSlice.actions;

export default gameSlice;