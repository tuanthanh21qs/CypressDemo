import { resetPasswordByPhone } from '../services/authPhone';
import { dataResetPasswordByPhone } from '../data/resetPasswordByPhone';

let token = '';

let data = {
  newPassword: '',
};

describe('Customer - Reset Password By Phone - Successfull Scenarios', () => {
  it('Verify Reset Password By Phone Successfull', () => {
    token = dataResetPasswordByPhone.token.correct;

    data.newPassword = dataResetPasswordByPhone.newPassword.valid;

    cy.wrap(resetPasswordByPhone(data, { token }).catch((err) => err)).then(
      (res) => {
        expect(res).to.be.empty;
      }
    );
  });
});
describe('Customer - Reset Password By Phone - Failed Scenarios', () => {
  describe('Customer - Reset Password By Phone - Relate to New Password', () => {
    it('Verify Reset Password By Phone Failed when New Password is used', () => {
      token = dataResetPasswordByPhone.token.correct;

      data.newPassword = dataResetPasswordByPhone.newPassword.isUsed;

      cy.wrap(resetPasswordByPhone(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal('Bạn đã nhập mật khẩu cũ');
        }
      );
    });
    it('Verify Reset Password By Phone Failed when New Password invalid', () => {
      token = dataResetPasswordByPhone.token.correct;

      data.newPassword = dataResetPasswordByPhone.newPassword.invalid;

      cy.wrap(resetPasswordByPhone(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal('Mật khẩu không hợp lệ');
        }
      );
    });
  });
  describe('Customer - Reset Password By Phone - Relate to Token', () => {
    it('Verify Reset Password By Phone Failed when Token incorrect', () => {
      token = dataResetPasswordByPhone.token.incorrect;

      data.newPassword = dataResetPasswordByPhone.newPassword.valid;
      cy.wrap(resetPasswordByPhone(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal('signature is invalid');
        }
      );
    });
    it('Verify Reset Password By Phone Failed when Token expired', () => {
      token = dataResetPasswordByPhone.token.expired;

      data.newPassword = dataResetPasswordByPhone.newPassword.valid;
      cy.wrap(resetPasswordByPhone(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal('signature is invalid');
        }
      );
    });
    it('Verify Reset Password By Phone Failed when Token empty', () => {
      token = dataResetPasswordByPhone.token.empty;

      data.newPassword = dataResetPasswordByPhone.newPassword.valid;
      cy.wrap(resetPasswordByPhone(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal(
            'token contains an invalid number of segments'
          );
        }
      );
    });
  });
});
