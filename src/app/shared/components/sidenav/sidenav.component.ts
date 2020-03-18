import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'المرضى',
          icon: 'fas fa-users',
          items: [
              {label: 'كل المرضى', icon: 'fas fa-users'},
              {label: 'إضافة مريض', icon: 'fas fa-user-plus'},

          ]
      }
  ];
  }

}
