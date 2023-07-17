import { DeleteUserReq } from '@api/customer/gen/ts/customer/proto/customer/mobile/customer_pb';
import { dataJson } from '../data/deleteUser';
import { deleteUser } from '../services/customer';

let token = dataJson.token.correct;

let data: DeleteUserReq.AsObject = {
  password: dataJson.password.correct,
};

describe('Customer - Delete User - Successfull Case', () => {
  it('Verify Delete User Successfull', () => {
    cy.wrap(deleteUser(data, { token }).catch((err) => err)).then((res) => {
      expect(res).to.be.empty;
    });
  });
});

describe('Customer - Delete User - Failed Case', () => {
  it('Verify Delete User Failed when password incorrect', () => {
    data.password = dataJson.password.incorrect;
    cy.wrap(deleteUser(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Mật khẩu sai');
    });
  });
  it('Verify Delete User Failed when password empty', () => {
    data.password = dataJson.password.empty;
    cy.wrap(deleteUser(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Mật khẩu không được để trống');
    });
  });
});
