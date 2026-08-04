"use client";

interface Props {
  page: number;
  totalPage: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPage,
  onChange,
}: Props) {
  if (totalPage <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: totalPage }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index + 1)}
          className={`px-4 py-2 rounded ${
            page === index + 1
              ? "bg-blue-600 text-white"
              : "bg-white border"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
