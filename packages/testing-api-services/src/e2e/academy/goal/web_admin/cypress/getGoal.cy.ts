import {
  GetGoalReq,
  GetGoalRes,
} from '@api/academy/gen/ts/proto/goal/web_admin/goal_pb';
import { getGoal } from '../services/goal';
import { dataGetGoal } from '../data/getGoal';

let token = '';

let data: GetGoalReq.AsObject = {
  id: '',
};

describe('Goal - Get Goal', () => {
  it('Verify Get Goal Successfull', () => {
    token = dataGetGoal.token.correct;

    data.id = dataGetGoal.id.correct;

    cy.wrap(getGoal(data, { token }).catch((err) => err)).then(
      (res: GetGoalRes.AsObject) => {
        console.log('🚀 ~ file: getGoal.cy.ts:22 ~ it.only ~ res:', res);
        cy.wrap(res.goal.id).as('ID');
        cy.wrap(res.goal.name).as('Name');
        expect(res.goal.id).not.to.be.empty;
      }
    );
  });
  it('Verify Get Goal Failed when ID incorrect', () => {
    token = dataGetGoal.token.correct;

    data.id = dataGetGoal.id.incorrect;

    cy.wrap(getGoal(data, { token }).catch((err) => err)).then(
      (res: GetGoalRes.AsObject) => {
        expect(res.message).to.equal('GOAL_NOT_FOUND');
      }
    );
  });
  it('Verify Get Goal Failed when ID empty', () => {
    token = dataGetGoal.token.correct;

    data.id = dataGetGoal.id.empty;

    cy.wrap(getGoal(data, { token }).catch((err) => err)).then(
      (res: GetGoalRes.AsObject) => {
        expect(res.message).to.equal('Trường GOAL_ID là bắt buộc');
      }
    );
  });
  it('Verify Get Goal Failed when token incorrect', () => {
    token = dataGetGoal.token.incorrect;

    data.id = dataGetGoal.id.correct;

    cy.wrap(getGoal(data, { token }).catch((err) => err)).then(
      (res: GetGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Get Goal Failed when token expired', () => {
    token = dataGetGoal.token.expired;

    data.id = dataGetGoal.id.correct;

    cy.wrap(getGoal(data, { token }).catch((err) => err)).then(
      (res: GetGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Get Goal Failed when token empty', () => {
    token = dataGetGoal.token.empty;

    data.id = dataGetGoal.id.correct;

    cy.wrap(getGoal(data, { token }).catch((err) => err)).then(
      (res: GetGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
});
