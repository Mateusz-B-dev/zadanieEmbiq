import { DriversService } from './../_services/drivers.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Circuit } from '../_model/circuit';
import { SeasonsService } from '../_services/seasons.service';
import { circuits } from 'src/_data/circuit';
import { RacesService } from '../_services/races.service';
import { RankingsService } from '../_services/rankings.service';
import { Ranking } from 'src/_model/ranking';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  circuits: Circuit[] = []; // Array of circuits
  seasons: number[] = []; // Season list 
  selected = new FormControl(1); // Currently selected season
  openDialog = false; // Dialog for player details
  rankings: Ranking[] = []; // Race ranking based on season and track
  pageCircuits: number = 1; // Circuits page number
  rankingVisible = true; // Hide the ranking table
  details: any; // Details about the selected player
  detailsTeams = []; // The teams in which the competitor has ridden
  responsiveOptions: any; // For carousel

  constructor(private driversService: DriversService, private seasonsService: SeasonsService, private racesService: RacesService, 
              private rankingsService: RankingsService) {
                this.responseCarousel();
  }

  ngOnInit(): void {
    this.getSeasons();
    this.circuits = circuits;
  }

  /**
   * Current page of circuits
   * @param event 
   */
  witchPage(event: any): void {
    this.pageCircuits = event.page;
  }

  /**
   * Get player data from API
   * @param id 
   */
  detailsDriver(id: number): void {
    this.details = null;
    this.openDialog = true;
    this.driversService.getDriverById(id).subscribe((value: any) => {
      value.response.forEach((element: any) => {
        this.details = element;
        this.detailsTeams = element.teams;
      });
    })
  }

  /**
   * Get data on specific competition
   */
  getCompetition(): void {
    this.rankings = [];
    this.rankingVisible = false;
    this.getRaces();
  }

  /**
   * Get seasons
   */
  getSeasons(): void {
      this.seasonsService.getSeasons().subscribe((value: any) => {
        value.response.forEach((element: any) => {
          const seas: any = {
            name: element
          }
          this.seasons.push(seas);
        });
      })
      
  }

  /**
   * Private method,
   * Get races for competition
   */
  private getRaces(): void {
    const season = this.selected.value;
    this.racesService.getRaces(season.name, this.pageCircuits).subscribe((value: any) => {
      value.response.forEach((element: any) => {
        if (element.type == 'Race') {
                this.getRanking(element.id);
              }
      });
    })
  }

  /**
   * Private method,
   * Get rankings based on season and route
   * @param id 
   */
  private getRanking(id: number): void {
    this.rankingsService.getRaces(id).subscribe((value: any) => {
      value.response.forEach((element: any) => {
        const result = {
                id: element.driver.id,
                position: element.position,
                name: element.driver.name,
                time: element.time
              }
              this.rankings.push(result);
      });
    })
  }

  /**
   * Private method,
   * The method responsible for the responsiveness of the carousel
   */
  private responseCarousel(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
}
