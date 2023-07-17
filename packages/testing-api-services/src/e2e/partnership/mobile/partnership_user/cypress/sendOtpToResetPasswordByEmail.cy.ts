import {
  SendOtpToResetPasswordByEmailReq,
  SendOtpToResetPasswordByEmailRes,
} from '@api/partnership/gen/ts/partnership/proto/partnership/mobile/partnership_user_pb';
import { sendOtpToResetPasswordByEmail } from '../services/partnership_user';
import { dataSendOtpToResetPasswordByEmail } from '../data/sendOtpToResetPasswordByEmail';

let data: SendOtpToResetPasswordByEmailReq.AsObject = {
  email: '',
  partnershipId: '',
};

describe('Partnership User - Send Otp To Reset Password By Email', () => {
  it('Verify Send Otp To Reset Password By Email Successfull', () => {
    data.email = dataSendOtpToResetPasswordByEmail.email.correct;
    data.partnershipId =
      dataSendOtpToResetPasswordByEmail.partnershipId.correct;

    cy.wrap(sendOtpToResetPasswordByEmail(data, {}).catch((err) => err)).then(
      (res: SendOtpToResetPasswordByEmailRes.AsObject) => {
        expect(res.timeRemaining).to.equal(60);
      }
    );
  });
  it('Verify Send Otp To Reset Password By Phone Failed when Email incorrect', () => {
    data.email = dataSendOtpToResetPasswordByEmail.email.incorrect;
    data.partnershipId =
      dataSendOtpToResetPasswordByEmail.partnershipId.correct;

    cy.wrap(sendOtpToResetPasswordByEmail(data, {}).catch((err) => err)).then(
      (res: SendOtpToResetPasswordByEmailRes.AsObject) => {
        expect(res.message).to.equal('Email không đúng');
      }
    );
  });
  it('Verify Send Otp To Reset Password By Phone Failed when Email empty', () => {
    data.email = dataSendOtpToResetPasswordByEmail.email.empty;
    data.partnershipId =
      dataSendOtpToResetPasswordByEmail.partnershipId.correct;

    cy.wrap(sendOtpToResetPasswordByEmail(data, {}).catch((err) => err)).then(
      (res: SendOtpToResetPasswordByEmailRes.AsObject) => {
        expect(res.message).to.equal('Email không đúng');
      }
    );
  });
});
