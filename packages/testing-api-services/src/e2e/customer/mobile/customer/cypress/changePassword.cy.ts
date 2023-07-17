import { ChangePasswordReq } from '@api/customer/gen/ts/customer/proto/customer/mobile/customer_pb';
import { dataJson } from '../data/changePassword';
import { changePassword } from '../services/customer';

let token = dataJson.token.correct;
let data: ChangePasswordReq.AsObject = {
  oldPassword: dataJson.oldPassword.correct,
  password: dataJson.password.valid,
};

describe('Customer - Change Password - Successfull Case', () => {
  it('Verify Change Password Successfull', () => {
    cy.wrap(changePassword(data, { token }).catch((err) => err)).then((res) => {
      expect(res).to.be.empty;
    });
  });
});

describe('Customer - Change Password - Failed Case', () => {
  it('Verify Change Password Failed when old password incorrect', () => {
    data.oldPassword = dataJson.oldPassword.incorrect;
    cy.wrap(changePassword(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Mật khẩu cũ không đúng');
    });
  });
  it('Verify Change Password Failed when old password empty', () => {
    data.oldPassword = dataJson.oldPassword.empty;
    cy.wrap(changePassword(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Mật khẩu cũ không được để trống');
    });
  });
  it('Verify Change Password Failed when new password invalid', () => {
    data.password = dataJson.password.invalid;
    cy.wrap(changePassword(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Mật khẩu mới không đúng định dạng');
    });
  });
  it('Verify Change Password Failed when new password same as old password', () => {
    data.password = dataJson.password.isOldPassword;
    cy.wrap(changePassword(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Mật khẩu mới không được giống mật khẩu cũ');
    });
  });
  it('Verify Change Password Failed when new password empty', () => {
    data.password = dataJson.password.empty;
    cy.wrap(changePassword(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Mật khẩu mới không được để trống');
    });
  });
});
