import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoroselComponent } from './corosel.component';

describe('CoroselComponent', () => {
  let component: CoroselComponent;
  let fixture: ComponentFixture<CoroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CoroselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
