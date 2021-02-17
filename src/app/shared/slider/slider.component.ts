import { Component, OnInit, Input } from '@angular/core';

export interface SliderItem {
  id: number;
  src: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() data: SliderItem[];
  imgMiddle;
  marginLeft = 0;

  constructor() { }

  ngOnInit(): void {
    this.imgMiddle = this.data[0];

    setInterval(() => {
      if (this.imgMiddle.id !== this.data[this.data.length - 1].id) {
        this.changeRight();
      } else {
        this.imgMiddle = this.data[0];
      }
    }, 5000);
  }
  changeImg(data): void {
    this.imgMiddle = data;
    if (this.imgMiddle.id < this.data.length - 4 && window.innerWidth > 560) {
      this.marginLeft = -this.imgMiddle.id * 90;
    } else if (window.innerWidth < 560) {
      this.marginLeft = -this.imgMiddle.id * 90;
    }
  }
  changeRight(): void {
    if (this.imgMiddle.id < this.data.length - 1) {
      this.imgMiddle = this.data[this.imgMiddle.id + 1];
      if (this.imgMiddle.id < this.data.length - 4 && window.innerWidth > 560) {
        this.marginLeft = -this.imgMiddle.id * 90;
      } else if (window.innerWidth < 560) {
        this.marginLeft = -this.imgMiddle.id * 90;
      }
    }
  }

}
