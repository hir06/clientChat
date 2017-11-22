import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  selectedUser = {
    d:
    {
      "id": 1,
      "name": "Vincent Porter",
      "link": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg",
      "status": "Online"
    }
  };
  isHomeVisible = true;
  getuser(d) {
    this.selectedUser = d;
  }
  getHomeVisible(x) {
    this.isHomeVisible = x;
  }
  setHomeVisible(x) {
    this.isHomeVisible = x;
  }
}
