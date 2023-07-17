import {
  RegisterByPhoneNotRequiredPasswordReq,
  RegisterByPhoneRes,
} from '@api/customer/gen/ts/customer/proto/customer/mobile/auth_phone_pb';
import { dataJson } from '../data/registerByPhoneNotRequiredPassword';
import { registerByPhoneNotRequiredPassword } from '../services/authPhone';
import { randomInput } from '../../../../../support/utils/inputInformation';

let data: RegisterByPhoneNotRequiredPasswordReq.AsObject = {
  phoneNumber: dataJson.phoneNumber.empty,
  phoneCode: dataJson.phoneCode.correct,
  partnershipId: dataJson.partnershipId.correct,
};

describe('Customer - Register By Phone Not Required Password', () => {
  it('Verify Register By Phone Not Required Password Successfull', () => {
    data.phoneNumber = randomInput(4, 13, '0123456789', true);
    cy.wrap(registerByPhoneNotRequiredPassword(data).catch((err) => err)).then(
      (res: RegisterByPhoneRes.AsObject) => {
        cy.wrap(res.accessToken).as('Access Token');
        cy.wrap(res.refreshToken).as('Refresh Token');
        expect(res.accessToken).not.to.be.empty;
      }
    );
  });
  it('Verify Register By Phone Failed when phone number invalid', () => {
    data.phoneNumber = randomInput(1, 3, '0123456789', true);
    cy.wrap(registerByPhoneNotRequiredPassword(data).catch((err) => err)).then(
      (res: RegisterByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Số điện thoại không hợp lệ');
      }
    );
  });
  it('Verify Register By Phone Failed when phone number exist', () => {
    data.phoneNumber = dataJson.phoneNumber.exist;
    cy.wrap(registerByPhoneNotRequiredPassword(data).catch((err) => err)).then(
      (res: RegisterByPhoneRes.AsObject) => {
        expect(res.message).to.equal('Tài khoản đã tồn tại, vui lòng thử lại');
      }
    );
  });
});
