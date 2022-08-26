import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoUpdateComponent } from './tecnico-update.component';

describe('TecnicoCreateComponent', () => {
  let component: TecnicoUpdateComponent;
  let fixture: ComponentFixture<TecnicoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicoUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnicoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
