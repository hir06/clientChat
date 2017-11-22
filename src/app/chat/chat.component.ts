import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    showchat = true;
    myMsg: any;
    constructor() { }

    ngOnInit() {
    }
    @Input() user: object;
    @Input() isHomeVisible: boolean;
    @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();


    showContact() {


        this.isHomeVisible = !this.isHomeVisible;
        this.change.emit(this.isHomeVisible)
    }
    message = [
        {
            "seq": "1",
            "msg": "Hi how are you",
            "time": "Wed Nov 22 2017 12:36:12"
        },
        {
            "seq": "2",
            "msg": "I am Fine, Thanks How are you doing?",
            "time": "Wed Nov 24 2017 12:36:12"
        },

    ]
    getKey(key){
        if(key == 13){
            this.addMessage();
        }
        else{
            return;
        }

    }
    addMessage() {
        var temp = {
            "seq": "1",
            "msg": this.myMsg,
            "time": Date().split("G")[0]
        }
        this.message.push(temp);
        this.myMsg = "";
    }


}
