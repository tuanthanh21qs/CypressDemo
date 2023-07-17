import { CheckAlreadyExistEmailReq } from '@api/customer/gen/ts/customer/proto/customer/mobile/customer_pb';
import { dataJson } from '../data/checkAlreadyExistEmail';
import { checkAlreadyExistEmail } from '../services/customer';
import { DefaultRes } from '@api/customer/gen/ts/customer/proto/customer/mobile/base_pb';

let token = dataJson.token.correct;
let data: CheckAlreadyExistEmailReq.AsObject = {
  email: dataJson.email.exist,
  partnershipId: dataJson.partnershipId.correct,
};

describe('Customer - Check Already Exist Email - Successfull case', () => {
  it('Verify Check Already Exist Email is Exist', () => {
    cy.wrap(checkAlreadyExistEmail(data, { token }).catch((err) => err)).then(
      (res: DefaultRes.AsObject) => {
        expect(res.result).to.be.true;
      }
    );
  });
  it('Verify Check Already Exist Email is not Exist', () => {
    data.email = dataJson.email.notExist;
    cy.wrap(checkAlreadyExistEmail(data, { token }).catch((err) => err)).then(
      (res: DefaultRes.AsObject) => {
        expect(res.message).to.equal('Không tìm thấy tài khoản');
      }
    );
  });
});
