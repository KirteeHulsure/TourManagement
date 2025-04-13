import { Component } from '@angular/core';
import { Tour } from '../models/tour.model';

@Component({
  selector: 'app-tour-component',
  templateUrl: './tour-component.component.html',
  styleUrls: ['./tour-component.component.css'],
})
export class TourComponentComponent {
  startPoint = '';
  endPoint = '';

  tours: Tour[] = [];

  addTour() {
    const tour = {
      start: this.startPoint.trim(),
      end: this.endPoint.trim(),
      level: 1,
      continued: false,
      repeated: false,
    };

    if (this.tours.length > 0) {
      const lastTour = this.tours[this.tours.length - 1];
      if (lastTour.end === tour.start) {
        tour.continued = true;
      } else {
        tour.continued = false;
      }

      // Check for exact repeats
      for (const t of this.tours) {
        if (t.start === tour.start && t.end === tour.end) {
          tour.repeated = true;
          tour.level = 2;
          break;
        }
      }
    }

    this.tours.push(tour);
    this.startPoint = '';
    this.endPoint = '';
  }

  getShort(name: string): string {
    return name.substring(0, 3).toUpperCase();
  }
}
