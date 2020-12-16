import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ch2Page } from './ch2.page';

describe('Ch2Page', () => {
  let component: Ch2Page;
  let fixture: ComponentFixture<Ch2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ch2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ch2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
