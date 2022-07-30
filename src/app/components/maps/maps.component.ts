import { Component, OnInit } from "@angular/core";
import { Map, tileLayer } from "leaflet";
import { RestaurantModel } from "src/app/models/restaurant.model";
import { RestaurantRestService } from "src/app/services/restaurantRest/restaurant-rest.service";



@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})

export class MapComponent implements OnInit {
    restaurants: any;
    restaurant: RestaurantModel;

    constructor(
        private restaurantRest: RestaurantRestService,

    ) { 
                this.restaurant = new RestaurantModel('','','','',0,'','','',false,'');

    }

    ngOnInit(): void {
        this.getRestaurants();
    }

    getRestaurants(){
        this.restaurants=[];
        this.restaurantRest.getRestaurants().subscribe({
            next:(res:any)=>{
                this,this.restaurants = res.restaurants;
                console.log(res)
            },
            error:(err)=> console.log(err)
        })
    }

    ngAfterViewInit() {
        const map = new Map('map').setView([14.6235, -90.5273], 13);
        tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        }).addTo(map);
    }

}

