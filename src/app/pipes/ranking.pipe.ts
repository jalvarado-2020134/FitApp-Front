import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'calification'
})
export class CalificationPipe implements PipeTransform {
    transform(restaurants: any, search: any) {
        if (search === undefined) {
            return restaurants;
        } else {
            return restaurants.filter((restaurant: any) => {
                return restaurant.calification.toLowerCase().includes(search.toLowerCase());
            })
        }
    }
}