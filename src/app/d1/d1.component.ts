import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-d1',
  templateUrl: './d1.component.html',
  styleUrls: ['./d1.component.css']
})
export class D1Component implements OnInit {
  intvar = 7;
  strvar = "Siddhi Khatiwala";
  datevar = Date();
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

}
