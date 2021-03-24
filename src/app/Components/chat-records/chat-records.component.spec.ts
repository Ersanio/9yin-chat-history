import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRecordsComponent } from './chat-records.component';

describe('ChatRecordsComponent', () => {
  let component: ChatRecordsComponent;
  let fixture: ComponentFixture<ChatRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
