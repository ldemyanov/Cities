import { RootState } from ".";
import { formatMsToString } from "../shared/functions/formatMsToString";

export const selectEndInfo = (state: RootState) => ({
  duration: formatMsToString(state.game.endTime - state.game.startTime),
  lastCity: state.game.cities.at(-1),
  countCities: state.game.cities.length,
})