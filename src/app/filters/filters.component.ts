import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../service/filterService/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private filters: FilterService) { }

  regions = this.filters.frenchRegions;
  regionsValue = 'null'

  ngOnInit() {
  }

  changeRegion(){
    this.filters.currentFrenchRegion = this.regionsValue;
  }

}
