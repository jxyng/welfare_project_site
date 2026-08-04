"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "favorites";

export function useFavorite() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const load = useCallback(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        setFavorites([]);
        return;
      }

      setFavorites(JSON.parse(saved));
    } catch {
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    load();

    const sync = () => load();

    window.addEventListener("storage", sync);

    return () =>
      window.removeEventListener("storage", sync);
  }, [load]);

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

  return {
    favorites,
    toggle,
    isFavorite: (id: string) => favorites.includes(id),
  };
}
