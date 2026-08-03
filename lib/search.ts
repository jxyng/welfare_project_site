import { Welfare } from "@/types/welfare";

export function sortDeadline(
  list: Welfare[]
) {
  return [...list].sort(
    (a, b) =>
      new Date(a.deadline).getTime() -
      new Date(b.deadline).getTime()
  );
}
