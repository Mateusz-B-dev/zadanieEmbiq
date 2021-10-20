import { DriversService } from './../_services/drivers.service';
import { CircuitsService } from './../_services/circuits.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zadanieEmbiq';
  responsiveOptions: any;
  circuits: any[] = [];
  selected = new FormControl('');
  subscribe = new Subscription;
  openDialog = false;
  cars: any;

  constructor(private circuitsService: CircuitsService, private http: HttpClient, private driversService: DriversService) {
    this.circuits = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    this.cars = [
      {vin: 25345345, year: 2020, brand: 234, color: 'black'}
    ]

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  selectItem(): void {
    console.log(this.selected.value);
    this.subscribe = this.circuitsService.getCircuits().subscribe(response => {
      console.log(response);
    })

  }

  getCircuits(): void {
    this.circuitsService.getCircuits().subscribe(response => {

    })
  }

  getCircuitsById(): void {
    this.circuitsService.getCircuitsById(1).subscribe(response => {

    })
  }

  getDriversById(): void {
    this.driversService.getDriverById(1).subscribe(response => {

    })
  }
}
