"use client";

import welfare from "@/data/welfare.json";
import WelfareCard from "@/components/WelfareCard";
import EmptyState from "@/components/EmptyState";
import { useFavorite } from "@/hooks/useFavorite";

export default function FavoritePage() {
  const { favorites } = useFavorite();

  const list = welfare.filter((v) =>
    favorites.includes(v.id)
  );

  if (list.length === 0) {
    return (
      <EmptyState
        title="즐겨찾기가 비어 있습니다."
        description="관심 있는 복지를 추가해보세요."
      />
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {list.map((item) => (
        <WelfareCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}
