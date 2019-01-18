import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less'],
  providers:[DataService]
})
export class UserDetailsComponent implements OnInit {

  constructor(public route?: ActivatedRoute, private ref?: ChangeDetectorRef, private _data?: DataService) { }
  user_id: string = "";
  user_info: any = {
    "id": "",
    "login": "",
    "node_id": "",
    "avatar_url": "",
    "url": "",
    "html_url": "",
    "subscription_url": "",
    "organization_url": "",
    "repos_url": "",
    "site_admin": false,
    "name": "",
    "company": "",
    "blog": "",
    "location": ""
  };
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user_id = params['id'];
      this._data.getData('users/'+ this.user_id).subscribe(data=>{
        this.setValues(data, this.user_info);
        this.ref.markForCheck();
      })
    });
  }
  setValues(data: any, model: any) {

    var keys = Object.keys(model);
    for (var i = 0; i < keys.length; i++) {
      try {
        let tarkey = keys[i];
        model[keys[i]] = data[keys[i]] ? data[keys[i]] : "";
      } catch (e) { }
    }
    this.user_info = model;
    this.ref.markForCheck();
  }
}
