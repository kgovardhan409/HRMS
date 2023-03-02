import { Component, EventEmitter, Input, OnDestroy, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  // @Input('em') emp ?: Employee;

  editEmployee : any ;


  dataFromParent : any;

  private _data: any;
  @Input() set data(d: any) {
    this._data = d ? JSON.parse(JSON.stringify(d)) : null;
  }

  get data(): any {return this._data;}


  @Output() dataToParent = new EventEmitter<Employee>();

  constructor() {
  }

  ngOnInit() {
    this.dataFromParent = this.data;
    console.log("this is ngOninit");
  }

  ngOnChanges(mydata: SimpleChanges){
    console.log("this is ngonchanges")
    // console.log(mydata['emp'].current Value);
    // this.dataFromParent = mydata['emp'].currentValue;
    // this.editEmployee = this.dataFromParent;
  }

  OnDestory(){
    console.log("my component laoded succesffully, unsubscribing api's");
  }

  ngAfterViewInit(){
    console.log("after view init")
  }

  saveEmployee(){
    // console.log(this.dataFromParent);
    this.dataToParent.emit(this.dataFromParent);
    this.dataFromParent = false;
    //send data to the api

  }


//backend - Restful api's.. - java springboot, python, nodeJS
//frontend - consume api's.. - javascript, Angular, React, Vue..


//javascript - new xmlHttpRequest() - open, send

}
