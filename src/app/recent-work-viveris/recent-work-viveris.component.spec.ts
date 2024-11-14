import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentWorkViverisComponent } from './recent-work-viveris.component';

describe('RecentWorkViverisComponent', () => {
  let component: RecentWorkViverisComponent;
  let fixture: ComponentFixture<RecentWorkViverisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentWorkViverisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentWorkViverisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
