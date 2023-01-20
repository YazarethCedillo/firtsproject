import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image: string="https://purepng.com/public/uploads/medium/canada-d4m.png";
  constructor () { }

  ngOnInit(): void {
  }

}
