import { TestBed } from '@angular/core/testing';

import { TaskCoreService } from './task-service.service';

describe('TaskCoreService', () => {
  let service: TaskCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
