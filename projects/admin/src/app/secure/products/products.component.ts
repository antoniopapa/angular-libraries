import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Auth} from "../../classes/auth";
import {Product} from "common";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  lastPage: number;

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(currentPage = 1) {
    this.productService.all({page: currentPage}).subscribe(
      (res: any) => {
        this.products = res.data;
        this.lastPage = res.meta.last_page;
      }
    )
  }

  delete(id: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.productService.delete(id).subscribe(
        res => {
          this.products = this.products.filter(el => el.id !== id);
        }
      );
    }
  }

  canAccess(permissions) {
    return Auth.canAccess(permissions);
  }
}
