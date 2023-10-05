import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Project18Component } from "./project18.component";

describe("Project18Component", () => {
  let component: Project18Component;
  let fixture: ComponentFixture<Project18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Project18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Project18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
