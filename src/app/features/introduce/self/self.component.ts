import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-self',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.scss']
})
export class SelfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
