import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  perfil:any = {
    nome: null,
    profissao: null,
    username: null,
    idioma: null,
    cidade: null,
    localidade: null,
    data_inicio: null,
    biografia: null,
    estatiticas: {
      curtidas:0, 
      seguidores:0,
      amigos:0
    },
    postagens:[
      {
        foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EMS3If484MslaI5ZA4WhbyoVAShTPoz37cFzSIf10EO-KrviBOSXqQEl3clfKP8ljZ8&usqp=CAU",
        nome: 'Barbie',
        username: '@barbie',
        texto: 'texto de exemplo de postagem',
        data: '12/03/2025'
      },
      {
        foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EMS3If484MslaI5ZA4WhbyoVAShTPoz37cFzSIf10EO-KrviBOSXqQEl3clfKP8ljZ8&usqp=CAU",
        nome: 'Barbie',
        username: '@barbie',
        texto: 'outro exemplo de postagem',
        data: '13/03/2025'
      },
      {
        foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EMS3If484MslaI5ZA4WhbyoVAShTPoz37cFzSIf10EO-KrviBOSXqQEl3clfKP8ljZ8&usqp=CAU",
        nome: 'Barbie',
        username: '@barbie',
        texto: 'hello word',
        data: '14/03/2025'
      },
      {
        foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EMS3If484MslaI5ZA4WhbyoVAShTPoz37cFzSIf10EO-KrviBOSXqQEl3clfKP8ljZ8&usqp=CAU",
        nome: 'Barbie',
        username: '@barbie',
        texto: 'outro exemplo de postagem',
        data: '15/03/2025'
      },
    ]
  };

 constructor(){}
}
