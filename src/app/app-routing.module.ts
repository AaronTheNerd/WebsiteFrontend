import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { BugComponent } from "./bug/bug.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { WorkComponent } from "./work/work.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
    data: { animation: "home" },
  },
  {
    path: "about",
    component: AboutComponent,
    data: { animation: "about" },
  },
  {
    path: "projects",
    component: ProjectsComponent,
    data: { animation: "list" },
  },
  {
    path: "projects/:id",
    component: ProjectDetailComponent,
    data: { animation: "project" },
  },
  {
    path: "work",
    component: WorkComponent,
    data: { animation: "work" },
  },
  {
    path: "bug",
    component: BugComponent,
    data: { animation: "bug" },
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { animation: "contact" },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
