import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
toggleClick = new BehaviorSubject<boolean>(false);
_toggleClick = this.toggleClick.asObservable();


toggleClickFun(dock) {

  this.toggleClick.next(dock = !dock);
  // alert(dock);
  // dock = !dock;

}
  constructor() { }
}
