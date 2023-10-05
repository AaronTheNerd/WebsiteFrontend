import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FigureWrapperComponent } from "./figure-wrapper.component";

describe("FigureWrapperComponent", () => {
  let component: FigureWrapperComponent;
  let fixture: ComponentFixture<FigureWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FigureWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FigureWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
