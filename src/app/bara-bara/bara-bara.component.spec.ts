import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaraBaraComponent } from './bara-bara.component';

describe('BaraBaraComponent', () => {
  let component: BaraBaraComponent;
  let fixture: ComponentFixture<BaraBaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaraBaraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaraBaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
