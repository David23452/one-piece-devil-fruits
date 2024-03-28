import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeraMeraComponent } from './mera-mera.component';

describe('MeraMeraComponent', () => {
  let component: MeraMeraComponent;
  let fixture: ComponentFixture<MeraMeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeraMeraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeraMeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
