import {
  LoginByPhoneOTPReq,
  LoginByPhoneRes,
} from '@api/customer/gen/ts/customer/proto/customer/mobile/auth_phone_pb';
import { loginByPhoneOTP } from '../services/authPhone';
import { dataJson } from '../data/loginByPhoneOTP';

let data: LoginByPhoneOTPReq.AsObject = {
  phoneCode: '',
  phoneNumber: '',
  otp: '',
  partnershipId: '',
};
describe('Customer - Login By Phone OTP', () => {
  it('Verify Login By Phone OTP Successfull', () => {
    data.phoneCode = dataJson.phoneCode.correct;
    data.phoneNumber = dataJson.phoneNumber.correct;
    data.otp = dataJson.otp.correct;
    data.partnershipId = dataJson.partnershipId.correct;

    cy.wrap(loginByPhoneOTP(data).catch((err) => err)).then(
      (res: LoginByPhoneRes.AsObject) => {
        cy.wrap(res.accessToken).as('Access Token');
        cy.wrap(res.refreshToken).as('Refresh Token');
        expect(res.accessToken).not.to.be.empty;
      }
    );
  });
  it('Verify Login By Phone OTP Failed when phone number incorrect', () => {
    data.phoneCode = dataJson.phoneCode.correct;
    data.phoneNumber = dataJson.phoneNumber.incorrect;
    data.otp = dataJson.otp.correct;
    data.partnershipId = dataJson.partnershipId.correct;

    cy.wrap(loginByPhoneOTP(data).catch((err) => err)).then(
      (res: LoginByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Không tìm thấy tài khoản của bạn');
      }
    );
  });
  it('Verify Login By Phone OTP Failed when phone number empty', () => {
    data.phoneCode = dataJson.phoneCode.correct;
    data.phoneNumber = dataJson.phoneNumber.empty;
    data.otp = dataJson.otp.correct;
    data.partnershipId = dataJson.partnershipId.correct;

    cy.wrap(loginByPhoneOTP(data).catch((err) => err)).then(
      (res: LoginByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Trường số điện thoại là bắt buộc');
      }
    );
  });
  it('Verify Login By Phone OTP Failed when OTP incorrect', () => {
    data.phoneCode = dataJson.phoneCode.correct;
    data.phoneNumber = dataJson.phoneNumber.correct;
    data.otp = dataJson.otp.incorrect;
    data.partnershipId = dataJson.partnershipId.correct;

    cy.wrap(loginByPhoneOTP(data).catch((err) => err)).then(
      (res: LoginByPhoneRes.AsObject) => {
        expect(res.message).to.equal(
          'Mã xác minh không đúng, vui lòng kiểm tra lại'
        );
      }
    );
  });
  it('Verify Login By Phone OTP Failed when OTP expired', () => {
    data.phoneCode = dataJson.phoneCode.correct;
    data.phoneNumber = dataJson.phoneNumber.correct;
    data.otp = dataJson.otp.expired;
    data.partnershipId = dataJson.partnershipId.correct;

    cy.wrap(loginByPhoneOTP(data).catch((err) => err)).then(
      (res: LoginByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Mã OTP đã quá hạn, vui lòng nhập mã mới');
      }
    );
  });
  it('Verify Login By Phone OTP Failed when OTP empty', () => {
    data.phoneCode = dataJson.phoneCode.correct;
    data.phoneNumber = dataJson.phoneNumber.correct;
    data.otp = dataJson.otp.empty;
    data.partnershipId = dataJson.partnershipId.correct;

    cy.wrap(loginByPhoneOTP(data).catch((err) => err)).then(
      (res: LoginByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Trường OTP là bắt buộc');
      }
    );
  });
});
