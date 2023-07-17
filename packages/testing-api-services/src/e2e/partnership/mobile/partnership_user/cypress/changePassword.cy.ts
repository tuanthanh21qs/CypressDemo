import { ChangePasswordReq } from '@api/partnership/gen/ts/partnership/proto/partnership/mobile/partnership_user_pb';
import { dataChangePassword } from '../data/changePassword';
import { changePassword } from '../services/partnership_user';

let token = '';
let data: ChangePasswordReq.AsObject = {
  oldPassword: '',
  password: '',
};

describe('Partnership - Change Password - Successfull Case', () => {
  it('Verify Change Password Successfull', () => {
    token = dataChangePassword.token.correct;

    data.oldPassword = dataChangePassword.oldPassword.correct;
    data.password = dataChangePassword.password.valid;

    cy.wrap(changePassword(data, { token }).catch((err) => err)).then((res) => {
      expect(res).to.be.empty;
    });
  });
});

describe('Partnership - Change Password - Failed Case', () => {
  it('Verify Change Password Failed when old password incorrect', () => {
    token = dataChangePassword.token.correct;

    data.oldPassword = dataChangePassword.oldPassword.incorrect;
    data.password = dataChangePassword.password.valid;

    cy.wrap(changePassword(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Mật khẩu cũ không đúng');
    });
  });
  it('Verify Change Password Failed when old password empty', () => {
    token = dataChangePassword.token.correct;

    data.oldPassword = dataChangePassword.oldPassword.empty;
    data.password = dataChangePassword.password.valid;

    cy.wrap(changePassword(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Mật khẩu cũ không được để trống');
    });
  });
  it('Verify Change Password Failed when new password invalid', () => {
    token = dataChangePassword.token.correct;

    data.oldPassword = dataChangePassword.oldPassword.correct;
    data.password = dataChangePassword.password.invalid;

    cy.wrap(changePassword(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Mật khẩu mới không đúng định dạng');
    });
  });
  it('Verify Change Password Failed when new password same as old password', () => {
    token = dataChangePassword.token.correct;

    data.oldPassword = dataChangePassword.oldPassword.correct;
    data.password = dataChangePassword.password.isOldPassword;

    cy.wrap(changePassword(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Mật khẩu mới không được giống mật khẩu cũ');
    });
  });
  it('Verify Change Password Failed when new password empty', () => {
    token = dataChangePassword.token.correct;

    data.oldPassword = dataChangePassword.oldPassword.correct;
    data.password = dataChangePassword.password.empty;

    cy.wrap(changePassword(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Mật khẩu mới không được để trống');
    });
  });
});
