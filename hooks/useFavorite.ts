"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "favorites";

export function useFavorite() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      setFavorites([]);
    }
  }, []);

  function toggle(id: string) {
    const next = favorites.includes(id)
      ? favorites.filter((v) => v !== id)
      : [...favorites, id];

    setFavorites(next);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(next)
    );
  }

  function isFavorite(id: string) {
    return favorites.includes(id);
  }

  return {
    favorites,
    toggle,
    isFavorite,
  };
}
