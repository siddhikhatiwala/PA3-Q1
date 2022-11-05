import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css']
})
export class D3Component implements OnInit {
  arr=["Winter","Summer","Spring","Monsoon","Autumn"];
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

}
