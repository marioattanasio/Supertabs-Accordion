import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonnaPage } from './donna.page';

describe('DonnaPage', () => {
  let component: DonnaPage;
  let fixture: ComponentFixture<DonnaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonnaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
