import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuraGuraComponent } from './gura-gura.component';

describe('GuraGuraComponent', () => {
  let component: GuraGuraComponent;
  let fixture: ComponentFixture<GuraGuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuraGuraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuraGuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
