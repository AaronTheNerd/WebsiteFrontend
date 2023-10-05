import { TestBed } from "@angular/core/testing";

import { FilterSortService } from "./filter.service";

describe("FilterService", () => {
  let service: FilterSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterSortService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
