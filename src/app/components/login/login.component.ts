import { Credenciais } from './../../models/credenciais';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  private toastr: ToastrService;

  constructor(formBuilder: FormBuilder, toastr: ToastrService) { 
    this.formLogin = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required, Validators.minLength(3)]]
    })
    this.toastr = toastr;
  }

  ngOnInit(): void {
  }

  public logar(): void{
    if (this.formLogin.valid) {
    let credencias: Credenciais = this.formLogin.value;
    }
    else{
      this.toastr.error("E-mail e/ou senha inválido", "Login");
    }
  }
}
