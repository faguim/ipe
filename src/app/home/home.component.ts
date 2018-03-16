import { Component, OnInit, TemplateRef } from '@angular/core';

import { EmbedVideoService } from 'ngx-embed-video';

import { ApiService } from './../api.service';

import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questionnareForm: FormGroup;


  isReadonly: boolean = false;

  iframe_html: any;
  youtubeUrl = "https://www.youtube.com/watch?v=Pi3yO2VNrFw";

  public student;

  getStudent(i) {
    console.log('aqui');
    this.api.getStudent(i).subscribe(
      (res) => {
        this.student = res;
        console.log(this.student);
      },
      (err) => {
        console.log('falhou');
        console.error('ApiService::handleError', err);
      }
    );
  }

  onSubmit() {
    
    this.api.save(this.questionnareForm.value).subscribe(
      (res) => {
        this.formHidden = true;
        this.successMessageHidden = false;
        this.failMessageHidden = true;

      },
      (err) => {
        console.error('ApiService::handleError', err);
        this.successMessageHidden = true;
        this.failMessageHidden = false;
      }
    );
  }

  ngOnInit() {
    this.questionnareForm = this.formBuilder.group(
      {
        name: '',
        video: 0,
        narrative: 0,
        layout: 0,
        animation: 0,
        question2: this.formBuilder.array([]),
        question2Others: '',
        question3: '',
        question4: false
      }
    );

    this.setQuestion2();
  }
  // this.getStudent(1);

  setQuestion2() {
    let question2 = ['Pra que servem as bombas', "Contexto Histórico", "Onde vamos usar", "Outras"]
    
    //One Form Group for one item
    const questions2FGs = question2.map(item => {
      let obj = {}; obj[item] = false;
      return this.formBuilder.group(obj)
    });

    const question2FormArray = this.formBuilder.array(questions2FGs);
    this.questionnareForm.setControl('question2', question2FormArray);
  }

  get question2(): FormArray {
    return this.questionnareForm.get('question2') as FormArray;
  };

  constructor(
    private embedService: EmbedVideoService,
    private formBuilder: FormBuilder,
    private api: ApiService) {
    this.iframe_html = this.embedService.embed(this.youtubeUrl, { attr: { width: 600, height: 400 } });
  }

  formHidden: boolean = false;
  successMessageHidden: boolean = true;
  failMessageHidden: boolean = true;


}
