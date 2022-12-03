import {
  getFirstNElements,
  sortListByScoring,
  compareScoring,
  getTopFiveApps,
  mapFromAppsToHosts,
  addAppToHosts,
  removeAppFromHosts,
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
        { score: 66, appName: "Test1", releaseVersion: 2 },
        { score: 98, appName: "Test3", releaseVersion: 3 },
        { score: 77, appName: "Test2", releaseVersion: 1 },
      ];
      const result = getFirstNElements(list, 2);

      expect(result).toEqual([
        { score: 66, appName: "Test1", releaseVersion: 2 },
        { score: 98, appName: "Test3", releaseVersion: 3 },
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
        { score: 66, appName: "Test1", releaseVersion: 2 },
        { score: 98, appName: "Test3", releaseVersion: 2 },
        { score: 77, appName: "Test2", releaseVersion: 2 },
      ];
      const result = sortListByScoring(list, compareScoring, "asc");

      expect(result).toEqual([
        { score: 66, appName: "Test1", releaseVersion: 2 },
        { score: 77, appName: "Test2", releaseVersion: 2 },
        { score: 98, appName: "Test3", releaseVersion: 2 },
      ]);
    });
    test("receives a list and a comparator function and sort it DESC by scoring", () => {
      const list = [
        { score: 66, appName: "Test1", releaseVersion: 2 },
        { score: 98, appName: "Test3", releaseVersion: 2 },
        { score: 77, appName: "Test2", releaseVersion: 2 },
      ];
      const result = sortListByScoring(list, compareScoring, "desc");

      expect(result).toEqual([
        { score: 98, appName: "Test3", releaseVersion: 2 },
        { score: 77, appName: "Test2", releaseVersion: 2 },
        { score: 66, appName: "Test1", releaseVersion: 2 },
      ]);
    });
  });

  describe("getTopFiveApps", () => {
    test("receives a list a return the top five apps ordered DESC", () => {
      const list = [
        { score: 12, appName: "a", releaseVersion: 2 },
        { score: 45, appName: "b", releaseVersion: 2 },
        { score: 13, appName: "c", releaseVersion: 2 },
        { score: 78, appName: "d", releaseVersion: 2 },
        { score: 14, appName: "e", releaseVersion: 2 },
        { score: 16, appName: "f", releaseVersion: 2 },
        { score: 25, appName: "g", releaseVersion: 2 },
        { score: 1, appName: "h", releaseVersion: 2 },
        { score: 44, appName: "i", releaseVersion: 2 },
      ];
      const result = getTopFiveApps(list);

      expect(result).toEqual([
        { score: 78, appName: "d", releaseVersion: 2 },
        { score: 45, appName: "b", releaseVersion: 2 },
        { score: 44, appName: "i", releaseVersion: 2 },
        { score: 25, appName: "g", releaseVersion: 2 },
        { score: 16, appName: "f", releaseVersion: 2 },
      ]);
    });
  });

  describe("mapFromAppsToHosts", () => {
    test("receives a list of apps and maps it to a list of hosts", () => {
      const list = [
        {
          name: "Small Fresh Pants - Kautzer - Boyer, and Sons",
          contributors: ["Edwin Reinger"],
          version: 7,
          apdex: 68,
          host: ["7e6272f7-098e.dakota.biz", "9a450527-cdd9.kareem.info"],
        },
        {
          name: "Ergonomic Wooden Soap - Lemke and Sons, Inc",
          contributors: ["Miss Moises Walter", "Caroline Murazik"],
          version: 2,
          apdex: 61,
          host: ["7e6272f7-098e.dakota.biz"],
        },
      ];
      const result = mapFromAppsToHosts(list);

      expect(result).toEqual([
        {
          hostName: "9a450527-cdd9.kareem.info",
          appList: [
            {
              score: 68,
              appName: "Small Fresh Pants - Kautzer - Boyer, and Sons",
              releaseVersion: 7,
            },
          ],
        },
        {
          hostName: "7e6272f7-098e.dakota.biz",
          appList: [
            {
              score: 68,
              appName: "Small Fresh Pants - Kautzer - Boyer, and Sons",
              releaseVersion: 7,
            },
            {
              score: 61,
              appName: "Ergonomic Wooden Soap - Lemke and Sons, Inc",
              releaseVersion: 2,
            },
          ],
        },
      ]);
    });
  });

  describe("addAppToHosts", () => {
    test("receives a list of hosts and an app and return the list with the app added to each host", () => {
      const list = [
        {
          hostName: "9a450527-cdd9.kareem.info",
          appList: [
            {
              score: 68,
              appName: "Small Fresh Pants - Kautzer - Boyer, and Sons",
              releaseVersion: 7,
            },
          ],
        },
      ];
      const result = addAppToHosts(list, {
        score: 100,
        appName: "New app",
        releaseVersion: 4,
      });

      expect(result).toEqual([
        {
          hostName: "9a450527-cdd9.kareem.info",
          appList: [
            {
              score: 68,
              appName: "Small Fresh Pants - Kautzer - Boyer, and Sons",
              releaseVersion: 7,
            },
            { score: 100, appName: "New app", releaseVersion: 4 },
          ],
        },
      ]);
    });
  });

  describe("removeAppFromHosts", () => {
    test("receives a list of hosts and an app and return the list WITHOUT the app in each host", () => {
      const list = [
        {
          hostName: "9a450527-cdd9.kareem.info",
          appList: [
            {
              score: 68,
              appName: "Small Fresh Pants - Kautzer - Boyer, and Sons",
              releaseVersion: 7,
            },
            { score: 100, appName: "New app", releaseVersion: 4 },
          ],
        },
      ];
      const result = removeAppFromHosts(list, {
        score: 100,
        appName: "New app",
        releaseVersion: 4,
      });

      expect(result).toEqual([
        {
          hostName: "9a450527-cdd9.kareem.info",
          appList: [
            {
              score: 68,
              appName: "Small Fresh Pants - Kautzer - Boyer, and Sons",
              releaseVersion: 7,
            },
          ],
        },
      ]);
    });
  });
});
