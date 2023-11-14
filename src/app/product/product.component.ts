import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../types/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() imageUrl!: string;
  @Input() productTitle!: string;
  @Input() productDescription!: string;

  constructor() {}
}
