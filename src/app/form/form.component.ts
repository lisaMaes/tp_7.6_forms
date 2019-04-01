import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from  "../model/User";
import {knowledgeValid} from "./validators";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nameCtrl: FormControl;
  surnameCtrl: FormControl;
  phoneCtrl: FormControl;
  emailCtrl: FormControl;
  knowledgeCtrl: FormControl;
  userForm: FormGroup;


  constructor(fb: FormBuilder) {

    //Création des contrôles
    this.nameCtrl = fb.control('', [Validators.required, Validators.pattern('^[A-Z]+[a-z-\\ ]*$')]);
    this.surnameCtrl = fb.control('', [Validators.required, ]);
    this.phoneCtrl = fb.control('', [ Validators.pattern('^([0-9]{2}( |-|)){4}[0-9]{2}$')]);
    this.emailCtrl = fb.control('', [Validators.required, Validators.email ]);
    this.knowledgeCtrl = fb.control('', [Validators.required, knowledgeValid]);

    //Création du groupe (aka le formulaire)
    this.userForm = fb.group({
        name: this.nameCtrl,
        surname: this.surnameCtrl,
        phone: this.phoneCtrl,
        email: this.emailCtrl,
        knowledge: this.knowledgeCtrl,

    });
  }

  handleClear(){
    this.nameCtrl.setValue('');
    this.surnameCtrl.setValue('');
    this.phoneCtrl.setValue('');
    this.emailCtrl.setValue('');
    this.knowledgeCtrl.setValue('');
  }

  handleSubmit(){
    console.log(this.userForm.value);
  }

  ngOnInit() {
  }

}
