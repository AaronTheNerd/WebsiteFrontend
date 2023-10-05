import { Injectable } from "@angular/core";
import { IProject } from "../interfaces/project";
import { ProjectService } from "../project.service";
import { Observable, Subject, startWith } from "rxjs";
import { IFilterSort } from "../interfaces/filterSort";
import { Sorts } from "../_data/sorts";
import { Language } from "../_data/languages";

const INITIAL_STATE: IFilterSort = {
  activeSort: Sorts.newest,
  filter: {
    languages: new Map<Language, boolean>([
      [Language.cpp, true],
      [Language.c, true],
      [Language.py, true],
      [Language.js, true],
      [Language.java, true],
      [Language.matlab, true],
      [Language.arduino, true],
      [Language.verilog, true],
    ]),
    includeSchool: true,
  },
};

@Injectable({
  providedIn: "root",
})
export class FilterSortService {
  currentState$: Subject<IFilterSort>;
  currentState: IFilterSort;
  isCollapsed: boolean;

  constructor(private projectService: ProjectService) {
    this.currentState$ = new Subject<IFilterSort>();
    this.currentState = INITIAL_STATE;
    this.isCollapsed = true;
  }

  applyFilter(projects: IProject[], state: IFilterSort): IProject[] {
    const filter = state.filter;
    return projects.filter((proj) => {
      if (!filter.includeSchool && proj.school) return false;
      const langs = [];
      for (const lang of filter.languages.keys()) {
        if (filter.languages.get(lang)) {
          langs.push(lang);
        }
      }
      const langInter = langs.filter((x) => proj.languages.includes(x));
      return langInter.length;
    });
  }

  applySort(projects: IProject[], state: IFilterSort): IProject[] {
    switch (state.activeSort) {
      case Sorts.title_a_z:
        return projects.sort(function (a: IProject, b: IProject): number {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();

          if (titleA < titleB) return -1;
          if (titleB < titleA) return 1;
          return 0;
        });
      case Sorts.title_z_a:
        return projects.sort(function (a: IProject, b: IProject): number {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();

          if (titleA < titleB) return 1;
          if (titleB < titleA) return -1;
          return 0;
        });
      case Sorts.lang_a_z:
        return projects.sort(function (a: IProject, b: IProject): number {
          const langA = a.languages[0].toLowerCase();
          const langB = b.languages[0].toLowerCase();

          if (langA < langB) return -1;
          if (langB < langA) return 1;
          return 0;
        });
      case Sorts.lang_z_a:
        return projects.sort(function (a: IProject, b: IProject): number {
          const langA = a.languages[0].toLowerCase();
          const langB = b.languages[0].toLowerCase();

          if (langA < langB) return 1;
          if (langB < langA) return -1;
          return 0;
        });
      case Sorts.newest:
        return projects.sort(function (a: IProject, b: IProject): number {
          const dateA = a.created;
          const dateB = b.created;

          if (dateA < dateB) return 1;
          if (dateB < dateA) return -1;
          return 0;
        });
    }
    return projects;
  }

  applyState(state: IFilterSort): IProject[] {
    return this.applySort(
      this.applyFilter(this.projectService.getProjects(), state),
      state
    );
  }

  getState(): Observable<IFilterSort> {
    return this.currentState$.pipe(startWith(INITIAL_STATE));
  }

  setSort(sort: string) {
    this.currentState.activeSort = sort;
    this.currentState$.next(this.currentState);
  }

  setLangFilter(lang: Language, value: boolean) {
    this.currentState.filter.languages.set(lang, value);
    this.currentState$.next(this.currentState);
  }

  enableAllLangs() {
    this.currentState.filter.languages.forEach((_, key, map) =>
      map.set(key, true)
    );
    this.currentState$.next(this.currentState);
  }

  disableAllLangs() {
    this.currentState.filter.languages.forEach((_, key, map) =>
      map.set(key, false)
    );
    this.currentState$.next(this.currentState);
  }

  setSchoolFilter(value: boolean) {
    this.currentState.filter.includeSchool = value;
    this.currentState$.next(this.currentState);
  }
}
