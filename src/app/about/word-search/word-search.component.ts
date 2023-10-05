import { Component, OnInit } from "@angular/core";

interface IPosition {
  x: number;
  y: number;
}

interface IAnswer {
  answer: string;
  found: boolean;
  egg?: boolean;
  start: IPosition;
  end: IPosition;
}

@Component({
  selector: "app-word-search",
  templateUrl: "./word-search.component.html",
  styleUrls: ["./word-search.component.scss"],
})
export class WordSearchComponent implements OnInit {
  puzzle: string[][] = [
    [
      "B",
      "M",
      "O",
      "T",
      "I",
      "V",
      "A",
      "T",
      "E",
      "D",
      "F",
      "U",
      "N",
      "N",
      "Y",
      "N",
    ],
    [
      "E",
      "R",
      "P",
      "R",
      "O",
      "D",
      "U",
      "C",
      "T",
      "I",
      "V",
      "E",
      "G",
      "D",
      "L",
      "E",
    ],
    [
      "S",
      "O",
      "R",
      "G",
      "A",
      "N",
      "I",
      "Z",
      "E",
      "D",
      "L",
      "N",
      "E",
      "O",
      "D",
      "R",
    ],
    [
      "T",
      "P",
      "E",
      "D",
      "A",
      "N",
      "T",
      "I",
      "C",
      "I",
      "O",
      "T",
      "O",
      "O",
      "A",
      "D",
    ],
    [
      "C",
      "R",
      "E",
      "A",
      "T",
      "I",
      "V",
      "E",
      "T",
      "R",
      "N",
      "C",
      "R",
      "P",
      "T",
      "E",
    ],
    [
      "A",
      "C",
      "D",
      "E",
      "D",
      "I",
      "C",
      "A",
      "T",
      "E",
      "D",
      "P",
      "E",
      "E",
      "A",
      "T",
    ],
    [
      "N",
      "P",
      "R",
      "O",
      "F",
      "E",
      "S",
      "S",
      "I",
      "O",
      "N",
      "A",
      "L",
      "N",
      "D",
      "E",
    ],
    [
      "D",
      "G",
      "A",
      "M",
      "E",
      "R",
      "A",
      "R",
      "I",
      "Z",
      "Q",
      "T",
      "I",
      "M",
      "R",
      "R",
    ],
    [
      "I",
      "H",
      "S",
      "O",
      "E",
      "H",
      "O",
      "N",
      "E",
      "S",
      "T",
      "I",
      "A",
      "I",
      "I",
      "M",
    ],
    [
      "D",
      "I",
      "M",
      "V",
      "F",
      "L",
      "E",
      "X",
      "I",
      "B",
      "L",
      "E",
      "B",
      "N",
      "V",
      "I",
    ],
    [
      "A",
      "R",
      "A",
      "D",
      "I",
      "L",
      "I",
      "G",
      "E",
      "N",
      "T",
      "N",
      "L",
      "D",
      "E",
      "N",
    ],
    [
      "T",
      "E",
      "R",
      "A",
      "S",
      "I",
      "N",
      "C",
      "E",
      "R",
      "E",
      "T",
      "E",
      "E",
      "N",
      "E",
    ],
    [
      "E",
      "M",
      "T",
      "I",
      "N",
      "N",
      "O",
      "V",
      "A",
      "T",
      "I",
      "V",
      "E",
      "D",
      "T",
      "D",
    ],
    [
      "X",
      "E",
      "N",
      "R",
      "E",
      "S",
      "O",
      "U",
      "R",
      "C",
      "E",
      "F",
      "U",
      "L",
      "A",
      "Z",
    ],
    [
      "D",
      "X",
      "T",
      "H",
      "O",
      "U",
      "G",
      "H",
      "T",
      "F",
      "U",
      "L",
      "B",
      "A",
      "L",
      "D",
    ],
    [
      "A",
      "C",
      "C",
      "O",
      "U",
      "N",
      "T",
      "A",
      "B",
      "L",
      "E",
      "C",
      "H",
      "I",
      "L",
      "L",
    ],
  ];

