import { Component, OnInit } from '@angular/core';
import { CommonapiService } from '../services/commonapiservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search = "";

  constructor(private commonapi: CommonapiService) { }

  ngOnInit(): void {
    this.search = "";
    this.searchClick();
  }

  onChanges(val) {
    this.search = val.target.value;
  }

  searchClick() {

    this.commonapi.searchFunctionality(this.search ? this.search : 'a').subscribe((data: any) => {
      this.passMsg(data);
    })
  }
  passMsg(data) {
    this.commonapi.passMessage(data);
  }
}
