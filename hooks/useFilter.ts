"use client";

import { useMemo, useState } from "react";
import { Welfare } from "@/types/welfare";
import { filterWelfare } from "@/lib/filter";

export interface FilterState {
  keyword: string;
  region: string;
  age: string;
  income: string;
  category: string;
}

const initialState: FilterState = {
  keyword: "",
  region: "",
  age: "",
  income: "",
  category: "",
};

export default function useFilter(data: Welfare[]) {
  const [filters, setFilters] = useState<FilterState>(initialState);

  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetFilter = () => {
    setFilters(initialState);
  };

  const filtered = useMemo(() => {
    return filterWelfare(data, filters);
  }, [data, filters]);

  return {
    filters,
    filtered,
    updateFilter,
    resetFilter,
  };
}
