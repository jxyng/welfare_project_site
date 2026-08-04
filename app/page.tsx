"use client";

import { useMemo, useState, useEffect } from "react";
import welfareData from "@/data/welfare.json";

import SearchBox from "@/components/SearchBox";
import FilterPanel from "@/components/FilterPanel";
import WelfareCard from "@/components/WelfareCard";
import Pagination from "@/components/Pagination";

import { Welfare } from "@/types/welfare";

const PAGE_SIZE = 6;

export default function HomePage() {
  const [keyword, setKeyword] = useState("");
  const [region, setRegion] = useState("");
  const [age, setAge] = useState("");
  const [income, setIncome] = useState("");

  const [page, setPage] = useState(1);

  const list = useMemo(() => {
    return (welfareData as Welfare[])
      .filter((item) => {
        if (
          keyword &&
          !(
            item.title.includes(keyword) ||
            item.description.includes(keyword) ||
            item.organization.includes(keyword)
          )
        )
          return false;

        if (region && item.region !== region) return false;
        if (age && item.age !== age) return false;
        if (income && item.income !== income) return false;

        return true;
      })
      .sort(
        (a, b) =>
          new Date(a.deadline).getTime() -
          new Date(b.deadline).getTime()
      );
  }, [keyword, region, age, income]);

  useEffect(() => {
    setPage(1);
  }, [keyword, region, age, income]);

  const totalPage = Math.ceil(list.length / PAGE_SIZE);

  const pageItems = list.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">
        원하는 복지를 쉽고 빠르게 찾으세요
      </h1>

      <SearchBox value={keyword} onChange={setKeyword} />

      <FilterPanel
        region={region}
        setRegion={setRegion}
        age={age}
        setAge={setAge}
        income={income}
        setIncome={setIncome}
      />

      <div className="text-gray-500">
        검색 결과 {list.length}건
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pageItems.map((item) => (
          <WelfareCard key={item.id} item={item} />
        ))}
      </div>

      <Pagination
        page={page}
        totalPage={totalPage}
        onChange={setPage}
      />

      {list.length === 0 && (
        <div className="rounded-lg border bg-white p-10 text-center text-gray-500">
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
}
