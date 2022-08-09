import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-corosel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './corosel.component.html',
  styleUrls: ['./corosel.component.scss']
})
export class CoroselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
