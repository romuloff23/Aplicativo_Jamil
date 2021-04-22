import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { McPage } from './mc.page';

describe('McPage', () => {
  let component: McPage;
  let fixture: ComponentFixture<McPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(McPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
