import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repeaters',
  templateUrl: './repeaters.component.html',
  styleUrls: ['./repeaters.component.scss']
})
export class RepeatersComponent implements OnInit {

  @Input() infor : any;
  showInput : boolean = false;
  folderName : string = '';
  type : string = 'folder';
  constructor() { }

  ngOnInit(): void {
    console.log(1)
    console.log(this.infor)
  }

  addNewFolder(item : any): void{
    item.children.push({"show" : true, "level" : item.level+1, "showInput": false, "type":this.type,"name":this.folderName,"children":[]})
    item.showInput = false;
    this.folderName = ''
  }
}
