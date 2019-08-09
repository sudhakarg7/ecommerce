import {  Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import {ApiService} from '../api.service';
import {Router, NavigationExtras} from "@angular/router";

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent{
    loginForm:any;
    constructor(public fb:FormBuilder, public api:ApiService, public router:Router){

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
                console.log('logged successfully', JSON.stringify(res));
                let q= JSON.stringify(res[0]._id)
                let navigationExtras: NavigationExtras = {
                    queryParams: {
                        "token": res[0]._id,
                    }
                };
                this.router.navigate(["home"], navigationExtras);

            }).catch((err)=>{
                console.log(err);
            })
        }else{
            console.log('err', this.loginForm.value);
        }
        
    }

}