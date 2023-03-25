import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular crud';


  employees=[
    {'name':'Fazt',position:'Manager',email:"Fazt@gmail.com"},
    {'name':'Juan',position:"Designer",email:"JUan@gmail.com"},
    {'name':'Pedro',position:"Programmer",email:"Pedro@gmail.com"}
]

model:any={}
model2:any={}
msg:string=""
hideUpdate:boolean=true
addEmplyee():void{
this.employees.push(this.model);
this.msg="campo agregado"
}
deleteEmployee(i:any):void{
var answer=confirm('are you sure of delete this employee?')
if (answer) {
    this.employees.splice(i,1)
    this.msg="campo eliminado"
}

}
myValue:any;
editEmployee(i:any):void{
    this.hideUpdate=false
this.model2.name=this.employees[i].name;
this.model2.position=this.employees[i].position;
this.model2.email=this.employees[i].email
this.myValue=i
}
closeAlert():void{
    this.msg=""
}
updateEmployee():void{
let i=this.myValue;
for (let j = 0; j < this.employees.length; j++) {
 if (i==j) {
    this.employees[i]=this.model2;
    this.model2={}
    this.msg="campo actualizado"
    this.hideUpdate=true
 }
    
}

}

}
