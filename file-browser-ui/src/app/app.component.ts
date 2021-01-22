import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  infor : any
  loaded : boolean = false;
  show : boolean = false;
  showInput : boolean = false;
  folderName : string = '';
  type : string = 'folder';
  
  constructor(private commonServ : CommonService){
    this.commonServ.getfilesnfolders().subscribe(resp => {
      console.log(resp)
      this.infor = resp;
      this.loaded = true;
    })
  }

  ngOnInit(){
    
  }

  addNewFolder(): void{
    this.infor.children.push({"show" : true, "level" : 2, "showInput": false, "type":this.type,"name":this.folderName,"children":[]})
    this.showInput = false;
    this.folderName = ''
  }
}
