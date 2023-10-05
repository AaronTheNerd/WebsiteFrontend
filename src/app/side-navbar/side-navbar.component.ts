import { Component } from "@angular/core";
import {
  Router,
  NavigationStart,
  Event as NavigationEvent,
} from "@angular/router";
import { NAV_ITEMS } from "../_data/navbar";
import { INavbarItem } from "../interfaces/navbar";
import { Observable, switchMap, of, filter } from "rxjs";

@Component({
  selector: "app-side-navbar",
  templateUrl: "./side-navbar.component.html",
  styleUrls: ["./side-navbar.component.scss"],
})
export class SideNavbarComponent {
  routes: INavbarItem[] = NAV_ITEMS;
  isNotDetailURL$: Observable<boolean>;

  constructor(private router: Router) {
    this.isNotDetailURL$ = this.router.events.pipe(
      filter((event: NavigationEvent) => {
        return event instanceof NavigationStart;
      }),
      switchMap((event: NavigationEvent) => {
        if (event instanceof NavigationStart) {
          return of(!this.isProjectDetailURL(event.url));
        }
        return of(true);
      })
    );
  }

  isProjectDetailURL(url: string): boolean {
    return url.match(/.*\/projects\/\d+$/) !== null;
  }
}
