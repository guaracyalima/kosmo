import { Component, OnInit } from '@angular/core';

declare let plyr: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    plyr.setup();
  }
}
