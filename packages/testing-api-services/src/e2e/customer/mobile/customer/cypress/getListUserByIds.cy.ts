import {
  GetListUserByIdsReq,
  GetListUserByIdsRes,
} from '@api/customer/gen/ts/customer/proto/customer/mobile/customer_pb';
import { dataJson } from '../data/getListUserByIds';
import { getListUserByIds } from '../services/customer';

let token = dataJson.token.correct;
let data: GetListUserByIdsReq.AsObject = {
  partnershipId: dataJson.partnershipId.correct,
  userIdsList: dataJson.userIdsList.correct,
};

describe('Customer - Get User By ID - Successfull Case', () => {
  it('Verify Get User By ID successfull', () => {
    cy.wrap(getListUserByIds(data, { token }).catch((err) => err)).then(
      (res: GetListUserByIdsRes.AsObject) => {
        cy.wrap(res.usersList).as('User Infor');
        expect(res).not.to.be.empty;
      }
    );
  });
});

describe('Customer - Get User By ID - Failed Case', () => {
  it('Verify Get User By ID failed when ID incorrect', () => {
    data.userIdsList = dataJson.userIdsList.incorrect;
    cy.wrap(getListUserByIds(data, { token }).catch((err) => err)).then(
      (res: GetListUserByIdsRes.AsObject) => {
        expect(res.message).to.equal('Không tìm thấy kết quả');
      }
    );
  });
  it('Verify Get User By ID failed when ID empty', () => {
    data.userIdsList = dataJson.userIdsList.empty;
    cy.wrap(getListUserByIds(data, { token }).catch((err) => err)).then(
      (res: GetListUserByIdsRes.AsObject) => {
        expect(res.message).to.equal('Trường CUSTOMER_ID là bắt buộc');
      }
    );
  });
});
