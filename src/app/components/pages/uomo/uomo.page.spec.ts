import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UomoPage } from './uomo.page';

describe('UomoPage', () => {
  let component: UomoPage;
  let fixture: ComponentFixture<UomoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UomoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UomoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
