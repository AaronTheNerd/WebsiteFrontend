import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ProjectService } from "../project.service";
import { IProject } from "../interfaces/project";
import { ProjectDetailDirective } from "../project-detail.directive";
import { IProjectComponent } from "./project.component";

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.scss"],
})
export class ProjectDetailComponent implements OnInit {
  project: IProject;
  @ViewChild(ProjectDetailDirective, { static: true })
  projectHost!: ProjectDetailDirective;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {
    this.project = this.getProject();
  }

  ngOnInit(): void {
    this.loadProject();
  }

  getProject(): IProject {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    return this.projectService.getProject(id);
  }

  loadProject(): void {
    const viewContainerRef = this.projectHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<IProjectComponent>(
      this.project.component
    );
    componentRef.instance.project = this.project;
  }
}
