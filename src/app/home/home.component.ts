import { Component, OnInit } from '@angular/core';
import { CommonapiService } from '../services/commonapiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  storeData: any;

  constructor(private commonapiservice: CommonapiService) { }

  ngOnInit() {
    this.commonapiservice.commonmsg.subscribe((msg: any) => {
      if (msg) {
        this.storeData = msg.data;
      }
    }
    )
    // this.commonapiservice.onLoadFunctionality().subscribe((data: any) => {
    // })
  }





}
