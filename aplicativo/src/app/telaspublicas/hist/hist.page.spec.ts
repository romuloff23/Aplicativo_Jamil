import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistPage } from './hist.page';

describe('HistPage', () => {
  let component: HistPage;
  let fixture: ComponentFixture<HistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
