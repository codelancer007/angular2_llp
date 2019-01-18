import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
  providers:[DataService]
})
export class UsersComponent implements OnInit {
  search: string = "";
  constructor(private ref?: ChangeDetectorRef, private router?: Router, private _data?: DataService) { }
  users: any = [];
  musers: any = [];
  ngOnInit() {
    this._data.getData('users').subscribe(data=>{
      this.users = data;
      this.musers = data;
      this.ref.markForCheck();
    })
  }
  shortlisted: any = [];

  selected(id) {
    let index = this.users.findIndex(item => item.id == id);
    if (index > -1) {
      this.shortlisted.push(this.users[index]);
      this.users.splice(index, 1);
    }
  }
  remove(id) {
    let index = this.shortlisted.findIndex(item => item.id == id);
    if (index > -1) {
      this.users.push(this.shortlisted[index]);
      this.shortlisted.splice(index, 1);
    }
  }
  filter(searchVal) {
    console.log(searchVal);
    let arr = this.musers;
    if (searchVal.length || 1) {
      let results = [];
      for (let i = 0; i < arr.length; i++) {
        let matches = false;
        for (let formDataVal in arr[i]) {
          if (typeof arr[i][formDataVal] === 'string' && arr[i][formDataVal].toLowerCase().search(searchVal.toLowerCase())== 0) {
            matches = true;
            break;
          }
        }
        if (matches) {
          results.push(arr[i]);
        }
      }
      this.users = results;
    } else {
      this.users = arr;
    }
    this.ref.markForCheck();
  }
  switchRoute(id) {
    this.router.navigate(['user-info/' + id]);
  }
  removeUser(id){
    this.search = "";
    let index = this.users.findIndex(item => item.id == id);
    if (index > -1) {
      this.users.splice(index, 1);
      this.musers.splice(index, 1);
      this.users = this.musers;
    }
    this.ref.markForCheck();
  }
}
