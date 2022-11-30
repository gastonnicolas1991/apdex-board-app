export type App = {
  score: number;
  appName: string;
  releaseVersion: number;
};

export interface Host {
  hostName: string;
  appList: App[];
}

export type Mode = "list" | "grid";
