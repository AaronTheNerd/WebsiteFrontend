import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SubsubsectionHeadingComponent } from "./subsubsection-heading.component";

describe("SubsubsectionHeadingComponent", () => {
  let component: SubsubsectionHeadingComponent;
  let fixture: ComponentFixture<SubsubsectionHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubsubsectionHeadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubsubsectionHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
