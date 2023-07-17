import {
  GetListUserReq,
  GetListUserRes,
} from '@api/customer/gen/ts/customer/proto/customer/mobile/customer_pb';
import { dataJson } from '../data/getListUser';
import { getListUser } from '../services/customer';

let token = dataJson.token.correct;
let data: GetListUserReq.AsObject = {
  orderByList: [{ desc: dataJson.desc, field: dataJson.field }],
  pagination: {
    pageNumber: 1,
    pageLimit: 99,
  },
};

describe('Customer - Get List User - Successfull Case', () => {
  it('Get List User Successfull', () => {
    cy.wrap(getListUser(data, { token }).catch((err) => err)).then(
      (res: GetListUserRes.AsObject) => {
        cy.wrap(res.usersList).as('User List');
        expect(res).not.to.be.empty;
      }
    );
  });
});
