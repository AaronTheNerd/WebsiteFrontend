import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appProjectDetail]",
})
export class ProjectDetailDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
