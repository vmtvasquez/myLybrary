import { Component, OnInit } from '@angular/core';
import { PersonModels } from '../../models/person.model';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.page.html',
  styleUrls: ['./add-person.page.scss'],
})
export class AddPersonPage implements OnInit {

  personForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private navCtrl:NavController
  ) {
    this.personForm = this.createForm();
   }

  ngOnInit() {
  }

  saveForm(){
    console.log(this.personForm.value);
    this.navCtrl.back();
  }

  private createForm(){
    return this.formBuilder.group({
      name:['',[Validators.required]],
      lastname:['',[Validators.required]],
      middlename:['']
    })
  }
}
