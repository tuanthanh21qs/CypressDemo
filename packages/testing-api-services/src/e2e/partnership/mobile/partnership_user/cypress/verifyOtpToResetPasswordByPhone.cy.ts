import {
  VerifyOtpToResetPasswordByPhoneReq,
  VerifyOtpToResetPasswordByPhoneRes,
} from '@api/partnership/gen/ts/partnership/proto/partnership/mobile/partnership_user_pb';
import { verifyOtpToResetPasswordByPhone } from '../services/partnership_user';
import { dataVerifyOtpToResetPasswordByPhone } from '../data/verifyOtpToResetPasswordByPhone';

let data: VerifyOtpToResetPasswordByPhoneReq.AsObject = {
  phoneCode: '',
  phoneNumber: '',
  partnershipId: '',
  otp: '',
};

describe('Partnership User - Verify Otp To Reset Password By Phone', () => {
  it('Verify Verify Otp To Reset Password By Phone Successfull', () => {
    data.phoneCode = dataVerifyOtpToResetPasswordByPhone.phoneCode.correct;
    data.phoneNumber = dataVerifyOtpToResetPasswordByPhone.phoneNumber.correct;
    data.partnershipId =
      dataVerifyOtpToResetPasswordByPhone.partnershipId.correct;
    data.otp = dataVerifyOtpToResetPasswordByPhone.otp.correct;

    cy.wrap(verifyOtpToResetPasswordByPhone(data, {}).catch((err) => err)).then(
      (res: VerifyOtpToResetPasswordByPhoneRes.AsObject) => {
        cy.wrap(res.accessToken).as('Access Token');
        cy.wrap(res.expireTime).as('Expired Time');

        expect(res.accessToken).not.to.be.empty;
      }
    );
  });
  it('Verify Verify Otp To Reset Password By Phone Failed when Otp incorrect', () => {
    data.phoneCode = dataVerifyOtpToResetPasswordByPhone.phoneCode.correct;
    data.phoneNumber = dataVerifyOtpToResetPasswordByPhone.phoneNumber.correct;
    data.partnershipId =
      dataVerifyOtpToResetPasswordByPhone.partnershipId.correct;
    data.otp = dataVerifyOtpToResetPasswordByPhone.otp.incorrect;

    cy.wrap(verifyOtpToResetPasswordByPhone(data, {}).catch((err) => err)).then(
      (res: VerifyOtpToResetPasswordByPhoneRes.AsObject) => {
        expect(res.message).to.equal('OTP không đúng');
      }
    );
  });
  it('Verify Verify Otp To Reset Password By Phone Failed when Otp empty', () => {
    data.phoneCode = dataVerifyOtpToResetPasswordByPhone.phoneCode.correct;
    data.phoneNumber = dataVerifyOtpToResetPasswordByPhone.phoneNumber.correct;
    data.partnershipId =
      dataVerifyOtpToResetPasswordByPhone.partnershipId.correct;
    data.otp = dataVerifyOtpToResetPasswordByPhone.otp.empty;

    cy.wrap(verifyOtpToResetPasswordByPhone(data, {}).catch((err) => err)).then(
      (res: VerifyOtpToResetPasswordByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Trường OTP không được để trống');
      }
    );
  });
  it('Verify Verify Otp To Reset Password By Phone Failed when Otp expired', () => {
    data.phoneCode = dataVerifyOtpToResetPasswordByPhone.phoneCode.correct;
    data.phoneNumber = dataVerifyOtpToResetPasswordByPhone.phoneNumber.correct;
    data.partnershipId =
      dataVerifyOtpToResetPasswordByPhone.partnershipId.correct;
    data.otp = dataVerifyOtpToResetPasswordByPhone.otp.expired;

    cy.wrap(verifyOtpToResetPasswordByPhone(data, {}).catch((err) => err)).then(
      (res: VerifyOtpToResetPasswordByPhoneRes.AsObject) => {
        expect(res.message).to.equal('OTP đã hết hạn');
      }
    );
  });
  it('Verify Verify Otp To Reset Password By Phone Failed when Phone Number incorrect', () => {
    data.phoneCode = dataVerifyOtpToResetPasswordByPhone.phoneCode.correct;
    data.phoneNumber =
      dataVerifyOtpToResetPasswordByPhone.phoneNumber.incorrect;
    data.partnershipId =
      dataVerifyOtpToResetPasswordByPhone.partnershipId.correct;
    data.otp = dataVerifyOtpToResetPasswordByPhone.otp.correct;

    cy.wrap(verifyOtpToResetPasswordByPhone(data, {}).catch((err) => err)).then(
      (res: VerifyOtpToResetPasswordByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Số điện thoại không đúng');
      }
    );
  });
  it('Verify Verify Otp To Reset Password By Phone Failed when Phone Number empty', () => {
    data.phoneCode = dataVerifyOtpToResetPasswordByPhone.phoneCode.correct;
    data.phoneNumber = dataVerifyOtpToResetPasswordByPhone.phoneNumber.empty;
    data.partnershipId =
      dataVerifyOtpToResetPasswordByPhone.partnershipId.correct;
    data.otp = dataVerifyOtpToResetPasswordByPhone.otp.correct;

    cy.wrap(verifyOtpToResetPasswordByPhone(data, {}).catch((err) => err)).then(
      (res: VerifyOtpToResetPasswordByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Trường số điện thoại không được trống');
      }
    );
  });
});
