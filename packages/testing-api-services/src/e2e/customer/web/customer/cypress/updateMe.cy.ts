import { UpdateMeReq } from '@api/customer/gen/ts/customer/proto/customer/web/customer_pb';
import { updateMe } from '../services/customer';
import { dataUpdateMe } from '../data/updateMe';

let token = '';

let data: UpdateMeReq.AsObject = {
  name: '',
  profilePicture: '',
  description: '',
  birthday: 0,
  gender: 0,
  email: '',
};
describe('Customer - Update Me - Successfull Case', () => {
  it('Verify Update All Information Successfull', () => {
    data.name = dataUpdateMe.name;
    data.profilePicture = dataUpdateMe.profilePicture;
    data.description = dataUpdateMe.description;
    data.birthday = dataUpdateMe.birthday;
    data.gender = dataUpdateMe.gender;
    data.email = dataUpdateMe.email;

    token = dataUpdateMe.token.correct;

    cy.wrap(updateMe(data, { token }).catch((err) => err)).then((res) => {
      expect(res).to.be.empty;
    });
  });
});

describe('Customer - Update Me - Failed Case', () => {
  describe('Customer - Update Me - Relate to Information Account', () => {
    it('Verify Update Information Failed when update Email but Email is verified', () => {
      data.name = dataUpdateMe.name;
      data.profilePicture = dataUpdateMe.profilePicture;
      data.description = dataUpdateMe.description;
      data.birthday = dataUpdateMe.birthday;
      data.gender = dataUpdateMe.gender;
      data.email = dataUpdateMe.email;

      token = dataUpdateMe.token.isVerifiedEmail;

      cy.wrap(updateMe(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Lỗi');
      });
    });
    it('Verify Update Information Failed when account is verified', () => {
      data.name = dataUpdateMe.name;
      data.profilePicture = dataUpdateMe.profilePicture;
      data.description = dataUpdateMe.description;
      data.birthday = dataUpdateMe.birthday;
      data.gender = dataUpdateMe.gender;
      data.email = dataUpdateMe.email;

      token = dataUpdateMe.token.isVerified;

      cy.wrap(updateMe(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Lỗi');
      });
    });
  });
  describe('Customer - Update Me - Relate to Token', () => {
    it.only('Verify Update Information Failed when Token incorrect', () => {
      data.name = dataUpdateMe.name;
      data.profilePicture = dataUpdateMe.profilePicture;
      data.description = dataUpdateMe.description;
      data.birthday = dataUpdateMe.birthday;
      data.gender = dataUpdateMe.gender;
      data.email = dataUpdateMe.email;

      token = dataUpdateMe.token.incorrect;

      cy.wrap(updateMe(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Lỗi');
      });
    });
    it('Verify Update Information Failed when Token expired', () => {
      data.name = dataUpdateMe.name;
      data.profilePicture = dataUpdateMe.profilePicture;
      data.description = dataUpdateMe.description;
      data.birthday = dataUpdateMe.birthday;
      data.gender = dataUpdateMe.gender;
      data.email = dataUpdateMe.email;

      token = dataUpdateMe.token.expired;

      cy.wrap(updateMe(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Lỗi');
      });
    });
    it('Verify Update Information Failed when Token empty', () => {
      data.name = dataUpdateMe.name;
      data.profilePicture = dataUpdateMe.profilePicture;
      data.description = dataUpdateMe.description;
      data.birthday = dataUpdateMe.birthday;
      data.gender = dataUpdateMe.gender;
      data.email = dataUpdateMe.email;

      token = dataUpdateMe.token.empty;

      cy.wrap(updateMe(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Lỗi');
      });
    });
  });
});
