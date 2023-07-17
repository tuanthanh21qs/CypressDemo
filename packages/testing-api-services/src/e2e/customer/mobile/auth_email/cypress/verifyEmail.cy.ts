import { dataVerifyEmail } from '../data/verifyEmail';
import { verifyEmail } from '../../../web/auth_email/services/authEmail';
import { VerifyEmailReq } from '@api/customer/gen/ts/customer/proto/customer/mobile/auth_email_pb';

let token = '';
let data: VerifyEmailReq.AsObject = {
  email: '',
  partnershipId: '',
  otp: '',
};

describe('Customer - Verify Email - Happy Scenarios', () => {
  it('Verify Verify Email Successfull when Otp correct', () => {
    token = dataVerifyEmail.token.correct;

    data.email = dataVerifyEmail.email.correct;
    data.partnershipId = dataVerifyEmail.partnershipId.correct;
    data.otp = dataVerifyEmail.otp.correct;

    cy.wrap(verifyEmail(data, { token }).catch((err) => err)).then((res) => {
      expect(res).to.be.empty;
    });
  });
});

describe('Customer - Verify Email - Unhappy Scenarios', () => {
  describe('Customer - Verify Email - Relate to Type', () => {
    it('Verify Verify Otp To Reset Password By Email Failed when Type is reset password', () => {
      token = dataVerifyEmail.token.correct;

      data.email = dataVerifyEmail.email.correct;
      data.partnershipId = dataVerifyEmail.partnershipId.correct;
      data.otp = dataVerifyEmail.otp.typeResetPassword;

      cy.wrap(verifyEmail(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal(
          'Mã xác minh không đúng, vui lòng kiểm tra lại'
        );
      });
    });
  });
  describe('Customer - Verify Email - Relate to Otp', () => {
    it('Verify Verify Email Failed when Otp incorrect', () => {
      token = dataVerifyEmail.token.correct;

      data.email = dataVerifyEmail.email.correct;
      data.partnershipId = dataVerifyEmail.partnershipId.correct;
      data.otp = dataVerifyEmail.otp.incorrect;

      cy.wrap(verifyEmail(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal(
          'Mã xác minh không đúng, vui lòng kiểm tra lại'
        );
      });
    });
    it('Verify Verify Email Failed when Otp expired', () => {
      token = dataVerifyEmail.token.correct;

      data.email = dataVerifyEmail.email.correct;
      data.partnershipId = dataVerifyEmail.partnershipId.correct;
      data.otp = dataVerifyEmail.otp.expired;

      cy.wrap(verifyEmail(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal(
          'Mã xác minh không đúng, vui lòng kiểm tra lại'
        );
      });
    });
    it('Verify Verify Email Failed when Otp empty', () => {
      token = dataVerifyEmail.token.correct;

      data.email = dataVerifyEmail.email.correct;
      data.partnershipId = dataVerifyEmail.partnershipId.correct;
      data.otp = dataVerifyEmail.otp.empty;

      cy.wrap(verifyEmail(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Trường OTP là bắt buộc');
      });
    });
  });
  describe('Customer - Verify Email - Relate to Token', () => {
    it('Verify Verify Email Failed when token incorrect', () => {
      token = dataVerifyEmail.token.incorrect;

      data.email = dataVerifyEmail.email.correct;
      data.partnershipId = dataVerifyEmail.partnershipId.correct;
      data.otp = dataVerifyEmail.otp.correct;

      cy.wrap(verifyEmail(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('signature is invalid');
      });
    });
    it('Verify Verify Email Failed when token expired', () => {
      token = dataVerifyEmail.token.expired;

      data.email = dataVerifyEmail.email.correct;
      data.partnershipId = dataVerifyEmail.partnershipId.correct;
      data.otp = dataVerifyEmail.otp.correct;

      cy.wrap(verifyEmail(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('signature is invalid');
      });
    });
    it('Verify Verify Email Failed when token empty', () => {
      token = dataVerifyEmail.token.empty;

      data.email = dataVerifyEmail.email.correct;
      data.partnershipId = dataVerifyEmail.partnershipId.correct;
      data.otp = dataVerifyEmail.otp.correct;

      cy.wrap(verifyEmail(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal(
          'token contains an invalid number of segments'
        );
      });
    });
  });
});
