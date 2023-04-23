import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  /**decorator -criar dinamismo no component com variável****/
  @Input() TweetMesssage: string = ""

}
