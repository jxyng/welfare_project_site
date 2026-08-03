"use client";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchBox({
  value,
  onChange,
}: Props) {
  return (
    <input
      className="w-full rounded-lg border p-3"
      placeholder="복지명, 기관명 검색..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
