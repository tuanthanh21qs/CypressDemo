import { SendOtpByEmailRes } from '@api/customer/gen/ts/customer/proto/customer/web/auth_email_pb';
import { dataSendOtpByEmail } from '../data/sendOtpByEmail';
import { sendOtpByEmail } from '../services/authEmail';

let data = {
  email: '',
  partnershipId: '',
  type: 0,
};

describe('Customer - Send OTP By Email - Happy Scenarios', () => {
  it('Verify Send OTP By Email Successfull when Email correct and type is verify email', () => {
    data.email = dataSendOtpByEmail.email.correct;
    data.partnershipId = dataSendOtpByEmail.partnershipId.correct;
    data.type = dataSendOtpByEmail.type.verifyEmail;

    cy.wrap(sendOtpByEmail(data, {}).catch((err) => err)).then(
      (res: SendOtpByEmailRes.AsObject) => {
        console.log('🚀 ~ file: sendOtpByEmail.cy.ts:19 ~ it ~ res:', res);
        expect(res.timeRemaining).to.equal(60);
      }
    );
  });
  it('Verify Send OTP By Email Successfull when Email correct and type is change password', () => {
    data.email = dataSendOtpByEmail.email.correct;
    data.partnershipId = dataSendOtpByEmail.partnershipId.correct;
    data.type = dataSendOtpByEmail.type.changeEmail;

    cy.wrap(sendOtpByEmail(data, {}).catch((err) => err)).then(
      (res: SendOtpByEmailRes.AsObject) => {
        expect(res.timeRemaining).to.equal(60);
      }
    );
  });
});

describe('Customer - Send OTP By Email - Happy Scenarios', () => {
  it('Verify Send OTP By Email Failed when Email incorrect', () => {
    data.email = dataSendOtpByEmail.email.incorrect;
    data.partnershipId = dataSendOtpByEmail.partnershipId.correct;
    data.type = dataSendOtpByEmail.type.verifyEmail;

    cy.wrap(sendOtpByEmail(data, {}).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Không tìm thấy email');
    });
  });
  it('Verify Send OTP By Email Failed when Email empty', () => {
    data.email = dataSendOtpByEmail.email.empty;
    data.partnershipId = dataSendOtpByEmail.partnershipId.correct;
    data.type = dataSendOtpByEmail.type.verifyEmail;

    cy.wrap(sendOtpByEmail(data, {}).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Trường EMAIL là bắt buộc');
    });
  });
});
