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

  url: string = `https://restcountries.com/v3.1/all?fields=name,flag`;
  is_loading: boolean = false;// para fazer a bolinha de carregamento 
  dados: any = null // esta any pq ela aceita qualquer coisa

 constructor(){
  fetch(this.url)// aqui coloca this porque e uma função de fora que esta chamando para ser executada 
  .then(dados => dados.json())//converter os dados, "=> e como se fosse uma função anonima"
  .then(dados => {
    console.log(dados);
    this.dados = dados; 
  })//exibir os dados do then de cima 
  .catch(_ => {
    console.log(_);  "se colocar _ no lugar do erro exibe so para o dev "
  })//tratar possiveis erros
  .finally(() => {
    console.log('Requisição Finalizada!');
  })//exibir que finalizou 
 }
}
