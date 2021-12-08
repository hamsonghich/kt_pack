import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDataJsonComponent } from './test-data-json.component';

describe('TestDataJsonComponent', () => {
  let component: TestDataJsonComponent;
  let fixture: ComponentFixture<TestDataJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDataJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDataJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
