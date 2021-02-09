import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LinkService} from "../services/link.service";
import {Product, User} from "common";
import {FormBuilder, FormGroup} from "@angular/forms";
import {OrderService} from "../services/order.service";
import {environment} from "../../environments/environment";

declare var Stripe;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  code = '';
  user: User;
  products: Product[];
  quantities = [];
  form: FormGroup;
  stripe;

  constructor(
    private route: ActivatedRoute,
    private linkService: LinkService,
    private formBuilder: FormBuilder,
    private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    this.code = this.route.snapshot.params.code;

    this.stripe = new Stripe(environment.stripe_key);

    this.form = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
      address: '',
      address2: '',
      country: '',
      city: '',
      zip: '',
    });

    this.linkService.get(this.code).subscribe(
      (res: any) => {
        this.user = res.data.user;
        this.products = res.data.products;
        this.products.forEach(p => {
          this.quantities[p.id] = 0;
        });
      }
    );
  }

  total() {
    let total = 0;

    this.products.forEach(p => {
      total += p.price * this.quantities[p.id]
    });

    return total;
  }

  submit() {
    const data = this.form.getRawValue();

    data['code'] = this.code;
    data['items'] = this.products.map(p => {
      return {
        product_id: p.id,
        quantity: this.quantities[p.id]
      }
    }).filter(p => p.quantity !== 0);

    this.orderService.create(data).subscribe(
      (res: any) => {
        this.stripe.redirectToCheckout({
          sessionId: res.id
        });
      }
    );
  }
}
