import { UpdateMeReq } from '@api/partnership/gen/ts/partnership/proto/partnership/mobile/partnership_user_pb';
import { updateMe } from '../services/partnership_user';
import { dataUpdateMe } from '../data/updateMe';

let token = '';

let data: UpdateMeReq.AsObject = {
  name: '',
  profilePicture: '',
  description: '',
};
describe('Partnership - Update Me - Successfull Case', () => {
  it('Verify Update All Information Successfull', () => {
    token = dataUpdateMe.token.correct;

    data.name = dataUpdateMe.name;
    data.description = dataUpdateMe.description;
    data.profilePicture = dataUpdateMe.profilePicture;

    cy.wrap(updateMe(data, { token }).catch((err) => err)).then((res) => {
      expect(res).to.be.empty;
    });
  });
});

describe('Partnership - Update Me - Failed Case', () => {
  describe('Partnership - Update Me - Relate to Token', () => {
    it.only('Verify Update Information Failed when Token incorrect', () => {
      token = dataUpdateMe.token.incorrect;

      data.name = dataUpdateMe.name;
      data.description = dataUpdateMe.description;
      data.profilePicture = dataUpdateMe.profilePicture;

      cy.wrap(updateMe(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Lỗi');
      });
    });
    it('Verify Update Information Failed when Token expired', () => {
      token = dataUpdateMe.token.expired;

      data.name = dataUpdateMe.name;
      data.description = dataUpdateMe.description;
      data.profilePicture = dataUpdateMe.profilePicture;

      cy.wrap(updateMe(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Lỗi');
      });
    });
    it('Verify Update Information Failed when Token empty', () => {
      token = dataUpdateMe.token.empty;

      data.name = dataUpdateMe.name;
      data.description = dataUpdateMe.description;
      data.profilePicture = dataUpdateMe.profilePicture;

      cy.wrap(updateMe(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Lỗi');
      });
    });
  });
});
