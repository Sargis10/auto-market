import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { Car, Offer, Type, Mark} from '../services/cars.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public cars: Car[];
  public mostSelling: Offer[];
  public bestOffers: Offer[];
  public mostVisited: Offer[];
  public carsBodyType: Type[];
  public popularCars: Offer[];
  public marks: Mark[];
  marketStatusItems = [
    {id: 0, src: '../../assets/images/crossover.png'},
    {id: 1, src: '../../assets/images/bmw.jpg'},
    {id: 2, src: '../../assets/images/honda-cr.jpg'},
    {id: 3, src: '../../assets/images/ford.jpg'}
  ];
  private prevArrow = '<img class=\'a-left control-c prev slick-prev\' src=\'/assets/icons/arrow_back.svg\'>';
  private nextArrow = '<img class=\'a-left control-c next slick-next\' src=\'/assets/icons/arrow_forward.svg\'>';

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: this.prevArrow,
    nextArrow: this.nextArrow,
  };
  slideConfig1 = {
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: this.prevArrow,
    nextArrow: this.nextArrow,
  };

  constructor(private carsServices: CarsService) { }

  ngOnInit(): void {
    this.cars = this.carsServices.getCars();
    const offers = this.carsServices.getOffers();
    this.mostSelling = offers;
    this.bestOffers = offers;
    this.mostVisited = offers;
    this.carsBodyType = this.carsServices.getCarBodyType();
    this.popularCars = this.carsServices.getPopularCars();
    this.marks = this.carsServices.getMarks();
  }
}
