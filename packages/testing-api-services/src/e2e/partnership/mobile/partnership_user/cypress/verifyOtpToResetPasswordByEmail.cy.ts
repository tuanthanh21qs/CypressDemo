import {
  VerifyOtpToResetPasswordByEmailReq,
  VerifyOtpToResetPasswordByEmailRes,
} from '@api/partnership/gen/ts/partnership/proto/partnership/mobile/partnership_user_pb';
import { verifyOtpToResetPasswordByEmail } from '../services/partnership_user';
import { dataVerifyOtpToResetPasswordByEmail } from '../data/verifyOtpToResetPasswordByEmail';

let data: VerifyOtpToResetPasswordByEmailReq.AsObject = {
  email: '',
  partnershipId: '',
  otp: '',
};

describe('Partnership User - Verify Otp To Reset Password By Email', () => {
  it('Verify Verify Otp To Reset Password By Email Successfull', () => {
    data.email = dataVerifyOtpToResetPasswordByEmail.email.correct;
    data.partnershipId =
      dataVerifyOtpToResetPasswordByEmail.partnershipId.correct;
    data.otp = dataVerifyOtpToResetPasswordByEmail.otp.correct;

    cy.wrap(verifyOtpToResetPasswordByEmail(data, {}).catch((err) => err)).then(
      (res: VerifyOtpToResetPasswordByEmailRes.AsObject) => {
        cy.wrap(res.accessToken).as('Access Token');
        cy.wrap(res.expireTime).as('Expired Time');

        expect(res.accessToken).not.to.be.empty;
      }
    );
  });
  it('Verify Verify Otp To Reset Password By Email Failed when Otp incorrect', () => {
    data.email = dataVerifyOtpToResetPasswordByEmail.email.correct;
    data.partnershipId =
      dataVerifyOtpToResetPasswordByEmail.partnershipId.correct;
    data.otp = dataVerifyOtpToResetPasswordByEmail.otp.incorrect;

    cy.wrap(verifyOtpToResetPasswordByEmail(data, {}).catch((err) => err)).then(
      (res: VerifyOtpToResetPasswordByEmailRes.AsObject) => {
        expect(res.message).to.equal('OTP không đúng');
      }
    );
  });
  it('Verify Verify Otp To Reset Password By Email Failed when Otp empty', () => {
    data.email = dataVerifyOtpToResetPasswordByEmail.email.correct;
    data.partnershipId =
      dataVerifyOtpToResetPasswordByEmail.partnershipId.correct;
    data.otp = dataVerifyOtpToResetPasswordByEmail.otp.empty;

    cy.wrap(verifyOtpToResetPasswordByEmail(data, {}).catch((err) => err)).then(
      (res: VerifyOtpToResetPasswordByEmailRes.AsObject) => {
        expect(res.message).to.equal('Trường OTP không được để trống');
      }
    );
  });
  it('Verify Verify Otp To Reset Password By Email Failed when Otp expired', () => {
    data.email = dataVerifyOtpToResetPasswordByEmail.email.correct;
    data.partnershipId =
      dataVerifyOtpToResetPasswordByEmail.partnershipId.correct;
    data.otp = dataVerifyOtpToResetPasswordByEmail.otp.expired;

    cy.wrap(verifyOtpToResetPasswordByEmail(data, {}).catch((err) => err)).then(
      (res: VerifyOtpToResetPasswordByEmailRes.AsObject) => {
        expect(res.message).to.equal('OTP đã hết hạn');
      }
    );
  });
  it('Verify Verify Otp To Reset Password By Email Failed when Email incorrect', () => {
    data.email = dataVerifyOtpToResetPasswordByEmail.email.incorrect;
    data.partnershipId =
      dataVerifyOtpToResetPasswordByEmail.partnershipId.correct;
    data.otp = dataVerifyOtpToResetPasswordByEmail.otp.correct;

    cy.wrap(verifyOtpToResetPasswordByEmail(data, {}).catch((err) => err)).then(
      (res: VerifyOtpToResetPasswordByEmailRes.AsObject) => {
        expect(res.message).to.equal('Email không đúng');
      }
    );
  });
  it('Verify Verify Otp To Reset Password By Email Failed when Email empty', () => {
    data.email = dataVerifyOtpToResetPasswordByEmail.email.empty;
    data.partnershipId =
      dataVerifyOtpToResetPasswordByEmail.partnershipId.correct;
    data.otp = dataVerifyOtpToResetPasswordByEmail.otp.correct;

    cy.wrap(verifyOtpToResetPasswordByEmail(data, {}).catch((err) => err)).then(
      (res: VerifyOtpToResetPasswordByEmailRes.AsObject) => {
        expect(res.message).to.equal('Trường email không được trống');
      }
    );
  });
});
