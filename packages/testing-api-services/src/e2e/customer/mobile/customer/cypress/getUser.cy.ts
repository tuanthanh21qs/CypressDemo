import {
  GetUserReq,
  GetUserRes,
} from '@api/customer/gen/ts/customer/proto/customer/mobile/customer_pb';
import { dataJson } from '../data/getUser';
import { getUser } from '../services/customer';

let token = dataJson.token.correct;
let data: GetUserReq.AsObject = {
  email: dataJson.email.empty,
  phoneCode: dataJson.phoneCode.empty,
  phoneNumber: dataJson.phoneNumber.empty,
  partnershipId: dataJson.partnershipId.correct,
};

describe('Customer - Get User - Successfull case', () => {
  it('Verify Get User Successfull by Email', () => {
    data.email = dataJson.email.correct;
    cy.wrap(getUser(data, { token }).catch((err) => err)).then(
      (res: GetUserRes.AsObject) => {
        cy.wrap(res.userInfo.id).as('ID');
        expect(res.userInfo).not.to.be.empty;
      }
    );
  });

  it('Verify Get User Successfull by Phone', () => {
    data.phoneCode = dataJson.phoneCode.correct;
    data.phoneNumber = dataJson.phoneNumber.correct;
    data.email = dataJson.email.empty;
    cy.wrap(getUser(data, { token }).catch((err) => err)).then(
      (res: GetUserRes.AsObject) => {
        cy.wrap(res.userInfo.id).as('ID');
        expect(res.userInfo).not.to.be.empty;
      }
    );
  });
});

describe('Customer - Get User - Failed case', () => {
  describe('Customer - Get User - Relate to Email', () => {
    it('Verify Get User Failed by Email not exist', () => {
      data.email = dataJson.email.notExist;
      cy.wrap(getUser(data, { token }).catch((err) => err)).then(
        (res: GetUserRes.AsObject) => {
          expect(res.message).to.equal('Không tìm thấy tài khoản của bạn');
        }
      );
    });
    it('Verify Get User Failed by Email empty', () => {
      data.email = dataJson.email.empty;
      data.phoneCode = dataJson.phoneCode.empty;
      data.phoneNumber = dataJson.phoneNumber.empty;
      cy.wrap(getUser(data, { token }).catch((err) => err)).then(
        (res: GetUserRes.AsObject) => {
          console.log(data);

          expect(res.message).to.equal(
            'CUSTOMER_REQUIRED_EMAIL_OR_PHONE_NUMBER'
          );
        }
      );
    });
  });
  describe('Customer - Get User - Relate to Phone', () => {
    it('Verify Get User Failed by Phone not exist', () => {
      data.phoneNumber = dataJson.phoneNumber.notExist;
      data.phoneCode = dataJson.phoneCode.correct;
      cy.wrap(getUser(data, { token }).catch((err) => err)).then(
        (res: GetUserRes.AsObject) => {
          expect(res.message).to.equal('Không tìm thấy tài khoản của bạn');
        }
      );
    });
    it('Verify Get User Failed by Phone empty', () => {
      data.phoneNumber = dataJson.phoneNumber.empty;
      data.phoneCode = dataJson.phoneCode.empty;
      cy.wrap(getUser(data, { token }).catch((err) => err)).then(
        (res: GetUserRes.AsObject) => {
          expect(res.message).to.equal(
            'CUSTOMER_REQUIRED_EMAIL_OR_PHONE_NUMBER'
          );
        }
      );
    });
  });
});
