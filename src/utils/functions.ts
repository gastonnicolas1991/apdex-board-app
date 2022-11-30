interface Scoring {
  score: number;
}

export const getFirstNElements = <T>(list: T[], n: number): T[] =>
  list.slice(0, n);

export const compareScoring = (a: Scoring, b: Scoring): number =>
  b.score < a.score ? 1 : b.score > a.score ? -1 : 0;

export const sortListByScoring = <T>(
  list: T[],
  comparator: (a: T, b: T) => number,
  order: "asc" | "desc"
): T[] =>
  order === "asc" ? list.sort(comparator) : list.sort(comparator).reverse();

export const getTopFiveApps = <T extends Scoring>(list: T[]) =>
  getFirstNElements(sortListByScoring(list, compareScoring, "desc"), 5);
