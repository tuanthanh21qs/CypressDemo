import {
  CreateMyLocationReq,
  CreateMyLocationRes,
} from '@api/customer/gen/ts/customer/proto/customer/mobile/location_pb';
import { dataJson } from '../data/createMyLocation';
import { createMyLocation } from '../services/location';

let token = dataJson.token.correct;
let data: CreateMyLocationReq.AsObject = {
  info: {
    name: 'NNTT',
    description: 'NNTTNTTNN',
    coordinates: {
      lat: 3,
      pb_long: 2,
    },
    unit: '1',
    number: '2',
    street: '3',
    ward: '4',
    district: '',
    city: '',
    region: '',
    country: '',
    postalCode: '',
    fullAddress: '',
    suburban: '',
    userFullName: 'nGÔ NGỌC ',
    userPhoneCode: '84',
    userPhoneNumber: '1276547635',
  },
};

describe('Customer - Create My Location', () => {
  it('Verify Create My Location Successfull', () => {
    cy.wrap(createMyLocation(data, { token }).catch((err) => err)).then(
      (res: CreateMyLocationRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
});
