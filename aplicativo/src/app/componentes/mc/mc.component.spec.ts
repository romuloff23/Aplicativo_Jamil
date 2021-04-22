import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { McComponent } from './mc.component';

describe('McComponent', () => {
  let component: McComponent;
  let fixture: ComponentFixture<McComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(McComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
