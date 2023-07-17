import { IsPhoneNumberIsVerifiedRes } from '@api/customer/gen/ts/customer/proto/customer/mobile/auth_phone_pb';
import { isPhoneNumberIsVerified } from '../services/authPhone';
import { dataJson } from '../data/isPhoneNumberIsVerified';

let token = '';

describe('Customer - Is Phone Number Is Verified', () => {
  it('Verify Phone Number is verified', () => {
    token = dataJson.token.isVerified;
    cy.wrap(isPhoneNumberIsVerified({}, { token }).catch((err) => err)).then(
      (res: IsPhoneNumberIsVerifiedRes.AsObject) => {
        expect(res.result).to.be.true;
      }
    );
  });
  it('Verify Phone Number is not verified', () => {
    token = dataJson.token.isNotVerified;
    cy.wrap(isPhoneNumberIsVerified({}, { token }).catch((err) => err)).then(
      (res: IsPhoneNumberIsVerifiedRes.AsObject) => {
        expect(res.result).to.be.false;
      }
    );
  });
  it('Verify Phone Number when token incorrect', () => {
    token = dataJson.token.incorrect;
    cy.wrap(isPhoneNumberIsVerified({}, { token }).catch((err) => err)).then(
      (res: IsPhoneNumberIsVerifiedRes.AsObject) => {
        expect(res.message).to.equal('signature is invalid');
      }
    );
  });
  it('Verify Phone Number when token expired', () => {
    token = dataJson.token.expired;
    cy.wrap(isPhoneNumberIsVerified({}, { token }).catch((err) => err)).then(
      (res: IsPhoneNumberIsVerifiedRes.AsObject) => {
        expect(res.message).to.equal('signature is invalid');
      }
    );
  });
});
