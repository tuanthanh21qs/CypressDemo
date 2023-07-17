import {
  SendOtpToResetPasswordByPhoneRes,
  SendOtpToResetPasswordByPhoneReq,
} from '@api/partnership/gen/ts/partnership/proto/partnership/mobile/partnership_user_pb';
import { sendOtpToResetPasswordByPhone } from '../services/partnership_user';
import { dataSendOtpToResetPasswordByPhone } from '../data/sendOtpToResetPasswordByPhone';

let data: SendOtpToResetPasswordByPhoneReq.AsObject = {
  phoneCode: '',
  phoneNumber: '',
  partnershipId: '',
};

describe('Partnership User - Send Otp To Reset Password By Phone', () => {
  it('Verify Send Otp To Reset Password By Phone Successfull', () => {
    data.phoneCode = dataSendOtpToResetPasswordByPhone.phoneCode.correct;
    data.phoneNumber = dataSendOtpToResetPasswordByPhone.phoneNumber.correct;
    data.partnershipId =
      dataSendOtpToResetPasswordByPhone.partnershipId.correct;

    cy.wrap(sendOtpToResetPasswordByPhone(data, {}).catch((err) => err)).then(
      (res: SendOtpToResetPasswordByPhoneRes.AsObject) => {
        expect(res.timeRemaining).to.equal(60);
      }
    );
  });
  it('Verify Send Otp To Reset Password By Phone Failed when Phone Number incorrect', () => {
    data.phoneCode = dataSendOtpToResetPasswordByPhone.phoneCode.correct;
    data.phoneNumber = dataSendOtpToResetPasswordByPhone.phoneNumber.incorrect;
    data.partnershipId =
      dataSendOtpToResetPasswordByPhone.partnershipId.correct;

    cy.wrap(sendOtpToResetPasswordByPhone(data, {}).catch((err) => err)).then(
      (res: SendOtpToResetPasswordByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Số điện thoại không đúng');
      }
    );
  });
  it('Verify Send Otp To Reset Password By Phone Failed when Phone Number empty', () => {
    data.phoneCode = dataSendOtpToResetPasswordByPhone.phoneCode.correct;
    data.phoneNumber = dataSendOtpToResetPasswordByPhone.phoneNumber.empty;
    data.partnershipId =
      dataSendOtpToResetPasswordByPhone.partnershipId.correct;

    cy.wrap(sendOtpToResetPasswordByPhone(data, {}).catch((err) => err)).then(
      (res: SendOtpToResetPasswordByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Trường số điện thoại là bắt buộc');
      }
    );
  });
  it('Verify Send Otp To Reset Password By Phone Failed when Phone Number correct but Phone Code incorrect', () => {
    data.phoneCode = dataSendOtpToResetPasswordByPhone.phoneCode.incorrect;
    data.phoneNumber = dataSendOtpToResetPasswordByPhone.phoneNumber.correct;
    data.partnershipId =
      dataSendOtpToResetPasswordByPhone.partnershipId.correct;

    cy.wrap(sendOtpToResetPasswordByPhone(data, {}).catch((err) => err)).then(
      (res: SendOtpToResetPasswordByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Số điện thoại không đúng');
      }
    );
  });
});
