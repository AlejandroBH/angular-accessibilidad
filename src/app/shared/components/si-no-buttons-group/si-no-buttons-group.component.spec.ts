import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiNoButtonsGroupComponent } from './si-no-buttons-group.component';

describe('SiNoButtonsGroupComponent', () => {
  let component: SiNoButtonsGroupComponent;
  let fixture: ComponentFixture<SiNoButtonsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiNoButtonsGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiNoButtonsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
