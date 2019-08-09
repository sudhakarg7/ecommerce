import {  Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent{
    loginForm:any;
    constructor(public fb:FormBuilder, public api:ApiService){

    }

    ngOnInit(){
        this.loadForm();

    }

    loadForm(){
        this.loginForm = this.fb.group({
            email:['', Validators.required],
            pass: ['', Validators.required]
        });
    }

    login(){
        if(this.loginForm.valid){
            this.api.login(this.loginForm.value).then((res)=>{
                console.log('logged successfully', res);
            }).catch((err)=>{
                console.log(err);
            })
        }else{
            console.log('err', this.loginForm.value);
        }
        
    }

}