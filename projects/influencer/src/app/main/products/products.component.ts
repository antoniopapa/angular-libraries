import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {LinkService} from "../../services/link.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = [];
  selected = [];
  link = '';
  error = false;

  constructor(
    private productService: ProductService,
    protected linkService: LinkService
  ) {
  }

  ngOnInit(): void {
    this.productService.all().subscribe(
      (res: any) => {
        this.products = res.data;
      }
    )
  }

  search(s: string) {
    this.productService.all({
      s: s
    }).subscribe(
      (res: any) => {
        this.products = res.data;
      }
    )
  }

  addProduct(p) {
    if (this.selected.filter(s => s === p.id).length === 0) {
      this.selected.push(p.id);
      return;
    }

    this.selected = this.selected.filter(s => s !== p.id);
  }

  isSelected(p) {
    return this.selected.filter(s => s === p.id).length !== 0;
  }

  generate() {
    const data = {
      products: this.selected
    }

    this.linkService.create(data).subscribe(
      (res: any) => {
        this.link = `${environment.checkout_url}/${res.data.code}`;
      },
      err => {
        this.error = true;
      }
    );
  }
}
