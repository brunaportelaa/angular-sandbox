import { Component, EventEmitter } from '@angular/core';
import { OutputPropertyComponent } from "../output-property/output-property.component";

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [OutputPropertyComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})

export class DataBindingComponent {

  valorInicial = 15;

  onMudouValor() {
    
  }

}
