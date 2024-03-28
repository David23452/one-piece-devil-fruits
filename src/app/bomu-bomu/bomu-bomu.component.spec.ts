import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomuBomuComponent } from './bomu-bomu.component';

describe('BomuBomuComponent', () => {
  let component: BomuBomuComponent;
  let fixture: ComponentFixture<BomuBomuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BomuBomuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BomuBomuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
