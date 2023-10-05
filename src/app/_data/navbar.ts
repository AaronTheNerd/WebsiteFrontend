import { INavbarItem } from "../interfaces/navbar";

export const NAV_ITEMS: INavbarItem[] = [
  {
    id: "home",
    label: "Home",
    icon: "home_outline",
    path: "/home",
  },
  {
    id: "about",
    label: "About Me",
    icon: "person_outline",
    path: "/about",
  },
  {
    id: "projects",
    label: "Projects",
    icon: "code",
    path: "/projects",
  },
  {
    id: "work",
    label: "Work",
    icon: "work_outline",
    path: "/work",
  },
  {
    id: "bug",
    label: "Report a Bug",
    icon: "bug_report",
    path: "/bug",
  },
  {
    id: "contact",
    label: "Have a Question?",
    icon: "email",
    path: "/contact",
  },
];
