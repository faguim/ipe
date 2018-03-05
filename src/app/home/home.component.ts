import { Component, OnInit } from '@angular/core';

import { EmbedVideoService } from 'ngx-embed-video';  


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  max: number = 10;
  nota: number = 7;
  isReadonly: boolean = false;

  iframe_html: any;
  youtubeUrl = "https://www.youtube.com/watch?v=iHhcHTlGtRs";

  
  usuario: any = {
    nome: '',
    email: ''
  }

  onSubmit(form){
    console.log(form)
  }

  ngOnInit() {
  }

  constructor(private embedService: EmbedVideoService) { 
    this.iframe_html = this.embedService.embed(this.youtubeUrl, { attr: { width: 600, height: 400} });
  }

}
