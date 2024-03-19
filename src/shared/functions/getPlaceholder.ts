export const getPlaceholder = (currentPlayer: string, currentSymbol: string): string => {
  if (currentPlayer === "player") {
    if (currentSymbol) {
      return `Знаете город на букву “${currentSymbol}”?`;
    }
    return "Напишите любой город, например: Где вы живете?";
  }
  return "Ожидаем ответа соперника...";
};