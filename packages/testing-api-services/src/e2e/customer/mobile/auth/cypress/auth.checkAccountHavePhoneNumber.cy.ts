import { checkAccountHavePhoneNumber } from '../services/auth';
import { dataCheckAccountHavePhone } from '../data/checkAccountHavePhone';
import { CheckAccountHavePhoneNumberRes } from '@api/customer/gen/ts/customer/proto/customer/mobile/auth_pb';

let token = '';

describe('Customer - Check Account Have Phone Number - Happy Scenarios', () => {
  it('Verify Check Account Have Phone Number Successfull when account have phone number', () => {
    token = dataCheckAccountHavePhone.token.havePhoneNumber;
    cy.wrap(
      checkAccountHavePhoneNumber({}, { token }).catch((err) => err)
    ).then((res: CheckAccountHavePhoneNumberRes.AsObject) => {
      expect(res.havePhoneNumber).to.true;
    });
  });
  it('Verify Check Account Have Phone Number Successfull when account have not phone number', () => {
    token = dataCheckAccountHavePhone.token.notHavePhoneNumber;
    cy.wrap(
      checkAccountHavePhoneNumber({}, { token }).catch((err) => err)
    ).then((res: CheckAccountHavePhoneNumberRes.AsObject) => {
      expect(res.havePhoneNumber).to.false;
    });
  });
});

describe('Customer - Check Account Have Phone Number - Unhappy Scenarios', () => {
  it('Check Account Have Phone Number Failed when token incorrect', () => {
    token = dataCheckAccountHavePhone.token.incorrect;
    cy.wrap(
      checkAccountHavePhoneNumber({}, { token }).catch((err) => err)
    ).then((res) => {
      expect(res.message).to.equal('signature is invalid');
    });
  });
  it('Check Account Have Phone Number Failed when token expired', () => {
    token = dataCheckAccountHavePhone.token.expired;
    cy.wrap(
      checkAccountHavePhoneNumber({}, { token }).catch((err) => err)
    ).then((res) => {
      expect(res.message).to.equal('signature is invalid');
    });
  });
  it('Check Account Have Phone Number Failed when token empty', () => {
    token = dataCheckAccountHavePhone.token.empty;
    cy.wrap(
      checkAccountHavePhoneNumber({}, { token }).catch((err) => err)
    ).then((res) => {
      expect(res.message).to.equal(
        'token contains an invalid number of segments'
      );
    });
  });
});
