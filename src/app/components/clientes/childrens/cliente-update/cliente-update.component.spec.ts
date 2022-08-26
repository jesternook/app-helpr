import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteUpdateComponent } from './cliente-update.component';

describe('ClienteCreateComponent', () => {
  let component: ClienteUpdateComponent;
  let fixture: ComponentFixture<ClienteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
