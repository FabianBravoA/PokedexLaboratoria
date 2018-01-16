import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMasterFormComponent } from './pokemon-master-form.component';

describe('PokemonMasterFormComponent', () => {
  let component: PokemonMasterFormComponent;
  let fixture: ComponentFixture<PokemonMasterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonMasterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
