import {
  ListGoalReq,
  ListGoalRes,
} from '@api/academy/gen/ts/proto/goal/web_admin/goal_pb';
import { listGoal } from '../services/goal';
import { dataListGoal } from '../data/listGoal';

let token = '';

let data: ListGoalReq.AsObject = {
  pagination: { pageNumber: 1, pageLimit: 20 },
  filterTagsList: [],
  filterKeywords: '',
};

describe('Zone - List Goal Successfull', () => {
  it('Verify List all Zone Successfull', () => {
    token = dataListGoal.token.correct;

    cy.wrap(listGoal(data, { token }).catch((err) => err)).then(
      (res: ListGoalRes.AsObject) => {
        cy.wrap(res.goalsList).as('Zone list');
        expect(res.goalsList[0].id).not.to.be.empty;
      }
    );
  });
  it.only('Verify List Goal by tag list Successfull', () => {
    token = dataListGoal.token.correct;

    data.filterTagsList = dataListGoal.filterTagsList.haveResult;

    cy.wrap(listGoal(data, { token }).catch((err) => err)).then(
      (res: ListGoalRes.AsObject) => {
        console.log('🚀 ~ file: listGoal.cy.ts:34 ~ it.only ~ res:', res);
        cy.wrap(res.goalsList).as('Zone list');
        expect(res.goalsList[0].id).not.to.be.empty;
      }
    );
  });
  // it.only('Verify List Goal by keywords Successfull', () => {
  //   token = dataListGoal.token.correct;

  //   data.filterKeywords = dataListGoal.filterKeywords.haveResult;

  //   cy.wrap(listGoal(data, { token }).catch((err) => err)).then(
  //     (res: ListGoalRes.AsObject) => {
  //       console.log('🚀 ~ file: listGoal.cy.ts:47 ~ it.only ~ res:', res);
  //       cy.wrap(res.goalsList).as('Zone list');
  //       expect(res.goalsList[0].id).not.to.be.empty;
  //     }
  //   );
  // });
});

describe('Zone - List Goal Failed', () => {
  it('Verify List Goal Failed when token incorrect', () => {
    token = dataListGoal.token.incorrect;

    cy.wrap(listGoal(data, { token }).catch((err) => err)).then(
      (res: ListGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify List Goal Failed when token expired', () => {
    token = dataListGoal.token.expired;

    cy.wrap(listGoal(data, { token }).catch((err) => err)).then(
      (res: ListGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify List Goal Failed when token empty', () => {
    token = dataListGoal.token.empty;

    cy.wrap(listGoal(data, { token }).catch((err) => err)).then(
      (res: ListGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  // it('Verify List Goal Failed when Tag list of zone not exist', () => {
  //   token = dataListGoal.token.correct;

  //   data.filterTagsList = dataListGoal.filterTagsList.notHaveResult;

  //   cy.wrap(listGoal(data, { token }).catch((err) => err)).then(
  //     (res: ListGoalRes.AsObject) => {
  //       expect(res.message).to.equal('Không có Ezone');
  //     }
  //   );
  // });
  it('Verify List Goal Failed when Key Word of zone not exist', () => {
    token = dataListGoal.token.correct;

    data.filterKeywords = dataListGoal.filterKeywords.notHaveResult;

    cy.wrap(listGoal(data, { token }).catch((err) => err)).then(
      (res: ListGoalRes.AsObject) => {
        console.log('🚀 ~ file: listGoal.cy.ts:106 ~ it ~ res:', res);
        expect(res.goalsList.length).to.equal(0);
      }
    );
  });
});
