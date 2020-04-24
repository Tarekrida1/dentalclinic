import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
// import { UserService } from 'src/app/auth/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuItem } from 'primeng/api/menuitem';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  providers: [
    // ConfirmationService,
  ]
})
export class PatientsComponent implements OnInit {
@ViewChild('addReservation', {static: false}) reservationContent;
@ViewChild('addPatiant', {static: false}) addPatiant;
@ViewChild('examinationsDetails', {static: false}) examinationsDetails;


  data;
  selectedRow;
  selectedRows;
  items: MenuItem[];
  cols: any[];
  editId;
  columns: any[];
  uploadedFiles = [];
 rowData = [
   {
    doc_name: 'خالد احمد',
    phone_number: '01065596566',
    patient_name: 'عمر محمود',
    password: 50520,

  },
  {
    doc_name: 'محمد احمد',
    phone_number: '01065596566',
    patient_name: 'سامح نبيل',
    password: 50520,

  }

 ];
 doc_name =  [
  {label:'اختر  دكتور', value:null},
  {label:'محمد احمد', value:{id:1, name: 'مندوب مبيعات', code: 'NY'}},
  {label:'عمرو جلال', value:{id:2, name: 'فرع المعادي', code: 'RM'}},
  {label:'عبدالرحمن محمود', value:{id:3, name: 'فرع 6 اكتوبر', code: 'LDN'}},
  {label:'الاء محمد', value:{id:4, name: 'فرع حلوان', code: 'IST'}},
  {label:'وليد مصطفى', value:{id:5, name: 'فرع الجيزة', code: 'PRS'}}

];
  editRowData = {

      name: '',
      phone_number: '',
      email: '',
      password: '',



  };
  @ViewChild('addEditModal', {static: false}) addEditModal;

  constructor(private confirmationService: ConfirmationService ,private router : Router,private http: HttpClient,private toastr: ToastrService ,private modalService: NgbModal,private spinner: NgxSpinnerService) {

    this.loadData();
    // this.cars = [
    //   {
    //     color: 'red',
    //     year: '2010',
    //     brand: 'ths sa s',
    //     vin: 'vin vin',
    //     dd : {
    //       id: '222'
    //     }
    //   },
    //   {
    //     color: 'orange',
    //     year: '2017',
    //     brand: 'asasa',
    //     vin: 'aok,',
    //     dd : {
    //       id: '574'
    //     }
    //   },
    // ]

    /*
    id: 26
code: "2"
name: "فرع المعادي"
email: "tarek2@gmail.com"
address: "المعادي"
phone_number: "45455"
    */
    this.cols = [
      { field: 'doc_name', header: 'اسم الدكتور ' },
      { field: 'phone_number', header: 'الموبايل' },
      { field: 'patient_name', header: 'اسم المريض' },


  ];
      }

