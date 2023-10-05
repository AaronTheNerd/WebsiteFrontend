import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from "@angular/animations";

const slideDown = [
  style({ position: "relative" }),
  query(":enter, :leave", [
    style({
      position: "absolute",
      left: "4.5rem",
      width: "calc(100% - 4.5rem)",
    }),
  ]),
  query(":enter", [style({ top: "100vh", opacity: 0 })]),
  query(":leave", [style({ top: "0vh" })]),
  group([
    query(":leave", [
      animate("300ms ease-out", style({ top: "-100vh", opacity: 0 })),
    ]),
    query(":enter", [
      animate("300ms ease-out", style({ top: "0vh", opacity: 1 })),
    ]),
  ]),
];

const slideUp = [
  style({ position: "relative" }),
  query(":enter, :leave", [
    style({
      position: "absolute",
      left: "4.5rem",
      width: "calc(100% - 4.5rem)",
    }),
  ]),
  query(":enter", [style({ top: "-100vh", opacity: 0 })]),
  query(":leave", [style({ top: "0vh" })]),
  group([
    query(":leave", [
      animate("300ms ease-out", style({ top: "100vh", opacity: 0 })),
    ]),
    query(":enter", [
      animate("300ms ease-out", style({ top: "0vh", opacity: 1 })),
    ]),
  ]),
];

const slideRight = [
  style({ position: "relative" }),
  query(":enter, :leave", [
    style({
      position: "absolute",
      top: 0,
      width: "calc(100% - 4.5rem)",
    }),
  ]),
  query(":enter", [style({ left: "100vw" })]),
  query(":leave", [style({ left: "4.5rem" })]),
  group([
    query(":leave", [animate("300ms ease-out", style({ left: "-100vw" }))]),
    query(":enter", [animate("300ms ease-out", style({ left: "4.5rem" }))]),
  ]),
];

const slideLeft = [
  style({ position: "relative" }),
  query(":enter, :leave", [
    style({
      position: "absolute",
      top: 0,
      width: "calc(100% - 4.5rem)",
    }),
  ]),
  query(":enter", [style({ left: "-100vw" })]),
  query(":leave", [style({ left: "4.5rem" })]),
  group([
    query(":leave", [animate("300ms ease-out", style({ left: "100vw" }))]),
    query(":enter", [animate("300ms ease-out", style({ left: "4.5rem" }))]),
  ]),
];

export const routeAnimations = trigger("routeAnimations", [
  transition("list => project", slideRight),
  transition("project => list", slideLeft),
  transition("home => *", slideDown),
  transition("about => home", slideUp),
  transition("about => *", slideDown),
  transition("list => home", slideUp),
  transition("list => about", slideUp),
  transition("list => *", slideDown),
  transition("work => bug", slideDown),
  transition("work => contact", slideDown),
  transition("work => *", slideUp),
  transition("bug => contact", slideDown),
  transition("bug => *", slideUp),
  transition("contact => *", slideUp),
  transition("* <=> *", slideUp),
]);
