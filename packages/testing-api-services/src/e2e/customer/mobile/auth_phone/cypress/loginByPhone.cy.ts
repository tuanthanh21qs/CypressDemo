import {
  LoginByPhoneReq,
  LoginByPhoneRes,
} from '@api/customer/gen/ts/customer/proto/customer/mobile/auth_phone_pb';
import { loginByPhone } from '../services/authPhone';
import { dataJson } from '../data/loginByPhone';

let data: LoginByPhoneReq.AsObject = {
  phoneNumber: '',
  phoneCode: '',
  password: '',
  partnershipId: '',
};

describe('Customer - Login By Phone', () => {
  it('Verify Login By Phone Successfull', () => {
    data.phoneNumber = dataJson.phoneNumber.correct;
    data.phoneCode = dataJson.phoneCode.correct;
    data.password = dataJson.password.correct;
    data.partnershipId = dataJson.partnershipId.correct;

    cy.wrap(loginByPhone(data).catch((err) => err)).then(
      (res: LoginByPhoneRes.AsObject) => {
        cy.wrap(res.accessToken).as('Access Token');
        cy.wrap(res.refreshToken).as('Refresh Token');
        expect(res.accessToken).not.to.be.empty;
      }
    );
  });
  it('Verify Login By Phone Failed when Phone Number incorrect', () => {
    data.phoneNumber = dataJson.phoneNumber.incorrect;
    data.phoneCode = dataJson.phoneCode.correct;
    data.password = dataJson.password.correct;
    data.partnershipId = dataJson.partnershipId.correct;

    cy.wrap(loginByPhone(data).catch((err) => err)).then(
      (res: LoginByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Không tìm thấy tài khoản của bạn');
      }
    );
  });

  it('Verify Login By Phone Failed when Phone Number empty', () => {
    data.phoneNumber = dataJson.phoneNumber.empty;
    data.phoneCode = dataJson.phoneCode.correct;
    data.password = dataJson.password.correct;
    data.partnershipId = dataJson.partnershipId.correct;

    cy.wrap(loginByPhone(data).catch((err) => err)).then(
      (res: LoginByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Trường số điện thoại là bắt buộc');
      }
    );
  });
  it('Verify Login By Phone Failed when Phone Code incorrect', () => {
    data.phoneNumber = dataJson.phoneNumber.correct;
    data.phoneCode = dataJson.phoneCode.incorrect;
    data.password = dataJson.password.correct;
    data.partnershipId = dataJson.partnershipId.correct;

    cy.wrap(loginByPhone(data).catch((err) => err)).then(
      (res: LoginByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Không tìm thấy tài khoản của bạn');
      }
    );
  });
  it('Verify Login By Phone Failed when Password incorrect', () => {
    data.phoneNumber = dataJson.phoneNumber.correct;
    data.phoneCode = dataJson.phoneCode.correct;
    data.password = dataJson.password.incorrect;
    data.partnershipId = dataJson.partnershipId.correct;

    cy.wrap(loginByPhone(data).catch((err) => err)).then(
      (res: LoginByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Mật khẩu không chính xác');
      }
    );
  });
  it('Verify Login By Phone Failed when Password empty', () => {
    data.phoneNumber = dataJson.phoneNumber.correct;
    data.phoneCode = dataJson.phoneCode.correct;
    data.password = dataJson.password.empty;
    data.partnershipId = dataJson.partnershipId.correct;

    cy.wrap(loginByPhone(data).catch((err) => err)).then(
      (res: LoginByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Trường mật khẩu là bắt buộc');
      }
    );
  });
});
