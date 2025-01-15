import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllasComponent } from './ellas.component';

describe('EllasComponent', () => {
  let component: EllasComponent;
  let fixture: ComponentFixture<EllasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EllasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EllasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
