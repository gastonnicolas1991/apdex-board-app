import {
  getFirstNElements,
  sortListByScoring,
  compareScoring,
  getTopFiveApps,
} from "./functions";

describe("Functions: ", () => {
  describe("getFirstNElements", () => {
    test("receives a list of strings and the number three and should return the first three strings", () => {
      const list = ["a", "b", "c", "d", "h"];
      const result = getFirstNElements(list, 3);

      expect(result).toEqual(["a", "b", "c"]);
    });

    test("receives a list of integers and the number two and should return the first two numbers", () => {
      const list = [22, 33, 56, 78];
      const result = getFirstNElements(list, 2);

      expect(result).toEqual([22, 33]);
    });

    test("receives a list of objects and the number two and should return the first two objects", () => {
      const list = [
        { score: 66, appName: "Test1" },
        { score: 98, appName: "Test3" },
        { score: 77, appName: "Test2" },
      ];
      const result = getFirstNElements(list, 2);

      expect(result).toEqual([
        { score: 66, appName: "Test1" },
        { score: 98, appName: "Test3" },
      ]);
    });

    test("receives an empty list and returns an empty list", () => {
      const list: unknown[] = [];
      const result = getFirstNElements(list, 2);

      expect(result).toEqual([]);
    });
  });

  describe("sortListByScoring", () => {
    test("receives a list and a comparator function and sort it ASC by scoring", () => {
      const list = [
        { score: 66, appName: "Test1" },
        { score: 98, appName: "Test3" },
        { score: 77, appName: "Test2" },
      ];
      const result = sortListByScoring(list, compareScoring, "asc");

      expect(result).toEqual([
        { score: 66, appName: "Test1" },
        { score: 77, appName: "Test2" },
        { score: 98, appName: "Test3" },
      ]);
    });
    test("receives a list and a comparator function and sort it DESC by scoring", () => {
      const list = [
        { score: 66, appName: "Test1" },
        { score: 98, appName: "Test3" },
        { score: 77, appName: "Test2" },
      ];
      const result = sortListByScoring(list, compareScoring, "desc");

      expect(result).toEqual([
        { score: 98, appName: "Test3" },
        { score: 77, appName: "Test2" },
        { score: 66, appName: "Test1" },
      ]);
    });
  });

  describe("getTopFiveApps", () => {
    test("receives a list a return the top five apps ordered DESC", () => {
      const list = [
        { score: 12, appName: "a" },
        { score: 45, appName: "b" },
        { score: 13, appName: "c" },
        { score: 78, appName: "d" },
        { score: 14, appName: "e" },
        { score: 16, appName: "f" },
        { score: 25, appName: "g" },
        { score: 1, appName: "h" },
        { score: 44, appName: "i" },
      ];
      const result = getTopFiveApps(list);

      expect(result).toEqual([
        { score: 78, appName: "d" },
        { score: 45, appName: "b" },
        { score: 44, appName: "i" },
        { score: 25, appName: "g" },
        { score: 16, appName: "f" },
      ]);
    });
  });
});
