export interface Presenter {
  name: string;
  affiliation: string;
}

export interface Program {
  startAt: string;
  endAt: string;
  title: string;
  description: string;
  presenter: Presenter;
  level: "BASIC" | "INTERMEDIATE" | "ADVANCED";
}
