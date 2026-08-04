import Link from "next/link";
import { Welfare } from "@/types/welfare";
import FavoriteButton from "./FavoriteButton";

export default function WelfareCard({
  item,
}: {
  item: Welfare;
}) {
  return (
    <div className="rounded-xl bg-white p-5 shadow transition hover:shadow-lg">
      <div className="flex justify-between items-start">
        <span className="rounded bg-blue-100 px-2 py-1 text-xs">
          {item.category}
        </span>

        <FavoriteButton id={item.id} />
      </div>

      <h2 className="mt-3 text-xl font-bold">
        {item.title}
      </h2>

      <p className="mt-2 line-clamp-3 text-gray-600">
        {item.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        <span>📍 {item.region}</span>
        <span>👤 {item.age}</span>
        <span>💰 {item.income}</span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm text-red-500">
          {item.deadline}
        </span>

        <Link
          href={`/detail/${item.id}`}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          상세보기
        </Link>
      </div>
    </div>
  );
}
