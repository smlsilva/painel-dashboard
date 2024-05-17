import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponentQualidade } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponentQualidade;
  let fixture: ComponentFixture<NavbarComponentQualidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponentQualidade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponentQualidade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
