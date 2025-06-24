import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPostagemComponent } from './crud-postagem.component';

describe('CrudPostagemComponent', () => {
  let component: CrudPostagemComponent;
  let fixture: ComponentFixture<CrudPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudPostagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
