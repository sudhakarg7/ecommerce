import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
  loginForm: any;
  public userName:string = '';
  public password:string = '';
  public email:string ='';
  public confirmPass :string='';
  constructor(public fb: FormBuilder) { }

  ngOnInit(){
    this.loadForm();
  }
  loadForm(){
   this.loginForm =  this.fb.group({
     email : ['aaa',[Validators.required]],
     password : ['',[ Validators.required]]
   });
  }
  send(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }else{
      console.log('Error',this.loginForm)
    }
  }

}
