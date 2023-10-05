import { Component } from "@angular/core";
import { FilterSortService } from "./filter.service";
import { IProject } from "../interfaces/project";
import { Sorts } from "src/app/_data/sorts";
import { formatDate } from "@angular/common";
import { Observable, switchMap, of } from "rxjs";
import { Language, display } from "../_data/languages";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent {
  SORTS: string[] = [
    Sorts.title_a_z,
    Sorts.title_z_a,
    Sorts.lang_a_z,
    Sorts.lang_z_a,
    Sorts.newest,
  ];
  projects$: Observable<IProject[]>;
  activeSort$: Observable<string>;
  filterSchool$: Observable<boolean>;
  filterLangs$: Observable<Map<Language, boolean>>;

  githubIcon = faGithub;
  starIcon = faStar;
  displayLang = display;

  constructor(public filterSortService: FilterSortService) {
    this.projects$ = this.filterSortService
      .getState()
      .pipe(switchMap((state) => of(this.filterSortService.applyState(state))));
    this.activeSort$ = this.filterSortService
      .getState()
      .pipe(switchMap((state) => of(state.activeSort)));
    this.filterSchool$ = this.filterSortService
      .getState()
      .pipe(switchMap((state) => of(state.filter.includeSchool)));
    this.filterLangs$ = this.filterSortService
      .getState()
      .pipe(switchMap((state) => of(state.filter.languages)));
  }

  fDate(date: Date): string {
    return formatDate(
      date.getTime() + date.getTimezoneOffset() * 60000,
      "MM/yyyy",
      "en-US"
    );
  }
}
