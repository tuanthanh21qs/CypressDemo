import {
  RegisterByPhoneReq,
  RegisterByPhoneRes,
} from '@api/customer/gen/ts/customer/proto/customer/mobile/auth_phone_pb';
import { dataJson } from '../data/registerByPhone';
import { registerByPhone } from '../services/authPhone';
import { randomInput } from '../../../../../support/utils/inputInformation';

let data: RegisterByPhoneReq.AsObject = {
  password: dataJson.password.valid,
  phoneNumber: dataJson.phoneNumber.valid,
  phoneCode: dataJson.phoneCode.correct,
  partnershipId: dataJson.partnershipId.correct,
};

describe('Customer - Register By Phone', () => {
  it('Verify Register By Phone Successfull', () => {
    data.phoneNumber = randomInput(4, 13, '0123456789', true);
    cy.wrap(registerByPhone(data).catch((err) => err)).then(
      (res: RegisterByPhoneRes.AsObject) => {
        cy.wrap(res.accessToken).as('Access Token');
        cy.wrap(res.refreshToken).as('Refresh Token');
        expect(res.accessToken).not.to.be.empty;
      }
    );
  });
  it('Verify Register By Phone Failed when phone number invalid', () => {
    data.phoneNumber = randomInput(1, 3, '0123456789', true);
    cy.wrap(registerByPhone(data).catch((err) => err)).then(
      (res: RegisterByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Số điện thoại không hợp lệ');
      }
    );
  });
  it('Verify Register By Phone Failed when phone number exist', () => {
    data.phoneNumber = dataJson.phoneNumber.exist;
    cy.wrap(registerByPhone(data).catch((err) => err)).then(
      (res: RegisterByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Tài khoản đã tồn tại, vui lòng thử lại');
      }
    );
  });
  it('Verify Register By Phone Failed when password invalid', () => {
    data.phoneNumber = randomInput(4, 13, '0123456789', true);
    data.password = dataJson.password.invalid;
    cy.wrap(registerByPhone(data).catch((err) => err)).then(
      (res: RegisterByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Mật khẩu không hợp lệ');
      }
    );
  });

  it('Verify Register By Phone Failed when password empty', () => {
    data.phoneNumber = randomInput(4, 13, '0123456789', true);
    data.password = dataJson.password.empty;
    cy.wrap(registerByPhone(data).catch((err) => err)).then(
      (res: RegisterByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Trường mật khẩu là bắt buộc');
      }
    );
  });
});
