import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})
export class AddExpensesComponent implements OnInit {


  clinic_name = [
    {label:'اختر  العيادة', value:null},
    {label:'عيادة محمد احمد', value:{id:1, name: 'مندوب مبيعات', code: 'NY'}},
    {label:'عيادة عمرو جلال', value:{id:2, name: 'فرع المعادي', code: 'RM'}},

  ]
  constructor() { }

  ngOnInit() {
  }
  addReservation(reservation) {

  }
}
