import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ISection } from "src/app/interfaces/section";

@Component({
  selector: "app-table-of-contents",
  templateUrl: "./table-of-contents.component.html",
  styleUrls: ["./table-of-contents.component.scss"],
})
export class TableOfContentsComponent implements OnInit {
  sections: ISection[] = [];

  constructor(public scroller: ViewportScroller) {}

  ngOnInit(): void {
    this.getSections();
  }

  getSections(): void {
    const detailElem = document.getElementById("project-detail")!;
    const sectionNodes: Element[] = [].slice.call(
      detailElem.querySelectorAll(
        "app-section-heading, app-subsection-heading, app-subsubsection-heading"
      )
    );
    let sectionIndex = -1;
    let subsectionIndex = -1;
    sectionNodes.forEach((value) => {
      const section = {
        id: value.id,
        title: value.getAttribute("title")!,
        collapsed: false,
        subsections: [],
      };
      switch (value.tagName) {
        case "APP-SECTION-HEADING":
          this.sections.push(section);
          sectionIndex++;
          subsectionIndex = -1;
          break;
        case "APP-SUBSECTION-HEADING":
          this.sections[sectionIndex].subsections.push(section);
          subsectionIndex++;
          break;
        case "APP-SUBSUBSECTION-HEADING":
          this.sections[sectionIndex].subsections[
            subsectionIndex
          ].subsections.push(section);
          break;
      }
    });
  }
}
