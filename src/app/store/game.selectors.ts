import { RootState } from ".";
import { formatMsToString } from "../../shared/functions/formatMsToString";

export const selectLastCity = (state: RootState) => state.game.cities.at(-1);

export const selectCountCities = (state: RootState) => state.game.cities.length;

export const selectGameDuration = (state: RootState) => {
  const ms = state.game.endTime - state.game.startTime;
  return formatMsToString(ms);
}
