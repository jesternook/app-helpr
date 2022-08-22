import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
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
  private auth: AuthService;
  private router: Router;

  constructor(formBuilder: FormBuilder, toastr: ToastrService, auth: AuthService, router: Router) {
    this.formLogin = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required, Validators.minLength(3)]]
    })
    this.toastr = toastr;
    this.auth = auth;
    this.router = router;
  }

  ngOnInit(): void {
  }

  public logar(): void {
    if (this.formLogin.valid) {
      let credencias: Credenciais = this.formLogin.value;
      this.auth.authenticate(credencias).subscribe({
        next: response => {
          let token: string | undefined = response.headers.get('Authorization')?.substring(7);
          if (this.auth.setToken(token)) {
            this.router.navigate(['/home']);
          } else {
            this.toastr.error("Acesso negado!", "Login")
          }
        },
        error: error => {
          this.toastr.error("E-mail e/ou senha incorreto.", "Login")
        }
      });
    } else {
      this.toastr.error("E-mail e/ou senha inválido", "Login");
    }
  }
}
