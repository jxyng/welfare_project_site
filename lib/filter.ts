import { Welfare } from "@/types/welfare";

interface FilterOption {
  keyword?: string;
  region?: string;
  age?: string;
  income?: string;
}

export function filterWelfare(
  list: Welfare[],
  option: FilterOption
) {
  return list.filter((item) => {
    if (
      option.keyword &&
      !item.title.includes(option.keyword) &&
      !item.description.includes(option.keyword)
    ) {
      return false;
    }

    if (option.region && item.region !== option.region)
      return false;

    if (option.age && item.age !== option.age)
      return false;

    if (
      option.income &&
      item.income !== option.income
    )
      return false;

    return true;
  });
}
