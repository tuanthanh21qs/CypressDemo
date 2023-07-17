import {
  RetrieveMyLocationReq,
  RetrieveMyLocationRes,
} from '@api/customer/gen/ts/customer/proto/customer/web/location_pb';
import { dataRetrieveMyLocation } from '../data/retrieveMyLocation';
import { retrieveMyLocation } from '../services/location';

let token = dataRetrieveMyLocation.token.correct;
let data: RetrieveMyLocationReq.AsObject = {
  id: '643e5e85bfeaa8b1c3b14222',
};

describe('Customer - Retrieve My Location', () => {
  it('Verify Retrieve My Location Successfull', () => {
    cy.wrap(retrieveMyLocation(data, { token }).catch((err) => err)).then(
      (res: RetrieveMyLocationRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
});
