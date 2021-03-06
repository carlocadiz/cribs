import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { allResolved } from 'q';
import { CribsService } from './../services/cribs.service';
@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;

  constructor(
    private http: HttpClient, 
    private cribsService: CribsService
  ) { }

  ngOnInit() {
      this.cribsService.getAllCribs()
      .subscribe(
        
        data => this.cribs = data,
        error => this.error = error.statusText
      );

      this.cribsService.newCribSubject.subscribe(
        data => this.cribs =[data, ...this.cribs]
      )
  }
}