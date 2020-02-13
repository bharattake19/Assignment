import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsdetailsComponent } from './blogsdetails.component';

describe('BlogsdetailsComponent', () => {
  let component: BlogsdetailsComponent;
  let fixture: ComponentFixture<BlogsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
