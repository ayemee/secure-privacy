import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-switch-button',
  templateUrl: './toggle-switch-button.component.html',
  styleUrls: ['./toggle-switch-button.component.css']
})
export class ToggleSwitchButtonComponent implements OnInit {
  @Input() onToggle: boolean = false;

  @Output() onToggleChange = new EventEmitter<boolean>();

  constructor() { }


  ngOnInit(): void {
  }

  public toggleCheckbox(e:boolean) {
    this.onToggle = e;
    this.onToggleChange.emit(e);
  }

}
