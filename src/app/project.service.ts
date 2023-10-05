import { Injectable } from "@angular/core";

import { IProject } from "./interfaces/project";
import { PROJECTS } from "./_data/projects";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  getProjects(): IProject[] {
    return PROJECTS;
  }

  getProject(id: number): IProject {
    return PROJECTS.find((proj) => proj.id === id)!;
  }
}
