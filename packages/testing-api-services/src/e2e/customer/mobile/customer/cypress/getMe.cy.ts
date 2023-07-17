import { GetMeRes } from '@api/customer/gen/ts/customer/proto/customer/mobile/customer_pb';
import { dataJson } from '../data/getMe';
import { getMe } from '../services/customer';

let token = dataJson.token.correct;

describe('Customer - Get Me - Successfull Case', () => {
  it('Verify Get Me Successfull', () => {
    cy.wrap(getMe({}, { token }).catch((err) => err)).then(
      (res: GetMeRes.AsObject) => {
        cy.wrap(res.userInfo).as('User Info');
        expect(res).not.to.be.empty;
      }
    );
  });
});

describe('Customer - Get Me - Failed Case', () => {
  it('Verify Get Me Failed when token incorrect', () => {
    token = dataJson.token.incorrect;
    cy.wrap(getMe({}, { token }).catch((err) => err)).then(
      (res: GetMeRes.AsObject) => {
        expect(res.message).to.equal('signature is invalid');
      }
    );
  });
  it('Verify Get Me Failed when token expired', () => {
    token = dataJson.token.expired;
    cy.wrap(getMe({}, { token }).catch((err) => err)).then(
      (res: GetMeRes.AsObject) => {
        expect(res.message).to.equal('signature is invalid');
      }
    );
  });
  it('Verify Get Me Failed when token empty', () => {
    token = dataJson.token.empty;
    cy.wrap(getMe({}, { token }).catch((err) => err)).then(
      (res: GetMeRes.AsObject) => {
        expect(res.message).to.equal(
          'token contains an invalid number of segments'
        );
      }
    );
  });
});
