import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-d2',
  templateUrl: './d2.component.html',
  styleUrls: ['./d2.component.css']
})
export class D2Component implements OnInit {
  arr=["Hello!","This is Siddhi Khatiwala","Semester: 7", "Roll no.:7"];
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

}
