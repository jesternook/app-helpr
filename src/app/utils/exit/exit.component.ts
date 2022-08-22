import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exit',
  template: '<p>Loading...</p>'
})

export class ExitComponent implements OnInit {

  private auth: AuthService;
  private toastr: ToastrService;
  private router: Router;

  constructor(auth: AuthService, toastr: ToastrService, router: Router) { 
    this.auth = auth;
    this.toastr = toastr;
    this.router = router;
  }

  ngOnInit(): void {
    this.router.navigate(['/login']);
    this.auth.logout();
    this.toastr.info("Logout realizado com sucesso", "Logout");
  }
}
