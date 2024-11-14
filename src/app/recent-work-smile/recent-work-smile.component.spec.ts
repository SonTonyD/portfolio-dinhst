import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentWorkSmileComponent } from './recent-work-smile.component';

describe('RecentWorkSmileComponent', () => {
  let component: RecentWorkSmileComponent;
  let fixture: ComponentFixture<RecentWorkSmileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentWorkSmileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentWorkSmileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
