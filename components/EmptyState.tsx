interface Props {
  title?: string;
  description?: string;
}

export default function EmptyState({
  title = "검색 결과가 없습니다.",
  description = "필터를 변경하거나 검색어를 다시 입력해보세요.",
}: Props) {
  return (
    <div className="rounded-xl border bg-white py-16 text-center">
      <h2 className="text-xl font-bold">{title}</h2>

      <p className="mt-2 text-gray-500">
        {description}
      </p>
    </div>
  );
}
