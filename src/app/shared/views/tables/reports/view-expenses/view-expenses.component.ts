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
  selector: 'app-view-expenses',
  templateUrl: './view-expenses.component.html',
  styleUrls: ['./view-expenses.component.scss'],
  providers: [
    // ConfirmationService,
  ]
})
export class ViewExpensesComponent implements OnInit {
  @ViewChild('addContent', {static: false}) addContent;

  rangeDates;
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
    expense: ' اي نوع من المصروفات',
    date: '03/31/2020',
    facility_name: 'اسم المؤسسة',
    cost: 200
  },


 ];



  constructor(private confirmationService: ConfirmationService ,private router : Router,private http: HttpClient,private toastr: ToastrService ,private modalService: NgbModal,private spinner: NgxSpinnerService) {


    this.cols = [
      { field: 'expense', header: 'المصروف  ' },
      { field: 'date', header: 'التاريخ' },
      { field: 'facility_name', header: 'إسم المنشأة	' },
      { field: 'cost', header: 'التكلفة' },

  ];
      }

  ngOnInit() {
    // this.userService.refreshrowes()
    // .subscribe(()=> {
    //   this.loadData();
    // });
    this.loadData();

    this.items = [
      { label: ' اضافة مصروف', icon: 'fas fa-user-plus',  command: (event) => this.openSm(this.addContent) },
      { label: 'مسح المصروف', icon: 'fas fa-trash', command: (event) => this.deleteRow(this.selectedRow) }

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
dateRange(dateRangeVal) {

if (dateRangeVal[1]) {
  let start = new Date(dateRangeVal[0]).getTime();
  let end   = new Date(dateRangeVal[1]).getTime();
 let fitered =  this.rowData.filter(item => {
    let date = new Date(item.date).getTime();
    console.log(date)
    return date >= start && date <= end
 });
//  console.log(start)
this.data = fitered;
 console.log(fitered)

} else {
  this.loadData();
}
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


deleteRow(row) {
  console.log(row);
  this.confirmationService.confirm({
    message: 'هل تريد حذف هذا المصروف',
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
