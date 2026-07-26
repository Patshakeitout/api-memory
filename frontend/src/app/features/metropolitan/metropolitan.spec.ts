import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metropolitan } from './metropolitan';

describe('Metropolitan', () => {
  let component: Metropolitan;
  let fixture: ComponentFixture<Metropolitan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Metropolitan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Metropolitan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
