import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoPaginationComponent } from './repo-pagination.component';

describe('RepoPaginationComponent', () => {
  let component: RepoPaginationComponent;
  let fixture: ComponentFixture<RepoPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
