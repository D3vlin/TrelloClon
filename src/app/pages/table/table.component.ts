import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {
  products: Product[] = [];

  columns: string[] = ['id', 'title', 'price', 'cover']

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(response => {
      this.products = response;
    });
  }
}
