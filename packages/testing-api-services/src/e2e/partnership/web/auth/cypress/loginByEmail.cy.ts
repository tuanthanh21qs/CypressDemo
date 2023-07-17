import {
  LoginByEmailReq,
  LoginByEmailRes,
} from '@api/partnership/gen/ts/proto/partnership/web/auth_pb';
import { loginByEmail } from '../services/auth';
import { dataLoginByEmail } from '../data/loginByEmail';

let data: LoginByEmailReq.AsObject = {
  email: '',
  password: '',
  partnershipId: '',
};

describe('Partnership - Login By Email', () => {
  it.only('Verify Login By Email Successfull', () => {
    data.email = dataLoginByEmail.email.correct;
    data.partnershipId = dataLoginByEmail.partnershipId.correct;
    data.password = dataLoginByEmail.password.correct;

    cy.wrap(loginByEmail(data).catch((err) => err)).then(
      (res: LoginByEmailRes.AsObject) => {
        console.log('🚀 ~ file: loginByEmail.cy.ts:22 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: loginByEmail.cy.ts:22 ~ it.only ~ res:', res);
        cy.wrap(res.accessToken).as('Access Token');
        cy.wrap(res.refreshToken).as('Refresh Token');
        cy.wrap(res.expireTime).as('Expired Time');

        // expect(res.accessToken).not.to.be.empty;
      }
    );
  });
  it('Verify Login By Email Failed when Email incorrect', () => {
    data.email = dataLoginByEmail.email.incorrect;
    data.partnershipId = dataLoginByEmail.partnershipId.correct;
    data.password = dataLoginByEmail.password.correct;

    cy.wrap(loginByEmail(data).catch((err) => err)).then(
      (res: LoginByEmailRes.AsObject) => {
        expect(res.message).to.equal('Tài khoản không chính xác');
      }
    );
  });
  it('Verify Login By Email Failed when Email empty', () => {
    data.email = dataLoginByEmail.email.empty;
    data.partnershipId = dataLoginByEmail.partnershipId.correct;
    data.password = dataLoginByEmail.password.correct;

    cy.wrap(loginByEmail(data).catch((err) => err)).then(
      (res: LoginByEmailRes.AsObject) => {
        expect(res.message).to.equal('Trường EMAIL là bắt buộc');
      }
    );
  });
  it('Verify Login By Email Failed when Password incorrect', () => {
    data.email = dataLoginByEmail.email.correct;
    data.partnershipId = dataLoginByEmail.partnershipId.correct;
    data.password = dataLoginByEmail.password.incorrect;

    cy.wrap(loginByEmail(data).catch((err) => err)).then(
      (res: LoginByEmailRes.AsObject) => {
        expect(res.message).to.equal('Mật khẩu không chính xác');
      }
    );
  });
  it('Verify Login By Email Failed when Password empty', () => {
    data.email = dataLoginByEmail.email.correct;
    data.partnershipId = dataLoginByEmail.partnershipId.correct;
    data.password = dataLoginByEmail.password.empty;

    cy.wrap(loginByEmail(data).catch((err) => err)).then(
      (res: LoginByEmailRes.AsObject) => {
        expect(res.message).to.equal('Trường PASSWORD là bắt buộc');
      }
    );
  });
  it('Verify Login By Email Failed when PartnershipID incorrect', () => {
    data.email = dataLoginByEmail.email.correct;
    data.partnershipId = dataLoginByEmail.partnershipId.incorrect;
    data.password = dataLoginByEmail.password.correct;

    cy.wrap(loginByEmail(data).catch((err) => err)).then(
      (res: LoginByEmailRes.AsObject) => {
        expect(res.message).to.equal('Tài khoản không chính xác');
      }
    );
  });
  it('Verify Login By Email Failed when PartnershipID empty', () => {
    data.email = dataLoginByEmail.email.correct;
    data.partnershipId = dataLoginByEmail.partnershipId.empty;
    data.password = dataLoginByEmail.password.correct;

    cy.wrap(loginByEmail(data).catch((err) => err)).then(
      (res: LoginByEmailRes.AsObject) => {
        expect(res.message).to.equal('Trường mã đối tác là bắt buộc');
      }
    );
  });
});
