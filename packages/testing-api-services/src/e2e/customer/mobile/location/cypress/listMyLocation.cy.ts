import {
  ListMyLocationReq,
  ListMyLocationRes,
} from '@api/customer/gen/ts/customer/proto/customer/mobile/location_pb';
import { dataJson } from '../data/listMyLocation';
import { listMyLocation } from '../services/location';

let token = dataJson.token.correct;
let data: ListMyLocationReq.AsObject = {
  orderByList: [{ desc: dataJson.desc, field: dataJson.field }],
  pagination: {
    pageNumber: 1,
    pageLimit: 99,
  },
  searchText: '',
};

describe('Customer - Get List User - Successfull Case', () => {
  it('Get List User Successfull', () => {
    cy.wrap(listMyLocation(data, { token }).catch((err) => err)).then(
      (res: ListMyLocationRes.AsObject) => {
        cy.wrap(res).as('User List');
        expect(res).not.to.be.empty;
      }
    );
  });
});
