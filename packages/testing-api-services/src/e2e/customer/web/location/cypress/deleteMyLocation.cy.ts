import { DeleteMyLocationReq } from '@api/customer/gen/ts/customer/proto/customer/web/location_pb';
import { dataDeleteMyLocation } from '../data/deleteMyLocation';
import { deleteMyLocation } from '../services/location';

let token = dataDeleteMyLocation.token.correct;
let data: DeleteMyLocationReq.AsObject = {
  id: '643e5e93bfeaa8b1c3b14223',
};

describe('Customer - Create My Location', () => {
  it('Verify Create My Location Successfull', () => {
    cy.wrap(deleteMyLocation(data, { token }).catch((err) => err)).then(
      (res) => {
        expect(res).to.be.empty;
      }
    );
  });
});
