import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-layouts',
  templateUrl: './table-layouts.component.html',
  styleUrls: ['./table-layouts.component.scss']
})
export class TableLayoutsComponent implements OnInit {
  private _opened: boolean = true;
  private _dock: boolean = true;

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
  constructor() { }

  ngOnInit() {
  }
  private _toggleSidebar() {
    // this._opened = !this._opened;
    this._dock = !this._dock;

  }
  private _toggleDock(): void {
    this._dock = !this._dock;
  }
  private _toggleDockOnHover(): void {
    if (this._dock = false) {
      this._dock = !this._dock;

    }
  }

}
