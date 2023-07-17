import {
  DeleteGroupReq,
  DeleteGroupRes,
} from '@api/academy/gen/ts/proto/group/web_admin/group_pb';
import { deleteGroup } from '../services/group';
import { dataDeleteGroup } from '../data/deleteGroup';

let token = '';
let data: DeleteGroupReq.AsObject = {
  id: '',
};

describe('Group - Case Delete Group Successfull', () => {
  it.skip('Verify Delete Group Successfull', () => {
    token = dataDeleteGroup.token.correct;

    data.id = dataDeleteGroup.id.correct;

    cy.wrap(deleteGroup(data, { token }).catch((err) => err)).then(
      (res: DeleteGroupRes.AsObject) => {
        expect(res).to.be.empty;
      }
    );
  });
});

describe('Group - Case Delete Group Failed', () => {
  it('Verify Delete Group Failed when ID incorrect', () => {
    token = dataDeleteGroup.token.correct;

    data.id = dataDeleteGroup.id.incorrect;

    cy.wrap(deleteGroup(data, { token }).catch((err) => err)).then(
      (res: DeleteGroupRes.AsObject) => {
        console.log('🚀 ~ file: deleteGroup.cy.ts:35 ~ it ~ res:', data);
        console.log('🚀 ~ file: deleteGroup.cy.ts:35 ~ it ~ res:', res);
        expect(res.message).to.equal('Lỗi');
      }
    );
  });
  it('Verify Delete Group Failed when ID empty', () => {
    token = dataDeleteGroup.token.correct;

    data.id = dataDeleteGroup.id.empty;

    cy.wrap(deleteGroup(data, { token }).catch((err) => err)).then(
      (res: DeleteGroupRes.AsObject) => {
        console.log('🚀 ~ file: deleteGroup.cy.ts:35 ~ it ~ res:', data);
        console.log('🚀 ~ file: deleteGroup.cy.ts:35 ~ it ~ res:', res);
        expect(res.message).to.equal('Lỗi');
      }
    );
  });

  it('Verify Delete Group Failed when Token incorrect', () => {
    token = dataDeleteGroup.token.incorrect;

    data.id = dataDeleteGroup.id.correct;

    cy.wrap(deleteGroup(data, { token }).catch((err) => err)).then(
      (res: DeleteGroupRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Delete Group Failed when Token empty', () => {
    token = dataDeleteGroup.token.empty;

    data.id = dataDeleteGroup.id.correct;

    cy.wrap(deleteGroup(data, { token }).catch((err) => err)).then(
      (res: DeleteGroupRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Delete Group Failed when Token expired', () => {
    token = dataDeleteGroup.token.expired;

    data.id = dataDeleteGroup.id.correct;

    cy.wrap(deleteGroup(data, { token }).catch((err) => err)).then(
      (res: DeleteGroupRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
});
