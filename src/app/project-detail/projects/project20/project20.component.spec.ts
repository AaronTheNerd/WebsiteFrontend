import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Project20Component } from "./project20.component";

describe("Project20Component", () => {
  let component: Project20Component;
  let fixture: ComponentFixture<Project20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Project20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Project20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
