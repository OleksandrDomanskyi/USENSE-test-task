import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelFormComponent } from './ng-model-form.component';

describe('NgModelFormComponent', () => {
  let component: NgModelFormComponent;
  let fixture: ComponentFixture<NgModelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgModelFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
