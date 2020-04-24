import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { SidenavService } from '../../services/sidenav/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
dock;
isNavbarCollapsed = false;
  constructor(private modalService: NgbModal, private sidenavSer: SidenavService) { }
  ngOnInit() {
    this.sidenavSer._toggleClick.subscribe(e => {
      this.dock = e
    })
  }
  openSm(content) {
    this.modalService.open(content, { size: 'md' });

  }


  toggleSideNav() {
this.sidenavSer.toggleClickFun(this.dock);
console.log(this.dock)
  }
}
