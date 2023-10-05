import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { BugComponent } from "./bug/bug.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SideNavbarComponent } from "./side-navbar/side-navbar.component";
import { WorkComponent } from "./work/work.component";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { TableOfContentsComponent } from "./project-detail/table-of-contents/table-of-contents.component";
import { ImageCarouselComponent } from "./projects/image-carousel/image-carousel.component";
import { TruncatePipe } from "./truncate.pipe";
import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions,
} from "ngx-highlightjs";
import { CodeSnippetComponent } from "./project-detail/code-snippet/code-snippet.component";
import { SectionHeadingComponent } from "./project-detail/section-heading/section-heading.component";
import { SubsectionHeadingComponent } from "./project-detail/subsection-heading/subsection-heading.component";
import { ProjectDetailDirective } from "./project-detail.directive";
import { Project1Component } from "./project-detail/projects/project1/project1.component";
import { Project2Component } from "./project-detail/projects/project2/project2.component";
import { Project3Component } from "./project-detail/projects/project3/project3.component";
import { Project4Component } from "./project-detail/projects/project4/project4.component";
import { Project5Component } from "./project-detail/projects/project5/project5.component";
import { Project7Component } from "./project-detail/projects/project7/project7.component";
import { Project9Component } from "./project-detail/projects/project9/project9.component";
import { Project10Component } from "./project-detail/projects/project10/project10.component";
import { Project12Component } from "./project-detail/projects/project12/project12.component";
import { Project13Component } from "./project-detail/projects/project13/project13.component";
import { Project14Component } from "./project-detail/projects/project14/project14.component";
import { Project18Component } from "./project-detail/projects/project18/project18.component";
import { SubsubsectionHeadingComponent } from "./project-detail/subsubsection-heading/subsubsection-heading.component";
import { CommandListComponent } from "./project-detail/command-list/command-list.component";
import { GithubCardComponent } from "./project-detail/github-card/github-card.component";
import { WordSearchComponent } from "./about/word-search/word-search.component";
import { FigureComponent } from "./project-detail/figure/figure.component";
import { FigureWrapperComponent } from "./project-detail/figure-wrapper/figure-wrapper.component";
import { Project20Component } from "./project-detail/projects/project20/project20.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BugComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    SideNavbarComponent,
    WorkComponent,
    ProjectDetailComponent,
    TableOfContentsComponent,
    ImageCarouselComponent,
    TruncatePipe,
    CodeSnippetComponent,
    SectionHeadingComponent,
    SubsectionHeadingComponent,
    ProjectDetailDirective,
    Project1Component,
    Project2Component,
    Project3Component,
    Project4Component,
    Project5Component,
    Project7Component,
    Project9Component,
    Project10Component,
    Project12Component,
    Project13Component,
    Project14Component,
    Project18Component,
    SubsubsectionHeadingComponent,
    CommandListComponent,
    GithubCardComponent,
    WordSearchComponent,
    FigureComponent,
    FigureWrapperComponent,
    Project20Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    HighlightModule,
    MatCardModule,
    NgbModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        coreLibraryLoader: () => import("highlight.js/lib/core"),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        lineNumbersLoader: () => import("highlightjs-line-numbers.js"),
        themePath: "node_modules/highlight.js/styles/github.css",
        languages: {
          typescript: () => import("highlight.js/lib/languages/typescript"),
          json: () => import("highlight.js/lib/languages/json"),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
