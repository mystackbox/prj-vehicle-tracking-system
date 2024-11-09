import { TestBed } from '@angular/core/testing';

import { ContentListService } from './content-list.service';

describe('OurServicesContentService', () => {
  let service: ContentListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
