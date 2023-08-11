import { Component,OnInit} from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  additionAns: number | undefined;
  subtractionAns: number | undefined; 

  constructor(private arithmeticService: ArithmeticService) {
    this.Ans();
  }
  Ans() {
  const x = 51;
  const  y = 21;

  this.additionAns= this.arithmeticService.add(x, y);
  this.subtractionAns = this.arithmeticService.sub(x, y);
  }
}

    


