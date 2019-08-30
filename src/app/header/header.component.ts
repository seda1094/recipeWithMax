import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data.stroge.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataService: DataStorageService){}
  onSaveData(){
    this.dataService.storeRecipes()
    .subscribe(
      (response: Response)=>{
        console.log(response);
      }
    )
  }
  onFetchData(){
    this.dataService.getRecipes()
  }
}
