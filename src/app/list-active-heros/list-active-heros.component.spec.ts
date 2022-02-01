import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActiveHerosComponent } from './list-active-heros.component';

describe('ListActiveHerosComponent', () => {
  let component: ListActiveHerosComponent;
  let fixture: ComponentFixture<ListActiveHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActiveHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActiveHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
