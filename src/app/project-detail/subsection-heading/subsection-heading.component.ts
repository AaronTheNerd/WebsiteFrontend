import { Component, Input } from "@angular/core";

@Component({
  selector: "app-subsection-heading",
  templateUrl: "./subsection-heading.component.html",
  styleUrls: ["./subsection-heading.component.scss"],
})
export class SubsectionHeadingComponent {
  @Input() title = "";
}
