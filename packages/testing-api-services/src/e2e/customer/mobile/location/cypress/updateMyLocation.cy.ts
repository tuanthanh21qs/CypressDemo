import { UpdateMyLocationReq } from '@api/customer/gen/ts/customer/proto/customer/mobile/location_pb';
import { dataJson } from '../data/updateMyLocation';
import { updateMyLocation } from '../services/location';

let token = dataJson.token.correct;
let data: UpdateMyLocationReq.AsObject = {
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
    userPhoneCode: '123',
    userPhoneNumber: '4566666',
  },
  id: '643e5ef6bfeaa8b1c3b14224',
};

describe('Customer - Update My Location', () => {
  it('Verify Update My Location Successfull', () => {
    cy.wrap(updateMyLocation(data, { token }).catch((err) => err)).then(
      (res) => {
        expect(res).to.be.empty;
      }
    );
  });
});
