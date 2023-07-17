import { RefreshTokenRes } from '@api/partnership/gen/ts/partnership/proto/partnership/mobile/auth_pb';
import { refreshToken } from '../services/auth';
import { dataRefreshToken } from '../data/refreshToken';

let data = { refreshToken: '' };

describe('Partnership - Web - Refresh Token', () => {
  it('Verify Refresh Token Successfull', () => {
    data.refreshToken = dataRefreshToken.refreshToken.correct;
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
    data.refreshToken = dataRefreshToken.refreshToken.incorrect;
    cy.wrap(refreshToken(data, {}).catch((err) => err)).then(
      (res: RefreshTokenRes.AsObject) => {
        expect(res.message).to.equal('Refresh token không đúng');
      }
    );
  });
  it('Verify Refresh Token Failed when Refresh Token expired', () => {
    data.refreshToken = dataRefreshToken.refreshToken.expired;
    cy.wrap(refreshToken(data, {}).catch((err) => err)).then(
      (res: RefreshTokenRes.AsObject) => {
        expect(res.message).to.equal('Refresh token đã hết hạn');
      }
    );
  });
  it('Verify Refresh Token Failed when Refresh Token empty', () => {
    data.refreshToken = dataRefreshToken.refreshToken.empty;
    cy.wrap(refreshToken(data, {}).catch((err) => err)).then(
      (res: RefreshTokenRes.AsObject) => {
        expect(res.message).to.equal('Refresh token không hợp lệ');
      }
    );
  });
});