  ngOnInit() {
    // this.userService.refreshrowes()
    // .subscribe(()=> {
    //   this.loadData();
    // });
    this.loadData();

    this.items = [
      { label: ' اضافة موعد', icon: 'fas fa-user-plus',  command: (event) => this.openSm(this.reservationContent) },
      { label: ' التاريخ المرضي', icon: 'fas fa-toilet-paper',  command: (event) => this.lgModalNotDiss(this.examinationsDetails) },

      { label: 'تعديل المريض', icon: 'fas fa-edit',  command: (event) => this.lgModalNotDiss(this.addPatiant) },
      { label: 'مسح المريض', icon: 'fas fa-trash', command: (event) => this.deleteRow(this.selectedRow) }

  ];
  }
loadData() {
  this.spinner.show();
this.data = this.rowData
  // this.userService.getAllNormalUser().subscribe(res =>{
  //   this.data = res['data'];
  //   console.log(res['data'].reverse());
  //   this.spinner.hide();


  // })
}


open(content) {
  this.modalService.open(content, { size: 'lg' });
}
openSm(content) {
  this.modalService.open(content, { size: 'sm' });

}
lgModalNotDiss(content) {
  this.modalService.open(content,{
      backdrop: 'static',
      keyboard: false,
      size: 'xl' ,
      scrollable: true
  });
}
editData(row) {
  this.editId = row.id;
  this.editRowData = row;
  row = row;
  console.log(row);
  this.loadData();

this.open(this.addEditModal);
}

updateRow(row) {
//   if (this.editId) {
//   this.userService.updateNormalUser(row.value, this.editId).subscribe(data => {
//     this.modalService.dismissAll();
//     this.editId = '';
//     this.editRowData = {

//       name: '',
//       phone_number: '',
//       email: '',
//       password: '',


//     };
//     this.loadData();

// this.toastr.success('تم تعديل المستخدم بنجاح', 'تعديل');

// },
// error => {
//   console.log(error)
// });
//   // } else {
//   //   this.userService.addNormalUser(row.value).subscribe(data => {
//   //     this.modalService.dismissAll();
//   //     this.toastr.success('تم اضافة المستخدم بنجاح', 'اضافة');
//   //     this.loadData();

//   //     console.log(data)
//   // },
//   // error => {
//   //   console.log(error)
//   // });
//   }



}




exportExcel() {
  import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.data);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "نسخة اكسل");
  });
}

saveAsExcelFile(buffer: any, fileName: string): void {
  import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
          type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  });
}

printData() {
  // const printedContent = document.querySelector('.printed_content').innerHTML;
  const printContents = document.querySelector('.printed_content').innerHTML;
  const stylesHtml = document.getElementsByTagName('head')[0].innerHTML;
  // const linksHtml = this.getTagsHtml('link');

  const popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  popupWin.document.open();
  popupWin.document.write(`
  <html>
      <head>
          <title>Print tab</title>

          ${stylesHtml}

      </head>
      <style>
      body .ui-table .ui-table-caption {

        display: none;
    }
      .ui-table-caption {
        display: none
      }
      .system-card {
        // border: 1px solid #0000 !important;
        direction: rtl;
      }
      body {
        background: #fff !important;
    }
      table {
        direction: rtl;
    }
    .barcode img{
      width: 100%;
      margin-bottom: 10px;
}
.barcode .square {
width: 80px;
margin: auto;
}
.address {
text-align: right !important;
padding-right: 59px;
}
@media print {
.page-wapper {
  height: 100%;
  width: 100%;
  border: 5px solid;
 }
 .printed_content {
  height: 95vh;
  display: flex;
  flex-direction: column;
}
.printed_content .invoce-footer {
margin-top: auto;
}
}

      </style>
      <body>
      <div class="page-wapper">
      <div class="modal-body invoice-body printed_content">  ${printContents}</div>

</div>
      </body>
      <script>
      setTimeout(function(){ window.print();
       }, 1000);
      // setTimeout(function(){ self.print(); }, 2000);

      // document.onload=window.print();
       </script>
  </html>
  `
  );
//    popupWin.loaction.reload();
  //popupWin.print();
}
onUpload(event) {
  // for(let file of event.files) {
  //     this.uploadedFiles.push(file);
  // }

  // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
addReservation(reservation) {

}
deleteRow(row) {
  console.log(row);
  this.confirmationService.confirm({
    message: 'هل تريد حذف هذا المريض',
    acceptLabel: 'نعم',
    rejectLabel: 'لا',
    accept: () => {
        //Actual logic to perform a confirmation
    }
});
  // this.userService.delNormalUser(row.id).subscribe(res =>{
  //   this.toastr.success('تم حذف المستخدم بنجاح', 'حذف');
  //   this.loadData();

  //   // console.log('sented data : '+ taskData.value)
  //   // this.router.navigate(['/rowes'])
  //   // console.log(res);
  // })
  // this.messageService.add({ severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand });
}

}
