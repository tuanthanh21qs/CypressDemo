import { verifyPhoneNumber } from '../services/authPhone';
import { dataVerifyPhoneNumber } from '../data/verifyPhoneNumber';

let token = '';

let data = {
  phoneCode: '',
  phoneNumber: '',
  partnershipId: '',
  otp: '',
};

describe('Customer - Verify Phone Number - Successfull Case', () => {
  it('Verify Verify Phone Number Successfull', () => {
    token = dataVerifyPhoneNumber.token.correct;

    data.phoneCode = dataVerifyPhoneNumber.phoneCode.correct;
    data.phoneNumber = dataVerifyPhoneNumber.phoneNumber.correct;
    data.partnershipId = dataVerifyPhoneNumber.partnershipId.correct;
    data.otp = dataVerifyPhoneNumber.otp.correct;

    cy.wrap(verifyPhoneNumber(data, { token }).catch((err) => err)).then(
      (res) => {
        expect(res).to.be.empty;
      }
    );
  });
});

describe('Customer - Verify Phone Number - Failed Case', () => {
  describe('Customer - Verify Phone Number - Relate to OTP', () => {
    it('Verify Verify Phone Number Failed when OTP incorrect', () => {
      token = dataVerifyPhoneNumber.token.correct;

      data.phoneCode = dataVerifyPhoneNumber.phoneCode.correct;
      data.phoneNumber = dataVerifyPhoneNumber.phoneNumber.correct;
      data.partnershipId = dataVerifyPhoneNumber.partnershipId.correct;
      data.otp = dataVerifyPhoneNumber.otp.incorrect;

      cy.wrap(verifyPhoneNumber(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal('OTP sai');
        }
      );
    });
    it('Verify Verify Phone Number Failed when OTP expired', () => {
      token = dataVerifyPhoneNumber.token.correct;

      data.phoneCode = dataVerifyPhoneNumber.phoneCode.correct;
      data.phoneNumber = dataVerifyPhoneNumber.phoneNumber.correct;
      data.partnershipId = dataVerifyPhoneNumber.partnershipId.correct;
      data.otp = dataVerifyPhoneNumber.otp.expired;

      cy.wrap(verifyPhoneNumber(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal('OTP đã hết hạn sử dụng');
        }
      );
    });
    it('Verify Verify Phone Number Failed when OTP empty', () => {
      token = dataVerifyPhoneNumber.token.correct;

      data.phoneCode = dataVerifyPhoneNumber.phoneCode.correct;
      data.phoneNumber = dataVerifyPhoneNumber.phoneNumber.correct;
      data.partnershipId = dataVerifyPhoneNumber.partnershipId.correct;
      data.otp = dataVerifyPhoneNumber.otp.empty;

      cy.wrap(verifyPhoneNumber(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal('OTP không được để trống');
        }
      );
    });
  });
  describe('Customer - Verify Phone Number - Relate to Type', () => {
    it('Verify Verify Phone Number Failed when Type is Phone Reset Password', () => {
      token = dataVerifyPhoneNumber.token.correct;

      data.phoneCode = dataVerifyPhoneNumber.phoneCode.correct;
      data.phoneNumber = dataVerifyPhoneNumber.phoneNumber.correct;
      data.partnershipId = dataVerifyPhoneNumber.partnershipId.correct;
      data.otp = dataVerifyPhoneNumber.otp.typeIsPhoneResetPassword;

      cy.wrap(verifyPhoneNumber(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal('OTP không chính xác');
        }
      );
    });
    it('Verify Verify Phone Number Failed when Type is Phone Login', () => {
      token = dataVerifyPhoneNumber.token.correct;

      data.phoneCode = dataVerifyPhoneNumber.phoneCode.correct;
      data.phoneNumber = dataVerifyPhoneNumber.phoneNumber.correct;
      data.partnershipId = dataVerifyPhoneNumber.partnershipId.correct;
      data.otp = dataVerifyPhoneNumber.otp.typeIsPhoneLogin;

      cy.wrap(verifyPhoneNumber(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal('OTP không chính xác');
        }
      );
    });
  });
  describe('Customer - Verify Phone Number - Relate to token', () => {
    it('Verify Verify Phone Number Failed when Token incorrect', () => {
      token = dataVerifyPhoneNumber.token.incorrect;

      data.phoneCode = dataVerifyPhoneNumber.phoneCode.correct;
      data.phoneNumber = dataVerifyPhoneNumber.phoneNumber.correct;
      data.partnershipId = dataVerifyPhoneNumber.partnershipId.correct;
      data.otp = dataVerifyPhoneNumber.otp.correct;
      cy.wrap(verifyPhoneNumber(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal('signature is invalid');
        }
      );
    });
    it('Verify Verify Phone Number Failed when Token expired', () => {
      token = dataVerifyPhoneNumber.token.expired;

      data.phoneCode = dataVerifyPhoneNumber.phoneCode.correct;
      data.phoneNumber = dataVerifyPhoneNumber.phoneNumber.correct;
      data.partnershipId = dataVerifyPhoneNumber.partnershipId.correct;
      data.otp = dataVerifyPhoneNumber.otp.correct;
      cy.wrap(verifyPhoneNumber(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal('signature is invalid');
        }
      );
    });
    it('Verify Verify Phone Number Failed when Token empty', () => {
      token = dataVerifyPhoneNumber.token.empty;

      data.phoneCode = dataVerifyPhoneNumber.phoneCode.correct;
      data.phoneNumber = dataVerifyPhoneNumber.phoneNumber.correct;
      data.partnershipId = dataVerifyPhoneNumber.partnershipId.correct;
      data.otp = dataVerifyPhoneNumber.otp.correct;
      cy.wrap(verifyPhoneNumber(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal(
            'token contains an invalid number of segments'
          );
        }
      );
    });
  });
});
