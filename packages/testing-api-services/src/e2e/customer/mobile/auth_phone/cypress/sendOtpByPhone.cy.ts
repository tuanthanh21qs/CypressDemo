import { sendOtpByPhone } from '../services/authPhone';
import { dataSendOtpByPhone } from '../data/sendOtpByPhone';
import { SendOtpByPhoneRes } from '@api/customer/gen/ts/customer/proto/customer/mobile/auth_phone_pb';

let data = {
  partnershipId: '',
  otpType: 0,
  phoneCode: '',
  phoneNumber: '',
};

describe('Customer - Send OTP By Phone - Successfull Case', () => {
  it('Verify Send OTP By Phone Successfull when OTP type is login', () => {
    data.partnershipId = dataSendOtpByPhone.partnershipId.correct;
    data.otpType = dataSendOtpByPhone.otpType.login;
    data.phoneCode = dataSendOtpByPhone.phoneCode.correct;
    data.phoneNumber = dataSendOtpByPhone.phoneNumber.correct;

    cy.wrap(sendOtpByPhone(data).catch((err) => err)).then(
      (res: SendOtpByPhoneRes.AsObject) => {
        expect(res.timeRemaining).to.equal(60);
      }
    );
  });
  it.only('Verify Send OTP By Phone Successfull when OTP type is verification phone', () => {
    data.partnershipId = dataSendOtpByPhone.partnershipId.correct;
    data.otpType = dataSendOtpByPhone.otpType.verificationPhone;
    data.phoneCode = dataSendOtpByPhone.phoneCode.correct;
    data.phoneNumber = dataSendOtpByPhone.phoneNumber.correct;

    cy.wrap(sendOtpByPhone(data).catch((err) => err)).then(
      (res: SendOtpByPhoneRes.AsObject) => {
        expect(res.timeRemaining).to.equal(60);
      }
    );
  });
  it('Verify Send OTP By Phone Successfull when OTP type is reset password', () => {
    data.partnershipId = dataSendOtpByPhone.partnershipId.correct;
    data.otpType = dataSendOtpByPhone.otpType.resetPassword;
    data.phoneCode = dataSendOtpByPhone.phoneCode.correct;
    data.phoneNumber = dataSendOtpByPhone.phoneNumber.correct;

    cy.wrap(sendOtpByPhone(data).catch((err) => err)).then(
      (res: SendOtpByPhoneRes.AsObject) => {
        expect(res.timeRemaining).to.equal(60);
      }
    );
  });

  it('Verify Send OTP By Phone Failed when OTP type invalid', () => {
    data.partnershipId = dataSendOtpByPhone.partnershipId.correct;
    data.otpType = dataSendOtpByPhone.otpType.invalid;
    data.phoneCode = dataSendOtpByPhone.phoneCode.correct;
    data.phoneNumber = dataSendOtpByPhone.phoneNumber.correct;

    cy.wrap(sendOtpByPhone(data).catch((err) => err)).then(
      (res: SendOtpByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Lỗi');
      }
    );
  });
});

describe('Customer - Send OTP By Phone - Failed Case', () => {
  describe('Customer - Send OTP By Phone - Relate to Phone Number', () => {
    it('Verify Send OTP By Phone Failed when Phone Number not exist', () => {
      data.partnershipId = dataSendOtpByPhone.partnershipId.correct;
      data.otpType = dataSendOtpByPhone.otpType.login;
      data.phoneCode = dataSendOtpByPhone.phoneCode.correct;
      data.phoneNumber = dataSendOtpByPhone.phoneNumber.notExist;

      cy.wrap(sendOtpByPhone(data).catch((err) => err)).then(
        (res: SendOtpByPhoneRes.AsObject) => {
          expect(res.message).to.equal('Không tìm thấy số điện thoại');
        }
      );
    });
    it('Verify Send OTP By Phone Failed when Phone Number empty', () => {
      data.partnershipId = dataSendOtpByPhone.partnershipId.correct;
      data.otpType = dataSendOtpByPhone.otpType.login;
      data.phoneCode = dataSendOtpByPhone.phoneCode.correct;
      data.phoneNumber = dataSendOtpByPhone.phoneNumber.empty;

      cy.wrap(sendOtpByPhone(data).catch((err) => err)).then(
        (res: SendOtpByPhoneRes.AsObject) => {
          expect(res.message).to.equal('Trường số điện thoại là bắt buộc');
        }
      );
    });
  });

  describe('Customer - Send OTP By Phone - Relate to Phone Code', () => {
    it('Verify Send OTP By Phone Failed when Phone Code empty', () => {
      data.partnershipId = dataSendOtpByPhone.partnershipId.correct;
      data.otpType = dataSendOtpByPhone.otpType.login;
      data.phoneCode = dataSendOtpByPhone.phoneCode.empty;
      data.phoneNumber = dataSendOtpByPhone.phoneNumber.correct;

      cy.wrap(sendOtpByPhone(data).catch((err) => err)).then(
        (res: SendOtpByPhoneRes.AsObject) => {
          expect(res.message).to.equal('Trường mã vùng là bắt buộc');
        }
      );
    });
  });
});
