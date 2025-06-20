import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCategoryComponent } from './inventory-category.component';

describe('InventoryCategoryComponent', () => {
  let component: InventoryCategoryComponent;
  let fixture: ComponentFixture<InventoryCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
