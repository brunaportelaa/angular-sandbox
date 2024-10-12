import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador',
  standalone: true,
  imports: [],
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {

  @Output() mudouValor = new EventEmitter();
  
  @Input() valor = 0;

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }

}
