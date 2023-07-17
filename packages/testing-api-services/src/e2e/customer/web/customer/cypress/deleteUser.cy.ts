import { DeleteUserReq } from '@api/customer/gen/ts/customer/proto/customer/web/customer_pb';
import { dataDeleteUser } from '../data/deleteUser';
import { deleteUser } from '../services/customer';

let token = '';

let data: DeleteUserReq.AsObject = {
  password: '',
};

describe('Customer - Delete User - Successfull Case', () => {
  it('Verify Delete User Successfull', () => {
    token = dataDeleteUser.token.correct;
    data.password = dataDeleteUser.password.correct;

    cy.wrap(deleteUser(data, { token }).catch((err) => err)).then((res) => {
      expect(res).to.be.empty;
    });
  });
});

describe('Customer - Delete User - Failed Case', () => {
  it('Verify Delete User Failed when password incorrect', () => {
    token = dataDeleteUser.token.correct;
    data.password = dataDeleteUser.password.incorrect;

    cy.wrap(deleteUser(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Mật khẩu sai');
    });
  });
  it('Verify Delete User Failed when password empty', () => {
    token = dataDeleteUser.token.correct;
    data.password = dataDeleteUser.password.empty;

    cy.wrap(deleteUser(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Mật khẩu không được để trống');
    });
  });
});
