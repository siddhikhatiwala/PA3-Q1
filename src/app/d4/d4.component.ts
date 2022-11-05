import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-d4',
  templateUrl: './d4.component.html',
  styleUrls: ['./d4.component.css']
})
export class D4Component implements OnInit {
  selectModel: any;
  arr=["Textbox", "Textarea"];
  s: any;
  onchange(){
    if(this.selectModel=="Textbox"){
      this.s = 1;
    }
    else{
      this.s = 2;
    }
  }
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

}
