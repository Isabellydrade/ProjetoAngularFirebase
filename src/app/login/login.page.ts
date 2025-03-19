import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: any = {
    email: null,
    password: null,
    confirm_password: null
  }

  constructor(
    private messageService: MessageService,
    private crudService: CrudService
  ) { }

  ngOnInit() {
  }


  criar(){
    if(this.user.password != this.user.confirm_password) {
      this.messageService.show('As senhas não conferem',3000)
      return;
    }

    this.crudService.insert(this.user, 'user');''
  }
    
}
