import { RefreshTokenRes } from '@api/customer/gen/ts/customer/proto/customer/web/auth_pb';
import { refreshToken } from '../services/auth.services';
import { dataJson } from '../data/refreshToken';

let data = { refreshToken: '' };

describe('Customer - Web - Refresh Token', () => {
  it('Verify Refresh Token Successfull', () => {
    data.refreshToken = dataJson.refreshToken.correct;
    cy.wrap(refreshToken(data, {}).catch((err) => err)).then(
      (res: RefreshTokenRes.AsObject) => {
        cy.wrap(res.accessToken).as('Access Token');
        cy.wrap(res.refreshToken).as('Refresh Token');
        cy.wrap(res.expireTime).as('Expired Time');

        expect(res.accessToken).not.to.be.empty;
      }
    );
  });
  it('Verify Refresh Token Failed when Refresh Token incorrect', () => {
    data.refreshToken = dataJson.refreshToken.incorrect;
    cy.wrap(refreshToken(data, {}).catch((err) => err)).then(
      (res: RefreshTokenRes.AsObject) => {
        expect(res.message).to.equal('Refresh token đã hết hạn');
      }
    );
  });
  it('Verify Refresh Token Failed when Refresh Token expired', () => {
    data.refreshToken = dataJson.refreshToken.expired;
    cy.wrap(refreshToken(data, {}).catch((err) => err)).then(
      (res: RefreshTokenRes.AsObject) => {
        expect(res.message).to.equal('Refresh token đã hết hạn');
      }
    );
  });
  it('Verify Refresh Token Failed when Refresh Token empty', () => {
    data.refreshToken = dataJson.refreshToken.empty;
    cy.wrap(refreshToken(data, {}).catch((err) => err)).then(
      (res: RefreshTokenRes.AsObject) => {
        expect(res.message).to.equal('Refresh token không hợp lệ');
      }
    );
  });
});
