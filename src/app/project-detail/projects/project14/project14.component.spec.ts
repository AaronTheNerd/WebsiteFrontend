import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Project14Component } from "./project14.component";

describe("Project14Component", () => {
  let component: Project14Component;
  let fixture: ComponentFixture<Project14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Project14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Project14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
