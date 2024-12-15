import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProdComponent } from './detail-prod.component';

describe('DetailProdComponent', () => {
  let component: DetailProdComponent;
  let fixture: ComponentFixture<DetailProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailProdComponent]
    });
    fixture = TestBed.createComponent(DetailProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
