import Link from "next/link";
import { Welfare } from "@/types/welfare";

export default function WelfareCard({
  item,
}: {
  item: Welfare;
}) {
  return (
    <div className="rounded-xl bg-white p-5 shadow hover:shadow-lg transition">
      <div className="flex justify-between">
        <span className="rounded bg-blue-100 px-2 py-1 text-xs">
          {item.category}
        </span>

        <span className="text-red-500 text-sm">
          {item.deadline}
        </span>
      </div>

      <h2 className="mt-3 text-xl font-bold">
        {item.title}
      </h2>

      <p className="mt-2 text-gray-600 line-clamp-3">
        {item.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        <span>📍 {item.region}</span>
        <span>👤 {item.age}</span>
        <span>💰 {item.income}</span>
      </div>

      <Link
        href={`/detail/${item.id}`}
        className="mt-5 inline-block rounded bg-blue-600 px-4 py-2 text-white"
      >
        상세보기
      </Link>
    </div>
  );
}
