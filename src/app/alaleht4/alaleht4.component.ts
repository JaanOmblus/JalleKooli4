import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'alaleht4',
  templateUrl: './alaleht4.component.html',
  styleUrls: ['./alaleht4.component.scss']
})
export class Alaleht4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onloadServer(){
  	this.router.navigate(['/alaleht2']);
  }

}