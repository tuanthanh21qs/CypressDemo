import {
  GetGroupReq,
  GetGroupRes,
} from '@api/academy/gen/ts/proto/group/web_admin/group_pb';
import { getGroup } from '../services/group';
import { dataGetGroup } from '../data/getGroup';

let token = '';
let data: GetGroupReq.AsObject = {
  id: '',
};

describe('Group - Case Get Group Successfull', () => {
  it('Verify Get Group Successfull', () => {
    token = dataGetGroup.token.correct;

    data.id = dataGetGroup.id.correct;

    cy.wrap(getGroup(data, { token }).catch((err) => err)).then(
      (res: GetGroupRes.AsObject) => {
        cy.wrap(res.group.id).as('ID');
        cy.wrap(res.group.name).as('Name');
        expect(res.group.id).not.to.be.empty;
      }
    );
  });
});

describe('Group - Case Get Group Failed', () => {
  it('Verify Get Group Failed when id incorrect', () => {
    token = dataGetGroup.token.correct;

    data.id = dataGetGroup.id.incorrect;

    cy.wrap(getGroup(data, { token }).catch((err) => err)).then(
      (res: GetGroupRes.AsObject) => {
        expect(res.message).to.equal('GROUP_NOT_FOUND');
      }
    );
  });
  it('Verify Get Group Failed when id empty', () => {
    token = dataGetGroup.token.correct;

    data.id = dataGetGroup.id.empty;

    cy.wrap(getGroup(data, { token }).catch((err) => err)).then(
      (res: GetGroupRes.AsObject) => {
        expect(res.message).to.equal(
          'Đã có lỗi xảy ra vui lòng thử lại sau, hoặc liên hệ đội ngũ phát triễn'
        );
      }
    );
  });

  it('Verify Get Group Failed when token incorrect', () => {
    token = dataGetGroup.token.incorrect;

    data.id = dataGetGroup.id.correct;

    cy.wrap(getGroup(data, { token }).catch((err) => err)).then(
      (res: GetGroupRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Get Group Failed when token empty', () => {
    token = dataGetGroup.token.empty;

    data.id = dataGetGroup.id.correct;

    cy.wrap(getGroup(data, { token }).catch((err) => err)).then(
      (res: GetGroupRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Get Group Failed when token expired', () => {
    token = dataGetGroup.token.expired;

    data.id = dataGetGroup.id.correct;

    cy.wrap(getGroup(data, { token }).catch((err) => err)).then(
      (res: GetGroupRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
});
