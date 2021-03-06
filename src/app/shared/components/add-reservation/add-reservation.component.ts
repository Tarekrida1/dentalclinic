import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent implements OnInit {
  doc_name =  [
    {label:'اختر  دكتور', value:null},
    {label:'محمد احمد', value:{id:1, name: 'مندوب مبيعات', code: 'NY'}},
    {label:'عمرو جلال', value:{id:2, name: 'فرع المعادي', code: 'RM'}},
    {label:'عبدالرحمن محمود', value:{id:3, name: 'فرع 6 اكتوبر', code: 'LDN'}},
    {label:'الاء محمد', value:{id:4, name: 'فرع حلوان', code: 'IST'}},
    {label:'وليد مصطفى', value:{id:5, name: 'فرع الجيزة', code: 'PRS'}}

  ];
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
