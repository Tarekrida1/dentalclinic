import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/shared/services/sidenav/sidenav.service';

@Component({
  selector: 'app-table-layouts',
  templateUrl: './table-layouts.component.html',
  styleUrls: ['./table-layouts.component.scss']
})
export class TableLayoutsComponent implements OnInit {
  public _opened: boolean = true;
  public _dock: boolean = true;

/**
 *
 <ng-sidebar-container style="height: 100vh;">

	<!-- A sidebar -->
	<ng-sidebar [(opened)]="_opened" position="right">
		<ul>
			<li>Menu Item</li>
			<li>Menu Item</li>
			<li>Menu Item</li>
		</ul>
	</ng-sidebar>

	<!-- Page content -->
	<div ng-sidebar-content>
		<button (click)="_toggleSidebar()">Toggle sidebar</button>

		<p>
			Start editing to see some magic happen :)
    </p>
<router-outlet></router-outlet>

	</div>

</ng-sidebar-container>
 */
  constructor( private sidenavSer: SidenavService) { }

  ngOnInit() {
    this.sidenavSer._toggleClick.subscribe(e => {
      this._dock = e
    })
  }
  private _toggleSidebar() {
    // this._opened = !this._opened;
    this._dock = !this._dock;

  }
  public _toggleDock(): void {
    this._dock = !this._dock;
  }
  public _toggleDockOnHover(): void {
    if (this._dock = false) {
      this._dock = !this._dock;

    }
  }

}
