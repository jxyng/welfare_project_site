export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function paginate<T>(
  array: T[],
  page: number,
  pageSize: number
) {
  const start = (page - 1) * pageSize;

  return {
    items: array.slice(start, start + pageSize),
    totalPages: Math.ceil(array.length / pageSize),
  };
}
