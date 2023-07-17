import {
  RefreshTokenRes,
  RefreshTokenReq,
} from '@api/partnership/gen/ts/partnership/proto/partnership/web/auth_pb';
import { refreshToken } from '../services/auth';
import { dataRefreshToken } from '../data/refreshToken';

let data: RefreshTokenReq.AsObject = {
  refreshToken: '',
};
describe('Partnership - Refresh Token', () => {
  it('Verify Refresh Token Successfull', () => {
    data.refreshToken = dataRefreshToken.refreshToken.correct;

    cy.wrap(refreshToken(data).catch((err) => err)).then(
      (res: RefreshTokenRes.AsObject) => {
        cy.wrap(res.accessToken).as('Access Token');
        cy.wrap(res.refreshToken).as('Refresh Token');
        cy.wrap(res.expireTime).as('Expired Time');

        expect(res.accessToken).not.to.be.empty;
      }
    );
  });
  it('Verify Refresh Token Failed when refresh Token incorrect', () => {
    data.refreshToken = dataRefreshToken.refreshToken.incorrect;

    cy.wrap(refreshToken(data).catch((err) => err)).then(
      (res: RefreshTokenRes.AsObject) => {
        expect(res.message).to.equal('');
      }
    );
  });
  it('Verify Refresh Token Failed when refresh Token expired', () => {
    data.refreshToken = dataRefreshToken.refreshToken.expired;

    cy.wrap(refreshToken(data).catch((err) => err)).then(
      (res: RefreshTokenRes.AsObject) => {
        expect(res.message).to.equal('');
      }
    );
  });
  it('Verify Refresh Token Failed when refresh Token empty', () => {
    data.refreshToken = dataRefreshToken.refreshToken.empty;

    cy.wrap(refreshToken(data).catch((err) => err)).then(
      (res: RefreshTokenRes.AsObject) => {
        expect(res.message).to.equal('');
      }
    );
  });
});
