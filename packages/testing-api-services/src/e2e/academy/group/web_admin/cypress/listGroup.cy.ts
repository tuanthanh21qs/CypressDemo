import {
  ListGroupReq,
  ListGroupRes,
} from '@api/academy/gen/ts/proto/group/web_admin/group_pb';
import { listGroup } from '../services/group';
import { dataListGroup } from '../data/listGroup';

let token = '';
let data: ListGroupReq.AsObject = {
  pagination: { pageNumber: 1, pageLimit: 80 },
  filterTagsList: [],
  filterKeywords: '',
};
describe('List Group - Case List Group Successfull', () => {
  it('Verify List All Group Successfull', () => {
    token = dataListGroup.token.correct;

    cy.wrap(listGroup(data, { token }).catch((err) => err)).then(
      (res: ListGroupRes.AsObject) => {
        cy.wrap(res.groupsList[0].id).as('ID');
        cy.wrap(res.groupsList[0].name).as('Name');
        expect(res.groupsList[0].id).not.to.be.empty;
      }
    );
  });
  it('Verify List Group By Tags List Successfull', () => {
    token = dataListGroup.token.correct;
    data.filterTagsList = dataListGroup.filterTagsList.haveResult;

    cy.wrap(listGroup(data, { token }).catch((err) => err)).then(
      (res: ListGroupRes.AsObject) => {
        console.log('🚀 ~ file: listGroup.cy.ts:32 ~ it ~ res:', data);
        console.log('🚀 ~ file: listGroup.cy.ts:32 ~ it ~ res:', res);
        cy.wrap(res.groupsList[0].id).as('ID');
        cy.wrap(res.groupsList[0].name).as('Name');
        expect(res.groupsList[0].id).not.to.be.empty;
      }
    );
  });
  it('Verify List Group By Key Word Successfull', () => {
    token = dataListGroup.token.correct;
    data.filterKeywords = dataListGroup.filterKeywords.haveResult;

    cy.wrap(listGroup(data, { token }).catch((err) => err)).then(
      (res: ListGroupRes.AsObject) => {
        console.log('🚀 ~ file: listGroup.cy.ts:32 ~ it ~ res:', data);
        console.log('🚀 ~ file: listGroup.cy.ts:32 ~ it ~ res:', res);
        cy.wrap(res.groupsList[0].id).as('ID');
        cy.wrap(res.groupsList[0].name).as('Name');
        expect(res.groupsList[0].id).not.to.be.empty;
      }
    );
  });
});

describe('List Group - Case List Group Failed', () => {
  it('Verify List Group By Tags List Failed when Tag List not exist', () => {
    token = dataListGroup.token.correct;
    data.filterTagsList = dataListGroup.filterTagsList.notHaveResult;

    cy.wrap(listGroup(data, { token }).catch((err) => err)).then(
      (res: ListGroupRes.AsObject) => {
        console.log('🚀 ~ file: listGroup.cy.ts:32 ~ it ~ res:', data);
        console.log('🚀 ~ file: listGroup.cy.ts:32 ~ it ~ res:', res);
        expect(res.message).to.equal('Lỗi');
      }
    );
  });
  it('Verify List Group By Key Word Failed when Key Word not exist', () => {
    token = dataListGroup.token.correct;
    data.filterKeywords = dataListGroup.filterKeywords.notHaveResult;

    cy.wrap(listGroup(data, { token }).catch((err) => err)).then(
      (res: ListGroupRes.AsObject) => {
        console.log('🚀 ~ file: listGroup.cy.ts:32 ~ it ~ res:', data);
        console.log('🚀 ~ file: listGroup.cy.ts:32 ~ it ~ res:', res);
        expect(res.message).to.equal('Lỗi');
      }
    );
  });

  it('Verify List Group Failed when Token incorrect', () => {
    token = dataListGroup.token.incorrect;

    cy.wrap(listGroup(data, { token }).catch((err) => err)).then(
      (res: ListGroupRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify List Group Failed when Token empty', () => {
    token = dataListGroup.token.empty;

    cy.wrap(listGroup(data, { token }).catch((err) => err)).then(
      (res: ListGroupRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify List Group Failed when Token expired', () => {
    token = dataListGroup.token.empty;

    cy.wrap(listGroup(data, { token }).catch((err) => err)).then(
      (res: ListGroupRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
});
