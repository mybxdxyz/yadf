// src/lib/roll.ts
export function randomDistro<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}
