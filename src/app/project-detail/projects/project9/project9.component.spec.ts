import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Project9Component } from "./project9.component";

describe("Project9Component", () => {
  let component: Project9Component;
  let fixture: ComponentFixture<Project9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Project9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Project9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
