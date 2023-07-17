import {
  GetUserByIdReq,
  GetUserByIdRes,
} from '@api/customer/gen/ts/customer/proto/customer/mobile/customer_pb';
import { dataJson } from '../data/getUserById';
import { getUserById } from '../services/customer';

let token = dataJson.token.correct;
let data: GetUserByIdReq.AsObject = {
  userId: dataJson.userId.correct,
  partnershipId: dataJson.partnershipId.correct,
};

describe('Customer - Get User By ID - Successfull Case', () => {
  it('Verify Get User By ID successfull', () => {
    cy.wrap(getUserById(data, { token }).catch((err) => err)).then(
      (res: GetUserByIdRes.AsObject) => {
        cy.wrap(res.userInfo.id).as('ID');
        expect(res.userInfo).not.to.be.empty;
      }
    );
  });
});

describe('Customer - Get User By ID - Failed Case', () => {
  it('Verify Get User By ID failed when ID incorrect', () => {
    data.userId = dataJson.userId.incorrect;
    cy.wrap(getUserById(data, { token }).catch((err) => err)).then(
      (res: GetUserByIdRes.AsObject) => {
        expect(res.message).to.equal('Không tìm thấy tài khoản');
      }
    );
  });
  it('Verify Get User By ID failed when ID empty', () => {
    data.userId = dataJson.userId.empty;
    cy.wrap(getUserById(data, { token }).catch((err) => err)).then(
      (res: GetUserByIdRes.AsObject) => {
        expect(res.message).to.equal('Trường CUSTOMER_ID là bắt buộc');
      }
    );
  });
});
