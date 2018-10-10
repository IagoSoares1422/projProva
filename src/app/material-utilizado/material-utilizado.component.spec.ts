import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUtilizadoComponent } from './material-utilizado.component';

describe('MaterialUtilizadoComponent', () => {
  let component: MaterialUtilizadoComponent;
  let fixture: ComponentFixture<MaterialUtilizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialUtilizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialUtilizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
