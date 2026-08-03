"use client";

interface Props {
  region: string;
  setRegion: (v: string) => void;

  age: string;
  setAge: (v: string) => void;

  income: string;
  setIncome: (v: string) => void;
}

export default function FilterPanel({
  region,
  setRegion,
  age,
  setAge,
  income,
  setIncome,
}: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-3">

      <select
        className="rounded border p-3"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="">전체 지역</option>
        <option>서울</option>
        <option>부산</option>
        <option>대구</option>
        <option>인천</option>
        <option>광주</option>
        <option>대전</option>
        <option>울산</option>
        <option>세종</option>
        <option>경기</option>
        <option>강원</option>
      </select>

      <select
        className="rounded border p-3"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      >
        <option value="">전체 나이</option>
        <option>청년</option>
        <option>중장년</option>
        <option>노인</option>
      </select>

      <select
        className="rounded border p-3"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      >
        <option value="">전체 소득</option>
        <option>무관</option>
        <option>중위50%</option>
        <option>중위80%</option>
        <option>중위100%</option>
      </select>

    </div>
  );
}
