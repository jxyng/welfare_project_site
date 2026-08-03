"use client";

import { useEffect, useState } from "react";

export function useFavorite() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");

    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  function toggle(id: string) {
    const next = favorites.includes(id)
      ? favorites.filter((v) => v !== id)
      : [...favorites, id];

    setFavorites(next);

    localStorage.setItem(
      "favorites",
      JSON.stringify(next)
    );
  }

  return {
    favorites,
    toggle,
  };
}
