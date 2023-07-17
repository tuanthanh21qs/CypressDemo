import { VerifyOtpToResetPasswordByEmailRes } from '@api/customer/gen/ts/customer/proto/customer/web/auth_email_pb';
import { dataVerifyOtpToResetPasswordByEmail } from '../data/verifyOtpToResetPasswordByEmail';
import { verifyOtpToResetPasswordByEmail } from '../services/authEmail';

let data = {
  otp: '',
  email: '',
  partnershipId: '',
};

describe('Customer - Verify Otp To Reset Password By Email - Happy Scenarios', () => {
  it.only('Verify Verify Otp To Reset Password By Email Successfull', () => {
    data.otp = dataVerifyOtpToResetPasswordByEmail.otp.typeResetPassword;
    data.email = dataVerifyOtpToResetPasswordByEmail.email.correct;
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
      data.otp = dataVerifyOtpToResetPasswordByEmail.otp.typeVerifyEmail;
      data.email = dataVerifyOtpToResetPasswordByEmail.email.correct;
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
      data.otp = dataVerifyOtpToResetPasswordByEmail.otp.incorrect;
      data.email = dataVerifyOtpToResetPasswordByEmail.email.correct;
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
      data.otp = dataVerifyOtpToResetPasswordByEmail.otp.expired;
      data.email = dataVerifyOtpToResetPasswordByEmail.email.correct;
      data.partnershipId =
        dataVerifyOtpToResetPasswordByEmail.partnershipId.correct;

      cy.wrap(
        verifyOtpToResetPasswordByEmail(data, {}).catch((err) => err)
      ).then((res: VerifyOtpToResetPasswordByEmailRes.AsObject) => {
        expect(res.message).to.equal('Mã OTP đã quá hạn, vui lòng nhập mã mới');
      });
    });
    it('Verify Verify Otp To Reset Password By Email Failed when OTP empty', () => {
      data.otp = dataVerifyOtpToResetPasswordByEmail.otp.empty;
      data.email = dataVerifyOtpToResetPasswordByEmail.email.correct;
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
