import {Apollo, gql} from 'apollo-angular';
import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';


const MainQuery = gql`
  query categories {
  categories {
    _id
    name
    products {
      _id
      name
      createdAt
      image {
        _id
        contentUrl
      }
      offers {
        _id
        price
        priceCurrency
        availability
      }
    }
  }
}
`;


const TestMutation = gql`
mutation testMutation {
  createProduct(input: {name: "mut", category: "/categories/1"}) {
    product {
      _id
    }
  }
}
`;

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    data$: Observable<any>;

    constructor(private apollo: Apollo) {
    }

    ngOnInit() {
        this.data$ = this.apollo.watchQuery({query: MainQuery}).valueChanges;
    }
}
