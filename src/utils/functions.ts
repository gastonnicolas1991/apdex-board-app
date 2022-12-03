import { AppFromServer, Host, App } from "../domain/type";

export const getFirstNElements = <T>(list: T[], n: number): T[] =>
  list.slice(0, n);

export const compareScoring = (a: App, b: App): number =>
  b.score < a.score ? 1 : b.score > a.score ? -1 : 0;

export const sortListByScoring = (
  list: App[],
  comparator: (a: App, b: App) => number,
  order: "asc" | "desc"
): App[] => {
  return order === "asc"
    ? [...list].sort(comparator)
    : [...list].sort(comparator).reverse();
};

export const getTopFiveApps = (list: App[]) =>
  getFirstNElements(sortListByScoring(list, compareScoring, "desc"), 5);

export const getTopAppsByHost = (
  hostName: string,
  listOfAppsByHost: Host[]
): App[] => {
  const hostFound: Host | undefined = listOfAppsByHost.filter(
    (host: Host) => host.hostName === hostName
  )[0];
  const result = sortListByScoring(hostFound.appList, compareScoring, "desc");
  return getFirstNElements(result, 25);
};

export const mapFromAppsToHosts = (data: AppFromServer[]): Host[] => {
  let mappedMap = new Map();

  data.forEach((app) => {
    app.host.forEach((host) => {
      const element = mappedMap.get(host);
      if (element) {
        mappedMap.delete(host);
        mappedMap.set(host, [
          ...element,
          {
            appName: app.name,
            releaseVersion: app.version,
            score: app.apdex,
          },
        ]);
      } else {
        mappedMap.set(host, [
          {
            appName: app.name,
            releaseVersion: app.version,
            score: app.apdex,
          },
        ]);
      }
    });
  });

  const list = Array.from(mappedMap, ([name, value]) => ({
    hostName: name,
    appList: value,
  }));

  return list;
};
