import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SubsectionHeadingComponent } from "./subsection-heading.component";

describe("SubsectionHeadingComponent", () => {
  let component: SubsectionHeadingComponent;
  let fixture: ComponentFixture<SubsectionHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubsectionHeadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubsectionHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
