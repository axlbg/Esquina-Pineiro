import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextandimgComponent } from './textandimg.component';

describe('TextandimgComponent', () => {
  let component: TextandimgComponent;
  let fixture: ComponentFixture<TextandimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextandimgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextandimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
