import {
  LoginReq,
  LoginRes,
} from '@api/partnership/gen/ts/partnership/proto/partnership/web/auth_pb';
import { login } from '../services/auth';
import { dataLogin } from '../data/login';

let data: LoginReq.AsObject = {
  phoneCode: '',
  phoneNumber: '',
  password: '',
  partnershipId: '',
};
describe('Partnership - Login', () => {
  it.skip('Verify Login Successfull', () => {
    data.partnershipId = dataLogin.partnershipId.correct;
    data.password = dataLogin.password.correct;
    data.phoneCode = dataLogin.phoneCode.correct;
    data.phoneNumber = dataLogin.phoneNumber.correct;

    cy.wrap(login(data).catch((err) => err)).then((res: LoginRes.AsObject) => {
      cy.wrap(res.accessToken).as('Access Token');
      cy.wrap(res.refreshToken).as('Refresh Token');
      cy.wrap(res.expireTime).as('Expired Time');

      expect(res.accessToken).not.to.be.empty;
    });
  });
  it('Verify Login Failed when Password incorrect', () => {
    data.partnershipId = dataLogin.partnershipId.correct;
    data.password = dataLogin.password.incorrect;
    data.phoneCode = dataLogin.phoneCode.correct;
    data.phoneNumber = dataLogin.phoneNumber.correct;

    cy.wrap(login(data).catch((err) => err)).then((res: LoginRes.AsObject) => {
      expect(res.message).to.equal('Mật khẩu không chính xác');
    });
  });
  it('Verify Login Failed when Password empty', () => {
    data.partnershipId = dataLogin.partnershipId.correct;
    data.password = dataLogin.password.empty;
    data.phoneCode = dataLogin.phoneCode.correct;
    data.phoneNumber = dataLogin.phoneNumber.correct;

    cy.wrap(login(data).catch((err) => err)).then((res: LoginRes.AsObject) => {
      expect(res.message).to.equal('Trường PASSWORD là bắt buộc');
    });
  });
  it('Verify Login Failed when Phone Number incorrect', () => {
    data.partnershipId = dataLogin.partnershipId.correct;
    data.password = dataLogin.password.correct;
    data.phoneCode = dataLogin.phoneCode.correct;
    data.phoneNumber = dataLogin.phoneNumber.incorrect;

    cy.wrap(login(data).catch((err) => err)).then((res: LoginRes.AsObject) => {
      expect(res.message).to.equal('Tài khoản không chính xác');
    });
  });
  it('Verify Login Failed when Phone Number empty', () => {
    data.partnershipId = dataLogin.partnershipId.correct;
    data.password = dataLogin.password.correct;
    data.phoneCode = dataLogin.phoneCode.correct;
    data.phoneNumber = dataLogin.phoneNumber.empty;

    cy.wrap(login(data).catch((err) => err)).then((res: LoginRes.AsObject) => {
      expect(res.message).to.equal('Trường PHONE_NUMBER là bắt buộc');
    });
  });
  it('Verify Login Failed when Phone Code incorrect', () => {
    data.partnershipId = dataLogin.partnershipId.correct;
    data.password = dataLogin.password.correct;
    data.phoneCode = dataLogin.phoneCode.incorrect;
    data.phoneNumber = dataLogin.phoneNumber.correct;

    cy.wrap(login(data).catch((err) => err)).then((res: LoginRes.AsObject) => {
      expect(res.message).to.equal('Tài khoản không chính xác');
    });
  });
  it('Verify Login Failed when Phone Code empty', () => {
    data.partnershipId = dataLogin.partnershipId.correct;
    data.password = dataLogin.password.correct;
    data.phoneCode = dataLogin.phoneCode.empty;
    data.phoneNumber = dataLogin.phoneNumber.correct;

    cy.wrap(login(data).catch((err) => err)).then((res: LoginRes.AsObject) => {
      expect(res.message).to.equal('Trường PHONE_CODE là bắt buộc');
    });
  });
  it('Verify Login Failed when PartnershipID incorrect', () => {
    data.partnershipId = dataLogin.partnershipId.incorrect;
    data.password = dataLogin.password.correct;
    data.phoneCode = dataLogin.phoneCode.correct;
    data.phoneNumber = dataLogin.phoneNumber.correct;

    cy.wrap(login(data).catch((err) => err)).then((res: LoginRes.AsObject) => {
      expect(res.message).to.equal('Tài khoản không chính xác');
    });
  });
  it('Verify Login Failed when PartnershipID empty', () => {
    data.partnershipId = dataLogin.partnershipId.empty;
    data.password = dataLogin.password.correct;
    data.phoneCode = dataLogin.phoneCode.correct;
    data.phoneNumber = dataLogin.phoneNumber.correct;

    cy.wrap(login(data).catch((err) => err)).then((res: LoginRes.AsObject) => {
      expect(res.message).to.equal('Trường mã đối tác là bắt buộc');
    });
  });
});
