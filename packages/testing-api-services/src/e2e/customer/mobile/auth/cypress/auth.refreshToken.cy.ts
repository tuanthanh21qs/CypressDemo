import { RefreshTokenRes } from '@api/customer/gen/ts/customer/proto/customer/mobile/auth_pb';
import { refreshToken } from '../services/auth';

describe('Customer - Refresh Token - Relate to Relate', () => {
  it('Verify Customer Get Access Token Successfull when Refersh Token correct', () => {
    cy.fixture('customerAuthService.refreshToken.json').then((dataJson) => {
      const data = { refreshToken: dataJson.refreshToken.correct };
      cy.wrap(refreshToken(data, {}).catch((err) => err)).then(
        (res: RefreshTokenRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Get Access Token Failed when Refersh Token incorrect', () => {
    cy.fixture('customerAuthService.refreshToken.json').then((dataJson) => {
      const data = { refreshToken: dataJson.refreshToken.incorrect };
      cy.wrap(refreshToken(data, {}).catch((err) => err)).then(
        (res: RefreshTokenRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.message).to.equal('Đã xảy ra lỗi');
        }
      );
    });
  });
  it('Verify Customer Get Access Token Failed when Refersh Token expired', () => {
    cy.fixture('customerAuthService.refreshToken.json').then((dataJson) => {
      const data = { refreshToken: dataJson.refreshToken.expired };
      cy.wrap(refreshToken(data, {}).catch((err) => err)).then(
        (res: RefreshTokenRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.message).to.equal('');
        }
      );
    });
  });
  it('Verify Customer Get Access Token Failed when Refersh Token empty', () => {
    cy.fixture('customerAuthService.refreshToken.json').then((dataJson) => {
      const data = { refreshToken: dataJson.refreshToken.empty };
      cy.wrap(refreshToken(data, {}).catch((err) => err)).then(
        (res: RefreshTokenRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.message).to.equal('Token không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Get Access Token Failed when Refersh Token null', () => {
    cy.fixture('customerAuthService.refreshToken.json').then((dataJson) => {
      const data = { refreshToken: dataJson.refreshToken.null };
      cy.wrap(refreshToken(data, {}).catch((err) => err)).then(
        (res: RefreshTokenRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.message).to.equal('Token không hợp lệ');
        }
      );
    });
  });
});
