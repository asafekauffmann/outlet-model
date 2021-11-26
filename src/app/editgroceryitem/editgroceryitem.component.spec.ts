import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditgroceryitemComponent } from './editgroceryitem.component';

describe('EditgroceryitemComponent', () => {
  let component: EditgroceryitemComponent;
  let fixture: ComponentFixture<EditgroceryitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditgroceryitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditgroceryitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