  answers: IAnswer[] = [
    {
      answer: "DETAILORIENTED",
      found: false,
      start: {
        x: 0,
        y: 14,
      },
      end: {
        x: 13,
        y: 1,
      },
    },
    {
      answer: "PROFESSIONAL",
      found: false,
      start: {
        x: 1,
        y: 6,
      },
      end: {
        x: 12,
        y: 6,
      },
    },
    {
      answer: "RESOURCEFUL",
      found: false,
      start: {
        x: 3,
        y: 13,
      },
      end: {
        x: 13,
        y: 13,
      },
    },
    {
      answer: "ACCOUNTABLE",
      found: false,
      start: {
        x: 0,
        y: 15,
      },
      end: {
        x: 10,
        y: 15,
      },
    },
    {
      answer: "THOUGHTFUL",
      found: false,
      start: {
        x: 2,
        y: 14,
      },
      end: {
        x: 11,
        y: 14,
      },
    },
    {
      answer: "DATADRIVEN",
      found: false,
      start: {
        x: 14,
        y: 2,
      },
      end: {
        x: 14,
        y: 11,
      },
    },
    {
      answer: "PRODUCTIVE",
      found: false,
      start: {
        x: 2,
        y: 1,
      },
      end: {
        x: 11,
        y: 1,
      },
    },
    {
      answer: "DETERMINED",
      found: false,
      start: {
        x: 15,
        y: 3,
      },
      end: {
        x: 15,
        y: 12,
      },
    },
    {
      answer: "OPENMINDED",
      found: false,
      start: {
        x: 13,
        y: 3,
      },
      end: {
        x: 13,
        y: 12,
      },
    },
    {
      answer: "INNOVATIVE",
      found: false,
      start: {
        x: 3,
        y: 12,
      },
      end: {
        x: 12,
        y: 12,
      },
    },
    {
      answer: "MOTIVATED",
      found: false,
      start: {
        x: 1,
        y: 0,
      },
      end: {
        x: 9,
        y: 0,
      },
    },
    {
      answer: "VERSATILE",
      found: false,
      start: {
        x: 3,
        y: 9,
      },
      end: {
        x: 11,
        y: 1,
      },
    },
    {
      answer: "ORGANIZED",
      found: false,
      start: {
        x: 1,
        y: 2,
      },
      end: {
        x: 9,
        y: 2,
      },
    },
    {
      answer: "DEDICATED",
      found: false,
      start: {
        x: 2,
        y: 5,
      },
      end: {
        x: 10,
        y: 5,
      },
    },
    {
      answer: "RELIABLE",
      found: false,
      start: {
        x: 12,
        y: 4,
      },
      end: {
        x: 12,
        y: 11,
      },
    },
    {
      answer: "CREATIVE",
      found: false,
      start: {
        x: 0,
        y: 4,
      },
      end: {
        x: 7,
        y: 4,
      },
    },
    {
      answer: "FLEXIBLE",
      found: false,
      start: {
        x: 4,
        y: 9,
      },
      end: {
        x: 11,
        y: 9,
      },
    },
    {
      answer: "DILIGENT",
      found: false,
      start: {
        x: 3,
        y: 10,
      },
      end: {
        x: 10,
        y: 10,
      },
    },
    {
      answer: "PEDANTIC",
      found: false,
      start: {
        x: 1,
        y: 3,
      },
      end: {
        x: 8,
        y: 3,
      },
    },
    {
      answer: "SINCERE",
      found: false,
      start: {
        x: 4,
        y: 11,
      },
      end: {
        x: 10,
        y: 11,
      },
    },
    {
      answer: "PATIENT",
      found: false,
      start: {
        x: 11,
        y: 5,
      },
      end: {
        x: 11,
        y: 11,
      },
    },
    {
      answer: "HONEST",
      found: false,
      start: {
        x: 5,
        y: 8,
      },
      end: {
        x: 10,
        y: 8,
      },
    },
    {
      answer: "BESTCANDIDATE",
      found: false,
      egg: true,
      start: {
        x: 0,
        y: 0,
      },
      end: {
        x: 0,
        y: 12,
      },
    },
    {
      answer: "STRONG",
      found: false,
      egg: true,
      start: {
        x: 7,
        y: 6,
      },
      end: {
        x: 12,
        y: 1,
      },
    },
    {
      answer: "HIREME",
      found: false,
      egg: true,
      start: {
        x: 1,
        y: 8,
      },
      end: {
        x: 1,
        y: 13,
      },
    },
    {
      answer: "FUNNY",
      found: false,
      egg: true,
      start: {
        x: 10,
        y: 0,
      },
      end: {
        x: 14,
        y: 0,
      },
    },
    {
      answer: "GAMER",
      found: false,
      egg: true,
      start: {
        x: 1,
        y: 7,
      },
      end: {
        x: 5,
        y: 7,
      },
    },
    {
      answer: "SMART",
      found: false,
      egg: true,
      start: {
        x: 2,
        y: 8,
      },
      end: {
        x: 2,
        y: 12,
      },
    },
    {
      answer: "CHILL",
      found: false,
      egg: true,
      start: {
        x: 11,
        y: 15,
      },
      end: {
        x: 15,
        y: 15,
      },
    },
    {
      answer: "NICE",
      found: false,
      egg: true,
      start: {
        x: 5,
        y: 3,
      },
      end: {
        x: 8,
        y: 0,
      },
    },
    {
      answer: "NERD",
      found: false,
      egg: true,
      start: {
        x: 15,
        y: 0,
      },
      end: {
        x: 15,
        y: 3,
      },
    },
    {
      answer: "COOL",
      found: false,
      egg: true,
      start: {
        x: 11,
        y: 4,
      },
      end: {
        x: 14,
        y: 1,
      },
    },
    {
      answer: "TALL",
      found: false,
      egg: true,
      start: {
        x: 14,
        y: 12,
      },
      end: {
        x: 14,
        y: 15,
      },
    },
    {
      answer: "BALD",
      found: false,
      egg: true,
      start: {
        x: 12,
        y: 14,
      },
      end: {
        x: 15,
        y: 14,
      },
    },
  ];

