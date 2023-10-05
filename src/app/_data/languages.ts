import { TitleCasePipe } from "@angular/common";

export enum Language {
  cpp = "cplusplus",
  c = "c",
  py = "python",
  js = "javascript",
  java = "java",
  matlab = "matlab",
  arduino = "arduino",
  verilog = "verilog",
}

export function display(lang: Language): string {
  let displayLang = "";
  const titleCase = new TitleCasePipe();
  switch (lang) {
    case Language.cpp:
      displayLang = "C++";
      break;
    case Language.js:
      displayLang = "JavaScript";
      break;
    case Language.matlab:
      displayLang = "MATLAB";
      break;
    default:
      displayLang = titleCase.transform(lang);
  }
  return displayLang;
}
