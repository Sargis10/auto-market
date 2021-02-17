import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  public cars: Car[] = [
    new Car('../../assets/images/car1.jpg', '85,000', '8 300'),
    new Car('../../assets/images/car2.jpg', '67,000', '12 500'),
    new Car('../../assets/images/car3.jpg', '42,000', '11 300'),
    new Car('../../assets/images/car4.jpg', '85,000', '8 300'),
    new Car('../../assets/images/car5.jpg', '33,000', '8 570'),
    new Car('../../assets/images/car6.jpg', '28,000', '19 500'),
    new Car('../../assets/images/car6.jpg', '28,000', '19 500')
  ];
  public bestOffers: Offer[] = [
    new Offer('../../assets/images/bmw.jpg', 2019, 'BMW series 5', '5 420'),
    new Offer('../../assets/images/cargo.jpg', 2018, 'Chevrolet Express Cargo', '4 651'),
    new Offer('../../assets/images/toyota.jpg', 2019, 'Toyota Prius AWD', '4 200'),
    new Offer('../../assets/images/ford.jpg', 2019, 'Ford F-150', '3 570'),
    new Offer('../../assets/images/cargo.jpg', 2018, 'Chevrolet Express Cargo', '4 651'),
    new Offer('../../assets/images/bmw.jpg', 2019, 'BMW series 5', '5 420'),
    new Offer('../../assets/images/ford.jpg', 2019, 'Ford F-150', '3 570'),
    new Offer('../../assets/images/toyota.jpg', 2019, 'Toyota Prius AWD', '4 200'),
  ];
  public carsBodyType: Type[] = [
    new Type('../../assets/images/sedan.png', 'Sedan'),
    new Type('../../assets/images/crossover.png', 'SUV / Crossover'),
    new Type('../../assets/images/pickup.png', 'Pickup'),
    new Type('../../assets/images/coupe.png', 'Coupe'),
    new Type('../../assets/images/hatchback.png', 'Hatchback'),
    new Type('../../assets/images/van.png', 'Van'),
    new Type('../../assets/images/sedan.png', 'Sedan')
  ];
  public popularCars: Offer[] = [
    new Offer('../../assets/images/honda.jpg', 2020, 'Honda Civic Hatchback', '1 250'),
    new Offer('../../assets/images/mustang.jpg', 2020, 'Ford Mustang GT', '1 420'),
    new Offer('../../assets/images/rav4.jpg', 2019, 'Toyota RAV4 AWD', '2 100'),
    new Offer('../../assets/images/honda-cr.jpg', 2020, 'Honda CR V Hybrid', '1 820'),
    new Offer('../../assets/images/honda.jpg', 2020, 'Honda Civic Hatchback', '1 250')
  ];

  public marks: Mark[] = [
    new Mark('../../assets/images/peugeot-logo.png', 'Peugeot'),
    new Mark('../../assets/images/volkswagen-logo.png', 'Volkswagen'),
    new Mark('../../assets/images/hyundai-logo.png', 'Hyundai'),
    new Mark('../../assets/images/renault-logo.png', 'Renault'),
    new Mark('../../assets/images/kia-logo.png', 'Kia Motors'),
    new Mark('../../assets/images/toyota-logo.png', 'Toyota'),
    new Mark('../../assets/images/hyundai-logo.png', 'Hyundai')
  ];

  constructor() {}
  getCars(): Car[] {
    return this.cars;
  }
  getOffers(): Offer[] {
    return this.bestOffers;
  }
  getCarBodyType(): Type[] {
    return this.carsBodyType;
  }
  getPopularCars(): Offer[] {
    return this.popularCars;
  }
  getMarks(): Mark[] {
    return this.marks;
  }
}

export class Car {
  public img: string;
  public km: string;
  public price: string;
  constructor(img: string, km: string, price: string) {
    this.img = img;
    this.km = km;
    this.price = price;
  }
}

export class Offer {
  public img: string;
  public year: number;
  public model: string;
  public offer: string;
  constructor(img: string, year: number, model: string, offer: string) {
    this.img = img;
    this.year = year;
    this.model = model;
    this.offer = offer;
  }
}

export class Type {
  public img: string;
  public carType: string;
  constructor(img: string, carType: string) {
    this.img = img;
    this.carType = carType;
  }
}
export class Mark {
  public img: string;
  public name: string;
  constructor(img: string, name: string) {
    this.img = img;
    this.name = name;
  }
}
