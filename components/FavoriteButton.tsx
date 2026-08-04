"use client";

import { Heart } from "lucide-react";
import { useFavorite } from "@/hooks/useFavorite";

interface Props {
  id: string;
}

export default function FavoriteButton({ id }: Props) {
  const { favorites, toggle } = useFavorite();

  const active = favorites.includes(id);

  return (
    <button
      onClick={() => toggle(id)}
      className={`rounded-lg p-2 transition ${
        active
          ? "bg-red-100 text-red-500"
          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
      }`}
    >
      <Heart
        size={20}
        fill={active ? "currentColor" : "none"}
      />
    </button>
  );
}
