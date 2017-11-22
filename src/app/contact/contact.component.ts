import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  showchat = false;

  constructor() {
    // http.get('../../assets/data.json').map((res:Response) => res.json).subscribe((data: Array<any>)=>this.data=data)

  }
  // getData(){
  //   this.http.get('../../assets/data.json').subscribe(data => {
  //     this.data = data;})
  // }   

  ngOnInit() {

  }
  @Output() onSelection = new EventEmitter();
  @Output() x = new EventEmitter<boolean>();
  @Input() isHomeVisible: boolean;

  // toggleHomeVisibility() {


  //    this.isHomeVisible   = !this.isHomeVisible;
  //    this.x.emit(this.isHomeVisible);
  //  }
  SelectUser(d) {
    this.isHomeVisible = !this.isHomeVisible;
    this.x.emit(this.isHomeVisible);
    this.onSelection.emit({ d });

    //this.toggleHomeVisibility()
    //$('.m-active').removeClass('m-active');
    //this.showHome = true;

  }


  data = [
    {
      "id": 1,
      "name": "Vincent Porter",
      "link": "../../assets/chat_avatar_01.jpg",
      "status": "Online"
    },
    {
      "id": 2,
      "name": "Aiden Chavez",
      "link": "../../assets/chat_avatar_02.jpg",
      "status": "Online"
    },
    {
      "id": 3,
      "name": "Mike Thomas",
      "link": "../../assets/chat_avatar_03.jpg",
      "status": "Online"
    },
    {
      "id": 4,
      "name": "Hiral",
      "link": "../../assets/chat_avatar_04.jpg",
      "status": "Online"
    },
    {
      "id": 5,
      "name": "Hiral P",
      "link": "../../assets/chat_avatar_05.jpg",
      "status": "Online"
    },
    {
      "id": 6,
      "name": "John Doe",
      "link": "../../assets/chat_avatar_06.jpg",
      "status": "Online"
    },
    {
      "id": 7,
      "name": "Michale",
      "link": "../../assets/chat_avatar_07.jpg",
      "status": "Online"
    }

  ];


}
