import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMethodPageComponent } from './second-method-page.component';

describe('SecondMethodPageComponent', () => {
  let component: SecondMethodPageComponent;
  let fixture: ComponentFixture<SecondMethodPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondMethodPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondMethodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
