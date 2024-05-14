import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ReportsService } from '../reports.service';
import { Report } from "../report/report.component";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map!: L.Map
  reports: Report[];

  constructor(private rs:ReportsService){
    this.reports = [];
  }

  ngOnInit(): void {
    this.showMap();
    this.putLabels();
  }

  showMap() {
    this.map = L.map('mapid').setView([49.27, -123], 11);

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ',

    }).addTo(this.map);
  }

  putLabels() {
    this.reports = this.rs.getNoUpdate();
    this.reports.forEach((r:Report) => {
      L.marker([r.latitude, r.longitude]).addTo(this.map)
      .bindPopup("<b>"+r.location+"</b><br />1 nuisance reports");
    })
    // L.marker([49.2276, -123.0076]).addTo(this.map)
  	// 	.bindPopup("<b>Metrotown</b><br />1 nuisance reports")
    // L.marker([49.300054, -123.148155]).addTo(this.map)
    // 	.bindPopup("<b>Stanley Park</b><br />1 nuisance reports")
    // L.marker([49.2781, -122.9199]).addTo(this.map)
    // 	.bindPopup("<b>SFU Burnaby</b><br />1 nuisance reports")

  }
}
