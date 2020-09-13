import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoElementComponent } from './repo-element.component';

describe('RepoElementComponent', () => {
  let component: RepoElementComponent;
  let fixture: ComponentFixture<RepoElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
