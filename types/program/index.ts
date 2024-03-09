export interface Presenter {
  name: string;
  affiliation: string;
}

export interface Program {
  startAt?: string;
  endAt: string;
  title: string;
  // description?: string;
  presenter?: Presenter;
  topic?: "Career" | "Sponsor" | "Architecture" | "Serverless" | "DevOps" | "IaC";
}
