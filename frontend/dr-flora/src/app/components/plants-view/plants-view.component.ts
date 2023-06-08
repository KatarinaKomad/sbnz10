import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Biljka } from 'src/app/model/biljka/biljka';
import { BiljkaService } from 'src/app/service/biljka/biljka.service';

@Component({
  selector: 'app-plants-view',
  templateUrl: './plants-view.component.html',
  styleUrls: ['./plants-view.component.scss']
})
export class PlantsViewComponent implements OnInit{
  
  constructor(private biljkaService: BiljkaService, private toast: NgToastService){

  }

  userPlants: Biljka[] = [];

  ngOnInit(): void {
    this.biljkaService.getCurrentUserPlants().subscribe({
      next: (response) => {
        this.userPlants = response;
      },
      error: (err) => this.openError("Došlo je do greške, pokušajte ponovo", "")
    })
  }

  openError(message: string, title:string){
    this.toast.error({detail: title, summary:message, position:'tr', duration:3000})
    }

}
