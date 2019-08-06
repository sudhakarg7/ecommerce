import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


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
  constructor(public fb: FormBuilder) { }

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
    }else{
      console.log('Error',this.regForm)
    }
  }

}
