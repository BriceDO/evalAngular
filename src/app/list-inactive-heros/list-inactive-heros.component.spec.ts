import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInactiveHerosComponent } from './list-inactive-heros.component';

describe('ListInactiveHerosComponent', () => {
  let component: ListInactiveHerosComponent;
  let fixture: ComponentFixture<ListInactiveHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInactiveHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInactiveHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
