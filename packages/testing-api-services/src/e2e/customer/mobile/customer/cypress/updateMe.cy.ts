import { UpdateMeReq } from '@api/customer/gen/ts/customer/proto/customer/mobile/customer_pb';
import { updateMe } from '../services/customer';
import { dataJson } from '../data/updateMe';

let token = dataJson.token.correct;

let data: UpdateMeReq.AsObject = {
  name: dataJson.name,
  profilePicture: dataJson.profilePicture,
  description: dataJson.description,
  inviterId: '',
  birthday: 0,
  gender: 1,
  email: dataJson.email,
};
describe('Customer - Update Me - Successfull Case', () => {
  it('Verify Update All Information Successfull', () => {
    cy.wrap(updateMe(data, { token }).catch((err) => err)).then((res) => {
      expect(res).to.be.empty;
    });
  });
});

describe('Customer - Update Me - Failed Case', () => {
  describe('Customer - Update Me - Relate to Information Account', () => {
    it('Verify Update Information Failed when update Email but Email is verified', () => {
      token = dataJson.token.isVerifiedEmail;
      cy.wrap(updateMe(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Lỗi');
      });
    });
    it('Verify Update Information Failed when account is verified', () => {
      token = dataJson.token.isVerified;
      cy.wrap(updateMe(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Lỗi');
      });
    });
  });
  describe('Customer - Update Me - Relate to Token', () => {
    it.only('Verify Update Information Failed when Token incorrect', () => {
      token = dataJson.token.incorrect;
      cy.wrap(updateMe(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Lỗi');
      });
    });
    it('Verify Update Information Failed when Token expired', () => {
      token = dataJson.token.expired;
      cy.wrap(updateMe(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Lỗi');
      });
    });
    it('Verify Update Information Failed when Token empty', () => {
      token = dataJson.token.empty;
      cy.wrap(updateMe(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Lỗi');
      });
    });
  });
});
