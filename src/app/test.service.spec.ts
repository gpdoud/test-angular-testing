import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('about should be "about"', () => {
    expect(service.about).toBe("about");
  });

  it('test() should be "test"', () => {
    expect(service.test()).toBe("test");
  });

  it('testAsync() should be "test"', () => {
    service.testAsync().subscribe(res => {
      expect(res).toBe("test");
    });
  });

  it('testChildAsync() should return "aboutChild"', () => {
    service.testChildAsync().subscribe(
      res => { expect(res).toBe("aboutChild"); }
    );
  })
});
