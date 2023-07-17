import { ResetPasswordReq } from '@api/partnership/gen/ts/partnership/proto/partnership/mobile/partnership_user_pb';
import { resetPassword } from '../services/partnership_user';
import { dataResetPassword } from '../data/resetPassword';

let data: ResetPasswordReq.AsObject = {
  newPassword: '',
};

describe('Partnership - Reset Password', () => {
  it('Verify Reset Password Successfull', () => {
    data.newPassword = dataResetPassword.newPassword.valid;

    cy.wrap(resetPassword(data, {}).catch((err) => err)).then((res) => {
      expect(res).to.be.empty;
    });
  });
  it('Verify Reset Password Failed when New Password invalid', () => {
    data.newPassword = dataResetPassword.newPassword.invalid;

    cy.wrap(resetPassword(data, {}).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Mật khẩu bạn nhập không hợp lệ');
    });
  });
  it('Verify Reset Password Failed when New Password empty', () => {
    data.newPassword = dataResetPassword.newPassword.empty;

    cy.wrap(resetPassword(data, {}).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Trường mật khẩu không được để trống');
    });
  });
});
