import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  items: MenuItem[];
  constructor(private route: Router) { }
//
  ngOnInit() {
    this.items = [

    {
      label: 'الرئيسية',
      icon: 'fas fa-home',
      command: (event) => this.route.navigate(['/'])
  },
      {
          label: 'المرضى',
          icon: 'fas fa-users',
          items: [
              {label: 'كل المرضى', icon: 'fas fa-users'  , command: (event) => this.route.navigate(['/dashboard/patients'])},
              {label: 'إضافة مريض', icon: 'fas fa-user-plus' , command: (event) => this.route.navigate(['/dashboard/patients/add'])}

          ]
      },
      {
        label: 'التقارير',
        icon: 'fas fa-scroll',
        items: [
            {label: 'ملخص اليوم', icon: 'fas fa-sticky-note'  , command: (event) => this.route.navigate(['/dashboard/reports/day'])},
            {label: ' ملخص الدكتور', icon: 'fas fa-newspaper' , command: (event) => this.route.navigate(['/dashboard/reports/DoctorSummary'])}

        ]
    },

    {
      label: 'المصاريف',
      icon: 'fas fa-money-check-alt',
      command: (event) => this.route.navigate(['/dashboard/reports/ViewExpenses'])
  },
  {
    label: 'صافي الدخل',
    icon: 'fas fa-funnel-dollar',
    items: [
        {label: ' صافي الدخل', icon: 'fas fa-funnel-dollar'  , command: (event) => this.route.navigate(['/dashboard/reports/net-income'])},
        {label: '  مخطط الدخل', icon: 'fas fa-chart-line' , command: (event) => this.route.navigate(['/dashboard/reports/net-income-period'])}

    ]
},
{
  label: 'المواعيد',
  icon: 'fas fa-history',
  items: [
      {label: '  مشاهدة المواعيد', icon: 'far fa-calendar-alt'  , command: (event) => this.route.navigate(['/dashboard/appointments/view'])},
      {label: '   مواعيد اليوم', icon: 'fas fa-calendar-day' , command: (event) => this.route.navigate(['/dashboard/appointments/today'])}

  ]
}
  ];
  }

}
