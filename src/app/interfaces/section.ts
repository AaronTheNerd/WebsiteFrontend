export interface ISection {
  id: string;
  title: string;
  collapsed: boolean;
  subsections: ISection[];
}
