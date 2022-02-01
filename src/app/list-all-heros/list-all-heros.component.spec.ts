import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllHerosComponent } from './list-all-heros.component';

describe('ListAllHerosComponent', () => {
  let component: ListAllHerosComponent;
  let fixture: ComponentFixture<ListAllHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
