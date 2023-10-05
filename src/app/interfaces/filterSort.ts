import { Language } from "../_data/languages";

export interface IFilterSort {
  activeSort: string;
  filter: IFilter;
}

export interface IFilter {
  languages: Map<Language, boolean>;
  includeSchool: boolean;
}
