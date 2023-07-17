import {
  LoginByEmailReq,
  LoginByEmailRes,
} from '@api/customer/gen/ts/customer/proto/customer/web/auth_email_pb';
import { loginByEmail } from '../services/authEmail';
import { dataLoginByEmail } from '../data/loginByEmail';

let data: LoginByEmailReq.AsObject = {
  email: '',
  password: '',
  partnershipId: '',
};
describe('Customer - Login By Email', () => {
  it.only('Verify Login By Email Successfull', () => {
    data.email = dataLoginByEmail.email.correct;
    data.password = dataLoginByEmail.password.correct;
    data.partnershipId = dataLoginByEmail.partnershipId.correct;

    cy.wrap(loginByEmail(data).catch((err) => err)).then(
      (res: LoginByEmailRes.AsObject) => {
        cy.wrap(res.accessToken).as('Access Token');
        cy.wrap(res.refreshToken).as('Refresh Token');
        cy.wrap(res.expireTime).as('Expired Time');

        expect(res.accessToken).not.to.be.empty;
      }
    );
  });
  it('Verify Login By Email Failed when Email incorrect', () => {
    data.email = dataLoginByEmail.email.incorrect;
    data.password = dataLoginByEmail.password.correct;
    data.partnershipId = dataLoginByEmail.partnershipId.correct;

    cy.wrap(loginByEmail(data).catch((err) => err)).then(
      (res: LoginByEmailRes.AsObject) => {
        expect(res.message).to.equal('Không tìm thấy tài khoản của bạn');
      }
    );
  });
  it('Verify Login By Email Failed when Email empty', () => {
    data.email = dataLoginByEmail.email.empty;
    data.password = dataLoginByEmail.password.correct;
    data.partnershipId = dataLoginByEmail.partnershipId.correct;

    cy.wrap(loginByEmail(data).catch((err) => err)).then(
      (res: LoginByEmailRes.AsObject) => {
        expect(res.message).to.equal('Trường EMAIL là bắt buộc');
      }
    );
  });
  it('Verify Login By Email Failed when Password incorrect', () => {
    data.email = dataLoginByEmail.email.correct;
    data.password = dataLoginByEmail.password.incorrect;
    data.partnershipId = dataLoginByEmail.partnershipId.correct;

    cy.wrap(loginByEmail(data).catch((err) => err)).then(
      (res: LoginByEmailRes.AsObject) => {
        expect(res.message).to.equal('Mật khẩu không chính xác');
      }
    );
  });
  it('Verify Login By Email Failed when Password empty', () => {
    data.email = dataLoginByEmail.email.correct;
    data.password = dataLoginByEmail.password.empty;
    data.partnershipId = dataLoginByEmail.partnershipId.correct;

    cy.wrap(loginByEmail(data).catch((err) => err)).then(
      (res: LoginByEmailRes.AsObject) => {
        expect(res.message).to.equal('Trường mật khẩu là bắt buộc');
      }
    );
  });
});
