import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoroGoroComponent } from './goro-goro.component';

describe('GoroGoroComponent', () => {
  let component: GoroGoroComponent;
  let fixture: ComponentFixture<GoroGoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoroGoroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoroGoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
