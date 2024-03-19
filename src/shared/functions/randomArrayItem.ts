const randomArrayItem = function randomArrayItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

export { randomArrayItem }
