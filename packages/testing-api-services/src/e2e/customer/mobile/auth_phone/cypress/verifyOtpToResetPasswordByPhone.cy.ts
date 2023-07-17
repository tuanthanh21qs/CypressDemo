import { verifyOtpToResetPasswordByPhone } from '../services/authPhone';
import { dataJson } from '../data/verifyOtpToResetPasswordByPhone';
import { VerifyOtpToResetPasswordByPhoneRes } from '@api/customer/gen/ts/customer/proto/customer/mobile/auth_phone_pb';

let data = {
  phoneCode: dataJson.phoneCode.correct,
  phoneNumber: dataJson.phoneNumber.correct,
  partnershipId: dataJson.partnershipId.correct,
  otp: dataJson.otp.correct,
};

describe('Customer - Verify OTP Reset Password By Phone Number - Successfull Case', () => {
  it('Verify Verify OTP To Reset Password By Phone Number Successfull', () => {
    cy.wrap(verifyOtpToResetPasswordByPhone(data).catch((err) => err)).then(
      (res: VerifyOtpToResetPasswordByPhoneRes.AsObject) => {
        cy.wrap(res.accessToken).as('accessToken');
        expect(res).not.to.be.empty;
      }
    );
  });
});

describe('Customer - Verify OTP Reset Password By Phone Number - Failed Case', () => {
  describe('Customer - Verify OTP Reset Password By Phone Number - Relate to OTP', () => {
    it('Verify Verify OTP Reset Password By Phone Number Failed when OTP incorrect', () => {
      data.otp = dataJson.otp.incorrect;
      cy.wrap(verifyOtpToResetPasswordByPhone(data).catch((err) => err)).then(
        (res: VerifyOtpToResetPasswordByPhoneRes.AsObject) => {
          expect(res.message).to.equal(
            'Mã xác minh không đúng, vui lòng kiểm tra lại'
          );
        }
      );
    });
    it('Verify Verify OTP Reset Password By Phone Number Failed when OTP expired', () => {
      data.otp = dataJson.otp.expired;
      cy.wrap(verifyOtpToResetPasswordByPhone(data).catch((err) => err)).then(
        (res: VerifyOtpToResetPasswordByPhoneRes.AsObject) => {
          expect(res.message).to.equal(
            'Mã OTP đã quá hạn, vui lòng nhập mã mới'
          );
        }
      );
    });
    it('Verify Verify OTP Reset Password By Phone Number Failed when OTP empty', () => {
      data.otp = dataJson.otp.empty;
      cy.wrap(verifyOtpToResetPasswordByPhone(data).catch((err) => err)).then(
        (res: VerifyOtpToResetPasswordByPhoneRes.AsObject) => {
          expect(res.message).to.equal('Trường OTP là bắt buộc');
        }
      );
    });
  });
  describe('Customer - Verify OTP Reset Password By Phone Number - Relate to Type', () => {
    it('Verify Verify OTP Reset Password By Phone Number Failed when Type is Verify Phone', () => {
      data.otp = dataJson.otp.typeIsVerifyPhone;
      cy.wrap(verifyOtpToResetPasswordByPhone(data).catch((err) => err)).then(
        (res: VerifyOtpToResetPasswordByPhoneRes.AsObject) => {
          expect(res.message).to.equal(
            'Mã xác minh không đúng, vui lòng kiểm tra lại'
          );
        }
      );
    });
    it('Verify Verify OTP Reset Password By Phone Number Failed when Type is Phone Login', () => {
      data.otp = dataJson.otp.typeIsPhoneLogin;
      cy.wrap(verifyOtpToResetPasswordByPhone(data).catch((err) => err)).then(
        (res: VerifyOtpToResetPasswordByPhoneRes.AsObject) => {
          expect(res.message).to.equal(
            'Mã xác minh không đúng, vui lòng kiểm tra lại'
          );
        }
      );
    });
  });
});
