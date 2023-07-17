import { VerifyOtpToResetPasswordByEmailRes } from '@api/customer/gen/ts/customer/proto/customer/mobile/auth_email_pb';
import { dataVerifyOtpToResetPasswordByEmail } from '../data/verifyOtpToResetPasswordByEmail';
import { verifyOtpToResetPasswordByEmail } from '../../../web/auth_email/services/authEmail';

let data = {
  otp: '',
  email: '',
  partnershipId: '',
};

describe('Customer - Verify Otp To Reset Password By Email - Happy Scenarios', () => {
  it('Verify Verify Otp To Reset Password By Email Successfull', () => {
    data.email = dataVerifyOtpToResetPasswordByEmail.email.correct;
    data.otp = dataVerifyOtpToResetPasswordByEmail.otp.correct;
    data.partnershipId =
      dataVerifyOtpToResetPasswordByEmail.partnershipId.correct;

    cy.wrap(verifyOtpToResetPasswordByEmail(data, {}).catch((err) => err)).then(
      (res: VerifyOtpToResetPasswordByEmailRes.AsObject) => {
        cy.wrap(res.accessToken).as('Access Token');
        expect(res.accessToken).not.to.be.empty;
      }
    );
  });
});

describe('Customer - Verify Otp To Reset Password By Email - Unhappy Scenarios', () => {
  describe('Customer - Verify Otp To Reset Password By Email - Relate to Type', () => {
    it('Verify Verify Otp To Reset Password By Email Failed when Type is verify email', () => {
      data.email = dataVerifyOtpToResetPasswordByEmail.email.correct;
      data.otp = dataVerifyOtpToResetPasswordByEmail.otp.typeVerifyEmail;
      data.partnershipId =
        dataVerifyOtpToResetPasswordByEmail.partnershipId.correct;

      cy.wrap(
        verifyOtpToResetPasswordByEmail(data, {}).catch((err) => err)
      ).then((res: VerifyOtpToResetPasswordByEmailRes.AsObject) => {
        expect(res.message).to.equal(
          'Mã xác minh không đúng, vui lòng kiểm tra lại'
        );
      });
    });
  });

  describe('Customer - Verify Otp To Reset Password By Email - Relate to OTP', () => {
    it('Verify Verify Otp To Reset Password By Email Failed when OTP incorrect', () => {
      data.email = dataVerifyOtpToResetPasswordByEmail.email.correct;
      data.otp = dataVerifyOtpToResetPasswordByEmail.otp.incorrect;
      data.partnershipId =
        dataVerifyOtpToResetPasswordByEmail.partnershipId.correct;

      cy.wrap(
        verifyOtpToResetPasswordByEmail(data, {}).catch((err) => err)
      ).then((res: VerifyOtpToResetPasswordByEmailRes.AsObject) => {
        expect(res.message).to.equal(
          'Mã xác minh không đúng, vui lòng kiểm tra lại'
        );
      });
    });
    it('Verify Verify Otp To Reset Password By Email Failed when OTP expired', () => {
      data.email = dataVerifyOtpToResetPasswordByEmail.email.correct;
      data.otp = dataVerifyOtpToResetPasswordByEmail.otp.expired;
      data.partnershipId =
        dataVerifyOtpToResetPasswordByEmail.partnershipId.correct;

      cy.wrap(
        verifyOtpToResetPasswordByEmail(data, {}).catch((err) => err)
      ).then((res: VerifyOtpToResetPasswordByEmailRes.AsObject) => {
        expect(res.message).to.equal(
          'Mã xác minh không đúng, vui lòng kiểm tra lại'
        );
      });
    });
    it('Verify Verify Otp To Reset Password By Email Failed when OTP empty', () => {
      data.email = dataVerifyOtpToResetPasswordByEmail.email.correct;
      data.otp = dataVerifyOtpToResetPasswordByEmail.otp.empty;
      data.partnershipId =
        dataVerifyOtpToResetPasswordByEmail.partnershipId.correct;

      cy.wrap(
        verifyOtpToResetPasswordByEmail(data, {}).catch((err) => err)
      ).then((res: VerifyOtpToResetPasswordByEmailRes.AsObject) => {
        expect(res.message).to.equal('Trường OTP là bắt buộc');
      });
    });
  });
});
