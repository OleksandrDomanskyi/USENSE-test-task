import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdMethodPageComponent } from './third-method-page.component';

describe('ThirdMethodPageComponent', () => {
  let component: ThirdMethodPageComponent;
  let fixture: ComponentFixture<ThirdMethodPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdMethodPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdMethodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
