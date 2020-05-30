import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubsidiaryComponent } from './add-subsidiary.component';

describe('AddSubsidiaryComponent', () => {
  let component: AddSubsidiaryComponent;
  let fixture: ComponentFixture<AddSubsidiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubsidiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubsidiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
