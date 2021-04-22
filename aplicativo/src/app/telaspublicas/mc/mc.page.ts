import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { HTTP } from '@ionic-native/http/ngx';


@Component({
  selector: 'app-mc',
  templateUrl: './mc.page.html',
  styleUrls: ['./mc.page.scss'],
})
export class McPage implements OnInit {
 
  mestre = new Array();
  erro = "sem erro"
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
   this.carregarDados(); 
  }

  carregarDados(){
    
    this.http.get('http://cap.sout.net.br/mc.php').subscribe(data => {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];
          this.mestre.push(element);
        }
      }
    }, err => {
      console.log(err);
      this.erro = err.message;
    });
  
   /*
    this.http.get('http://cap.sout.net.br/mc.php',{},{}).then(data =>{
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];
          this.mestre.push(element);
        }
      }
    }).catch(error => {
      this.erro = "deu erro "
      this.erro += " "+ error.status;
      this.erro += " "+ error.error;
      this.erro += " "+ error.headers;
      console.log(error)
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
  
    });
*/
    
  }
}
