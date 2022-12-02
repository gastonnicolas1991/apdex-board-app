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

export type AppFromServer = {
  name: string;
  contributors: string[];
  version: number;
  apdex: number;
  host: string[];
};

export interface AppsByHostState {
  data: Host[];
  loading: boolean;
  error: string | unknown;
}
