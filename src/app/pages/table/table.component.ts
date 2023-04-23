import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {
  columns: string[] = ['id', 'title', 'price', 'cover']
  products: Product[] = [];
  total = 0;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(response => {
      this.products = response;
      this.total = this.products
        .map(item => item.price)
        .reduce((price, total) => price + total, 0);
    });
  }
}
