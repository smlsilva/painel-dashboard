import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponentRedeExterna } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponentRedeExterna;
  let fixture: ComponentFixture<NavbarComponentRedeExterna>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponentRedeExterna]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponentRedeExterna);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
