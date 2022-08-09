import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-introduce',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss'],
})
export class IntroduceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
