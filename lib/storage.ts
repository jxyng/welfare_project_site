export const FAVORITE_KEY = "favorite_welfare";

export function getFavorites(): string[] {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(localStorage.getItem(FAVORITE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveFavorites(ids: string[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(ids));
}

export function toggleFavorite(id: string) {
  const list = getFavorites();

  if (list.includes(id)) {
    saveFavorites(list.filter((v) => v !== id));
  } else {
    saveFavorites([...list, id]);
  }
}
