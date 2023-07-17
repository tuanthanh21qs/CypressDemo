import { resetPasswordByEmail } from '../services/authEmail';
import { dataResetPasswordByEmail } from '../data/resetPasswordByEmail';

let token = '';

let data = {
  newPassword: '',
};

describe('Customer - Reset Password By Email - Happy Scenarios', () => {
  it('Verify Reset Password By Email Successfull', () => {
    token = dataResetPasswordByEmail.token.correct;
    data.newPassword = dataResetPasswordByEmail.newPassword.valid;

    cy.wrap(resetPasswordByEmail(data, { token }).catch((err) => err)).then(
      (res) => {
        // expect(res).to.be.empty;
        console.log(
          '🚀 ~ file: resetPasswordByEmail.cy.ts:19 ~ it ~ res:',
          res
        );
      }
    );
  });
});
describe('Customer - Reset Password By Email - Unhappy Scenarios', () => {
  describe('Customer - Reset Password By Email - Relate to New Password', () => {
    it('Verify Reset Password By Email Failed when New Password is used', () => {
      token = dataResetPasswordByEmail.token.correct;
      data.newPassword = dataResetPasswordByEmail.newPassword.isUsed;

      cy.wrap(resetPasswordByEmail(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal('Bạn đã nhập mật khẩu cũ');
        }
      );
    });
    it('Verify Reset Password By Email Failed when New Password invalid', () => {
      token = dataResetPasswordByEmail.token.correct;
      data.newPassword = dataResetPasswordByEmail.newPassword.invalid;

      cy.wrap(resetPasswordByEmail(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal('Mật khẩu không hợp lệ');
        }
      );
    });
  });
  describe('Customer - Reset Password By Email - Relate to Token', () => {
    it('Verify Reset Password By Email Failed when Token incorrect', () => {
      token = dataResetPasswordByEmail.token.incorrect;
      data.newPassword = dataResetPasswordByEmail.newPassword.valid;

      cy.wrap(resetPasswordByEmail(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal('signature is invalid');
        }
      );
    });
    it('Verify Reset Password By Email Failed when Token expired', () => {
      token = dataResetPasswordByEmail.token.expired;
      data.newPassword = dataResetPasswordByEmail.newPassword.valid;

      cy.wrap(resetPasswordByEmail(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal('signature is invalid');
        }
      );
    });
    it('Verify Reset Password By Email Failed when Token empty', () => {
      token = dataResetPasswordByEmail.token.empty;
      data.newPassword = dataResetPasswordByEmail.newPassword.valid;

      cy.wrap(resetPasswordByEmail(data, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal(
            'token contains an invalid number of segments'
          );
        }
      );
    });
  });
});
