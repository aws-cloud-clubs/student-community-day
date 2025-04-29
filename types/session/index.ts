export interface SessionModuleProps {
  title: string;
  titleColor?: string;
  sessions: {
    time: string;
    title: string;
    speaker: string;
  }[];
}