  start: IPosition = {
    x: 0,
    y: 0,
  };

  end: IPosition = {
    x: 0,
    y: 0,
  };

  lineHeight = 32;
  highlightHeight = 15;
  dragging = false;

  ngOnInit() {
    console.log("Easter Egg Words:");
    this.answers.forEach((ans) => {
      if (ans.egg) console.log(ans.answer);
    });
  }

  getOffset(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
      width: rect.width || el.offsetWidth,
      height: rect.height || el.offsetHeight,
    };
  }

  getStyle(el: HTMLElement) {
    const offset = this.getOffset(el);
    return {
      left: offset.left + "px",
      top: offset.top + "px",
      width: offset.width + "px",
      height: offset.height + "px",
    };
  }

  getEl(pos: IPosition): HTMLElement | null {
    return document.getElementById("char-" + pos.x + "-" + pos.y);
  }

  showLine() {
    if (
      document.getElementById("current-highlight")?.classList.contains("d-none")
    ) {
      document.getElementById("current-highlight")?.classList.remove("d-none");
    }
  }

  hideLine() {
    document.getElementById("current-highlight")?.classList.add("d-none");
  }

  drawLine(start: IPosition, end: IPosition): any {
    const spanStart = this.getEl(start);
    const spanEnd = this.getEl(end);

    if (spanStart === null || spanEnd === null) return;

    const offset1 = this.getOffset(spanStart);
    const offset2 = this.getOffset(spanEnd);

    let x1 = offset1.left;
    let y1 = offset1.top;

    let x2 = offset2.left;
    let y2 = offset2.top;

    if (x1 === x2) {
      x1 += offset1.width / 2;
      x2 += offset2.width / 2;
    } else {
      x1 += offset1.width * (x1 < x2 ? 0.25 : 0.75);
      x2 += offset2.width * (x1 < x2 ? 0.75 : 0.25);
    }
    if (y1 === y2) {
      y1 += offset1.height / 2;
      y2 += offset2.height / 2;
    } else {
      y1 += offset1.height * (y1 < y2 ? 0.25 : 0.75);
      y2 += offset2.height * (y1 < y2 ? 0.75 : 0.25);
    }

    const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

    const cx = (x1 + x2) / 2 - length / 2;
    const cy = (y1 + y2) / 2 - this.highlightHeight / 2;

    const angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);

    return {
      padding: "0px",
      margin: "0px",
      height: this.highlightHeight + "px",
      "line-height": "1px",
      position: "absolute",
      left: cx + "px",
      top: cy + "px",
      width: length + "px",
      "-moz-transform": "rotate(" + angle + "deg)",
      "-webkit-transform": "rotate(" + angle + "deg)",
      "-o-transform": "rotate(" + angle + "deg)",
      "-ms-transform": "rotate(" + angle + "deg)",
      transform: "rotate(" + angle + "deg)",
    };
  }

  checkEqual(a: IPosition, b: IPosition): boolean {
    return a.x == b.x && a.y == b.y;
  }

  checkSelection(start: IPosition, end: IPosition): IAnswer | undefined {
    for (const answer of this.answers) {
      if (
        !answer.found &&
        ((this.checkEqual(answer.start, start) &&
          this.checkEqual(answer.end, end)) ||
          (this.checkEqual(answer.start, end) &&
            this.checkEqual(answer.end, start)))
      ) {
        answer.found = true;
        return answer;
      }
    }
    return undefined;
  }

  startDrag(x: number, y: number) {
    if (this.dragging) return;
    this.dragging = true;
    this.hideLine();
    this.start = {
      x: x,
      y: y,
    };
  }

  endDrag(x: number, y: number) {
    this.dragging = false;
    this.end = {
      x: x,
      y: y,
    };
    const answer = this.checkSelection(this.start, this.end);
    if (answer === undefined) {
      this.hideLine();
      return;
    }
    this.hideLine();
  }

  enterDrag(x: number, y: number) {
    if (!this.dragging) return;
    this.end = {
      x: x,
      y: y,
    };
    this.showLine();
  }

  displayBank(): IAnswer[] {
    return this.answers
      .filter(function (answer) {
        return answer.egg != true;
      })
      .sort(function (answer1, answer2): number {
        if (answer1.found) return 1;
        if (answer2.found) return -1;
        return 0;
      });
  }
}
