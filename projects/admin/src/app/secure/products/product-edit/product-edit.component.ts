import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "common";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  product: Product;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      description: '',
      image: '',
      price: ''
    });

    this.route.params.subscribe(
      params => {
        this.productService.get(params.id).subscribe(
          (res: any) => {
            this.product = res.data;
            this.form.patchValue(this.product);
          }
        )
      }
    )
  }

  submit() {
    const data = this.form.getRawValue();

    this.productService.update(this.product.id, data).subscribe(
      res => {
        this.router.navigate(['/products']);
      }
    )
  }
}
