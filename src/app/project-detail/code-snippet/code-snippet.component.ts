import { Component, Input } from "@angular/core";
import { HighlightLoader } from "ngx-highlightjs";

const theme = "assets/styles/oneDarkProDarker.css";

@Component({
  selector: "app-code-snippet",
  templateUrl: "./code-snippet.component.html",
  styleUrls: ["./code-snippet.component.scss"],
})
export class CodeSnippetComponent {
  @Input() title = "";
  @Input() content = "";
  @Input() languages: string[] = ["typescript"];
  @Input() lineNumbers = true;

  isCollapsed = true;

  constructor(private hljsLoader: HighlightLoader) {
    this.hljsLoader.setTheme(theme);
  }
}
