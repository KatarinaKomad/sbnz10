import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Biljka, plantTypeImageMapper } from 'src/app/model/biljka/biljka';
import { BiljkaService } from 'src/app/service/biljka/biljka.service';

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})
export class PlantCardComponent implements OnInit {
  
  @Input() plant!: Biljka;
  imageSource: String = "";
  plantDescription: {[key: string]: string} = {
    "identifikator": "",
    "datum sadnje": "",
    "poslednja dijagnoza" : ""
  }

  Object = Object;

  constructor(private biljkaService: BiljkaService){}
  
  ngOnInit(): void {
    this.imageSource = "/assets/" + plantTypeImageMapper[this.plant.nazivTipa.toUpperCase()];
    this.plantDescription['datum sadnje'] = formatDate(this.plant.datumSadnje, "dd.MM.YYYY",  'en-US');
    
    if (this.plant.id) {
      this.plantDescription['identifikator'] = this.plant.id.toString();
      this.biljkaService.getLastDiagnosis(this.plant.id).subscribe({
        next: (response) => {
          this.plantDescription['poslednja dijagnoza'] = `${response.nazivBolesti} - ${formatDate(response.datumPreporuke, "dd.MM.YYYY",  'en-US')}`
         }
      })
    }
  }


}
