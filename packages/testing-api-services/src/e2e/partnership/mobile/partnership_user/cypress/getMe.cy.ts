import { GetMeRes } from '@api/partnership/gen/ts/partnership/proto/partnership/mobile/partnership_user_pb';
import { dataGetMe } from '../data/getMe';
import { getMe } from '../services/partnership_user';

let token = '';

describe('Partnership - Get Me - Successfull Case', () => {
  it.only('Verify Get Me Successfull', () => {
    token = dataGetMe.token.correct;

    cy.wrap(getMe({}, { token }).catch((err) => err)).then(
      (res: GetMeRes.AsObject) => {
        cy.wrap(res.userInfo).as('User Info');
        expect(res).not.to.be.empty;
      }
    );
  });
});

describe('Partnership - Get Me - Failed Case', () => {
  it('Verify Get Me Failed when token incorrect', () => {
    token = dataGetMe.token.incorrect;

    cy.wrap(getMe({}, { token }).catch((err) => err)).then(
      (res: GetMeRes.AsObject) => {
        expect(res.message).to.equal('signature is invalid');
      }
    );
  });
  it('Verify Get Me Failed when token expired', () => {
    token = dataGetMe.token.expired;

    cy.wrap(getMe({}, { token }).catch((err) => err)).then(
      (res: GetMeRes.AsObject) => {
        expect(res.message).to.equal('signature is invalid');
      }
    );
  });
  it('Verify Get Me Failed when token empty', () => {
    token = dataGetMe.token.empty;

    cy.wrap(getMe({}, { token }).catch((err) => err)).then(
      (res: GetMeRes.AsObject) => {
        expect(res.message).to.equal(
          'token contains an invalid number of segments'
        );
      }
    );
  });
});
