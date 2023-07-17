import {
  DeleteGoalReq,
  DeleteGoalRes,
} from '@api/academy/gen/ts/proto/goal/web_admin/goal_pb';
import { deleteGoal } from '../services/goal';
import { dataDeleteGoal } from '../data/deleteGoal';

let token = '';

let data: DeleteGoalReq.AsObject = {
  id: '',
};
describe('Goal - Delete Goal', () => {
  it('Verify Delete Goal Successfull', () => {
    token = dataDeleteGoal.token.correct;

    data.id = dataDeleteGoal.id.correct;

    cy.wrap(deleteGoal(data, { token }).catch((err) => err)).then(
      (res: DeleteGoalRes.AsObject) => {
        expect(res).to.be.empty;
      }
    );
  });
  it('Verify Delete Goal when id incorrect', () => {
    token = dataDeleteGoal.token.correct;

    data.id = dataDeleteGoal.id.incorrect;

    cy.wrap(deleteGoal(data, { token }).catch((err) => err)).then(
      (res: DeleteGoalRes.AsObject) => {
        expect(res.message).to.equal('GOAL_NOT_FOUND');
      }
    );
  });
  it('Verify Delete Goal when id empty', () => {
    token = dataDeleteGoal.token.correct;

    data.id = dataDeleteGoal.id.empty;

    cy.wrap(deleteGoal(data, { token }).catch((err) => err)).then(
      (res: DeleteGoalRes.AsObject) => {
        expect(res.message).to.equal('Trường GOAL_ID là bắt buộc');
      }
    );
  });
  it('Verify Delete Goal when Token incorrect', () => {
    token = dataDeleteGoal.token.incorrect;

    data.id = dataDeleteGoal.id.correct;
    cy.wrap(deleteGoal(data, { token }).catch((err) => err)).then(
      (res: DeleteGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Delete Goal when Token expired', () => {
    token = dataDeleteGoal.token.expired;

    data.id = dataDeleteGoal.id.correct;

    cy.wrap(deleteGoal(data, { token }).catch((err) => err)).then(
      (res: DeleteGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Delete Goal when Token empty', () => {
    token = dataDeleteGoal.token.empty;

    data.id = dataDeleteGoal.id.correct;

    cy.wrap(deleteGoal(data, { token }).catch((err) => err)).then(
      (res: DeleteGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
});
