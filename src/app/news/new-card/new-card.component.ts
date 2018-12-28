import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {

  @Input() public new: Object;

  constructor() { }

  ngOnInit() {
  }

}
