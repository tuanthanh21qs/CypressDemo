import { CheckAlreadyExistPhoneReq } from '@api/customer/gen/ts/customer/proto/customer/mobile/customer_pb';
import { dataJson } from '../data/checkAlreadyExistPhone';
import { checkAlreadyExistPhone } from '../services/customer';
import { DefaultRes } from '@api/customer/gen/ts/customer/proto/customer/mobile/base_pb';

let token = dataJson.token.correct;
let data: CheckAlreadyExistPhoneReq.AsObject = {
  partnershipId: dataJson.partnershipId.correct,
  phoneCode: dataJson.phoneCode.correct,
  phoneNumber: dataJson.phoneNumber.exist,
};

describe('Customer - Check Already Exist Phone - Successfull case', () => {
  it('Verify Check Already Exist Phone is Exist', () => {
    cy.wrap(checkAlreadyExistPhone(data, { token }).catch((err) => err)).then(
      (res: DefaultRes.AsObject) => {
        expect(res.result).to.be.true;
      }
    );
  });
  it('Verify Check Already Exist Phone is not Exist', () => {
    data.phoneNumber = dataJson.phoneNumber.notExist;
    cy.wrap(checkAlreadyExistPhone(data, { token }).catch((err) => err)).then(
      (res: DefaultRes.AsObject) => {
        expect(res.message).to.equal('Không tìm thấy tài khoản');
      }
    );
  });
});
