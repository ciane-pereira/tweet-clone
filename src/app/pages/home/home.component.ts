import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  tweets: string[] = []

  constructor(private service: MessagesService) {}
  ngOnInit(): void {
    /**throw new Error('Method not implemented.'); substituir pelo código abaixo**/
    this.tweets = this.service.getMessages()
  }

}
