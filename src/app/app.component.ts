import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
loadedFeature = 'recipe';
onNavigate(feture: string){
  this.loadedFeature = feture;
}
ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyDbMJFoMGMSrGFDV3wSlZNrUWb73Dl5Av8",
    authDomain: "ng-recipe-book-113f0.firebaseapp.com",
  })
}
}
