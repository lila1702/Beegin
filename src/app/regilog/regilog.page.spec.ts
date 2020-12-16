import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegilogPage } from './regilog.page';

describe('RegilogPage', () => {
  let component: RegilogPage;
  let fixture: ComponentFixture<RegilogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegilogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegilogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
