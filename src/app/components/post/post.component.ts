import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
/**** início do código do projeto: send e change ******/
tweetMessage: string = ""
tweetMaxLength: number = 220
tweetRemain: number = this.tweetMaxLength

/****após service, criar constructor para injetar service****/
constructor(private service: MessagesService){
}

sendTweet(){
  this.service.addMessage(this.tweetMessage)
  this.tweetMessage = ""
  this.tweetRemain = this.tweetMaxLength

  /**alert sai apos service pq criei o this. */
  /**alert("this.tweetMessage")*/
}

changeTweet(){
  this.tweetRemain = this.tweetMaxLength - this.tweetMessage.length
}

}
