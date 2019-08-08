import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
  regForm: any;
  public userName:string = '';
  public password:string = '';
  public email:string ='';
  public confirmPass :string='';
  constructor(public fb: FormBuilder, public api:ApiService) { }

  ngOnInit(){
    this.loadForm();
  }
  loadForm(){
   this.regForm =  this.fb.group({
     uname: ['', Validators.required],
     email : ['',[Validators.required]],
     pass : ['',[ Validators.required]],
     cpass : ['',[ Validators.required]],
   });
  }
  send(){
    if(this.regForm.valid){
      console.log(this.regForm.value);
      this.api.register(this.regForm.value)
      .then( (res)=>{
      console.log('data passed successfully', res)
      }) 
      .catch( (err)=>{
      console.log(err);
      });
    }else{
      console.log('Error',this.regForm)
    }
  }

}
