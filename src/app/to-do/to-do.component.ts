import { Component, OnInit} from '@angular/core';

import {Todolist} from '././todolist';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {


showAddlistcard:boolean=true;
showeditlistcard:boolean=false;

 constructor() { }

  ngOnInit() {
  }

content:string;
status:string;
priority:string;
taskid:number=1;

Todolist:Todolist[]=[];




add()
  {
     

    this.Todolist.push(
      {
        "id":this.taskid,
        "contents":this.content,
    "statuss":this.status,
    "prioritys":this.priority

    }
    )
    this.taskid++;

  }

deleteTasks(index)
{
  this.Todolist.splice(index,1);
  this.taskid--;
}




cauncellistedit()
{
  this.showeditlistcard=false;
   this.showAddlistcard=true;
}

showaddlistcard()
{
  this.content="";
this.status="";
this.priority="";
  this.showAddlistcard=true;
  this.showeditlistcard=false;
}

btn_updateTasks(index)
{
if(this.taskid=this.Todolist[index].id,
  this.content=this.Todolist[index].contents,
this.status=this.Todolist[index].statuss,
this.priority=this.Todolist[index].prioritys)
{
  this.showeditlistcard=true;
  this.showAddlistcard=false;
}
}




updateTasks()
{
  this.showAddlistcard=false;
  if(
    this.Todolist[this.taskid -1].contents=this.content,
  this.Todolist[this.taskid -1].statuss=this.status,
  this.Todolist[this.taskid-1].prioritys=this.priority
  )

{
  this.showeditlistcard=false;
this.taskid=this.Todolist[this.Todolist.length-1].id+1;
  }
  this.showAddlistcard=true;
}


/*
  {
      contents: 'Update Software',
      statuss: 'Complete',
      prioritys: 'A',
    },
    {
      contents: 'Create an App',
      statuss: 'Doing',
      prioritys: 'D',
    },
    {
      contents: 'Install Keybored',
      statuss: 'To Do',
      prioritys: 'F',
    }
taskList=[];
content:string="";
status:string="";
priority:string="";



@ViewChild('taskInput') input;

constructor(public navCtrlL:NavController,public alertCtrl:AlertController) { }

  ngOnInit() {
  }

ionViewDidLoad()
{
  setTimeout(()=>{
   this.input.setFocus();
  },500);
}





this.input.setFocus;

}


updateTasks(index)
{
  if(this.Todolist[this.content-1].contents=this.content,
  this.Todolist[this.status-1].statuss=this.status,
  this.Todolist[this.priority-1].prioritys=this.priority)
  {
this.content=this.Todolist[this.Todolist.length-1].contents+1;
  }

}
updateTask(index)
{
  let alert=this.alertCtrl.create({
    title:'Update Task?',
    message:'Type in your new task to update.',
    inputs:[{name:'editTask',placeholder:'Task'}],
    button:[
      {text:'Cauncel'},
      {text:'Update',handler:data=>{this.taskList[index]=data.editTask;}}]
});
alert.present();
}


deleteTask(index)
{
  this.taskList.splice(index,1);
}
deleteTasks(index)
{
  this.taskLists.splice(index,1);
}
*/
}
