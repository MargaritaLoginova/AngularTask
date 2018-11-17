import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public _products = [];
  public _selectedProducts = [];
  public _showOrder: boolean = false;

  constructor(private http: HttpClient) {
    this.initProducts();
    console.log(this._products);
    // this._products = this.getProducts();
    debugger
  }

  private getProducts(): any {
    let data = [];
    this.http.get('https://ssdev.superagent.ru/TestApp/Values/GetParents')
      .subscribe(resp => {
        data.push(resp);
        return data;
      });
  }

  private initProducts(): void {
    this._products = [
      {
        isSelected: false,
        group: 'Group1',
        name: 'Pr_1',
        price: 123
      },
      {
        isSelected: false,
        group: 'Group2',
        name: 'Pr_2',
        price: 343
      },
      {
        isSelected: false,
        group: 'Group3',
        name: 'Pr_3',
        price: 234
      }
    ];
  }

  public _isSelect(product: any, value: boolean): void {
    product.isSelected = value;
  }

  public _click(): void {
    let newProductList = [],
        selectedProducts = this._selectedProducts;

    this._showOrder = true;
    this._products.forEach(function (product) {
      if (!product.isSelected)
        newProductList.push(product);
      else
        selectedProducts.push(product)
    });

    this._products = newProductList;
    this._selectedProducts = selectedProducts;
  }
}
