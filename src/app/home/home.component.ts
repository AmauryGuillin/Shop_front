import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ProductComponent } from '../product/product.component';
import { Product, ProductPayload } from '../types/product';
import { ProductsService } from '../services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SearchBarComponent,
    ProductComponent,
    FormsModule,
  ],
})
export class HomeComponent implements OnInit {
  public productsArray: Product[] = [];
  public filteredProducts: Product[] = [];
  public searchTerm: any = '';

  constructor(private _productService: ProductsService) {}

  async ngOnInit() {
    this.productsArray = await this._fetchAllProducts();
    this.filteredProducts = [...this.productsArray];
  }

  private async _fetchAllProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      this._productService.getAllProducts$().subscribe({
        next: (data: ProductPayload) => {
          resolve(data.productsList);
        },
        error: (error: any) => {
          reject(error);
        },
      });
    });
  }

  filterProducts(entry: string): void {
    this.searchTerm = entry;
    this.filteredProducts = this.productsArray.filter((product) =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
