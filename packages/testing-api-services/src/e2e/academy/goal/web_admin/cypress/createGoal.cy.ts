import {
  CreateGoalReq,
  CreateGoalRes,
} from '@api/academy/gen/ts/proto/goal/web_admin/goal_pb';
import { createGoal } from '../services/goal';
import { dataCreatGoal } from '../data/createGoal';

let token = '';

let data: CreateGoalReq.AsObject = {
  name: '',
  description: '',
  sessionIdsList: [],
  startDate: 0,
  endDate: 0,
  tagsList: [],
  status: 0,
};

describe('Goal - Happy Case', () => {
  it.only('Verify Create Goal Successfull when status draft', () => {
    token = dataCreatGoal.token.correct;

    data.name = dataCreatGoal.name.valid;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.valid;
    data.startDate = dataCreatGoal.startDate.valid;
    data.endDate = dataCreatGoal.endDate.valid;
    data.tagsList = dataCreatGoal.tagsList.valid;
    data.status = dataCreatGoal.status.draft;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        console.log('🚀 ~ file: createGoal.cy.ts:34 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createGoal.cy.ts:34 ~ it.only ~ res:', res);
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Goal Successfull when status publish', () => {
    token = dataCreatGoal.token.correct;

    data.name = dataCreatGoal.name.valid;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.valid;
    data.startDate = dataCreatGoal.startDate.valid;
    data.endDate = dataCreatGoal.endDate.valid;
    data.tagsList = dataCreatGoal.tagsList.valid;
    data.status = dataCreatGoal.status.publish;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Goal Successfull when status unPublish', () => {
    token = dataCreatGoal.token.correct;

    data.name = dataCreatGoal.name.valid;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.valid;
    data.startDate = dataCreatGoal.startDate.valid;
    data.endDate = dataCreatGoal.endDate.valid;
    data.tagsList = dataCreatGoal.tagsList.valid;
    data.status = dataCreatGoal.status.unPublish;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });

  it('Verify Create Goal Failed when Name empty ', () => {
    token = dataCreatGoal.token.correct;

    data.name = dataCreatGoal.name.empty;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.valid;
    data.startDate = dataCreatGoal.startDate.valid;
    data.endDate = dataCreatGoal.endDate.valid;
    data.tagsList = dataCreatGoal.tagsList.valid;
    data.status = dataCreatGoal.status.draft;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        expect(res.message).to.equal('Trường GOAL_NAME là bắt buộc');
      }
    );
  });
  it('Verify Create Goal Successfull when Name exist ', () => {
    token = dataCreatGoal.token.correct;

    data.name = dataCreatGoal.name.exist;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.valid;
    data.startDate = dataCreatGoal.startDate.valid;
    data.endDate = dataCreatGoal.endDate.valid;
    data.tagsList = dataCreatGoal.tagsList.valid;
    data.status = dataCreatGoal.status.draft;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });

  it('Verify Create Goal Successfull when Session empty ', () => {
    token = dataCreatGoal.token.correct;

    data.name = dataCreatGoal.name.valid;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.empty;
    data.startDate = dataCreatGoal.startDate.valid;
    data.endDate = dataCreatGoal.endDate.valid;
    data.tagsList = dataCreatGoal.tagsList.valid;
    data.status = dataCreatGoal.status.draft;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Goal Failed when Session not exist ', () => {
    token = dataCreatGoal.token.correct;

    data.name = dataCreatGoal.name.valid;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.notExist;
    data.startDate = dataCreatGoal.startDate.valid;
    data.endDate = dataCreatGoal.endDate.valid;
    data.tagsList = dataCreatGoal.tagsList.valid;
    data.status = dataCreatGoal.status.draft;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        expect(res.message).to.equal('Không tìm thấy lớp học');
      }
    );
  });

  it('Verify Create Goal Failed when Tag empty ', () => {
    token = dataCreatGoal.token.correct;

    data.name = dataCreatGoal.name.valid;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.notExist;
    data.startDate = dataCreatGoal.startDate.valid;
    data.endDate = dataCreatGoal.endDate.valid;
    data.tagsList = dataCreatGoal.tagsList.empty;
    data.status = dataCreatGoal.status.draft;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        console.log('🚀 ~ file: createGoal.cy.ts:145 ~ it ~ res:', res);
        expect(res.message).to.equal('Trường GOAL_TAG là bắt buộc');
      }
    );
  });

  it('Verify Create Goal Failed when StartDate empty ', () => {
    token = dataCreatGoal.token.correct;

    data.name = dataCreatGoal.name.valid;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.valid;
    data.startDate = dataCreatGoal.startDate.empty;
    data.endDate = dataCreatGoal.endDate.valid;
    data.tagsList = dataCreatGoal.tagsList.valid;
    data.status = dataCreatGoal.status.draft;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        console.log('🚀 ~ file: createGoal.cy.ts:165 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createGoal.cy.ts:165 ~ it.only ~ res:', res);
        expect(res.message).to.equal('Trường GOAL_START_DATE là bắt buộc');
      }
    );
  });
  it('Verify Create Goal Failed when EndDate empty ', () => {
    token = dataCreatGoal.token.correct;

    data.name = dataCreatGoal.name.valid;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.valid;
    data.startDate = dataCreatGoal.startDate.valid;
    data.endDate = dataCreatGoal.endDate.empty;
    data.tagsList = dataCreatGoal.tagsList.valid;
    data.status = dataCreatGoal.status.draft;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        expect(res.message).to.equal('Trường GOAL_END_DATE là bắt buộc');
      }
    );
  });
  it('Verify Create Goal Failed when EndDate less than StartDate ', () => {
    token = dataCreatGoal.token.correct;

    data.name = dataCreatGoal.name.valid;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.valid;
    data.startDate = dataCreatGoal.startDate.valid;
    data.endDate = dataCreatGoal.endDate.lessThanStartDate;
    data.tagsList = dataCreatGoal.tagsList.valid;
    data.status = dataCreatGoal.status.draft;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        expect(res.message).to.have('GOAL_END_DATE phải lớn hơn hoặc bằng');
      }
    );
  });

  it('Verify Create Goal Failed when Status empty ', () => {
    token = dataCreatGoal.token.correct;

    data.name = dataCreatGoal.name.valid;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.valid;
    data.startDate = dataCreatGoal.startDate.valid;
    data.endDate = dataCreatGoal.endDate.valid;
    data.tagsList = dataCreatGoal.tagsList.valid;
    data.status = dataCreatGoal.status.empty;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        expect(res.message).to.equal('STATUS_IS_INVALID');
      }
    );
  });
  it('Verify Create Goal Failed when Status invalid ', () => {
    token = dataCreatGoal.token.correct;

    data.name = dataCreatGoal.name.valid;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.valid;
    data.startDate = dataCreatGoal.startDate.valid;
    data.endDate = dataCreatGoal.endDate.valid;
    data.tagsList = dataCreatGoal.tagsList.valid;
    data.status = dataCreatGoal.status.invalid;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        expect(res.message).to.equal('STATUS_IS_INVALID');
      }
    );
  });
  it('Verify Create Goal Failed when Status incorrect ', () => {
    token = dataCreatGoal.token.correct;

    data.name = dataCreatGoal.name.valid;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.valid;
    data.startDate = dataCreatGoal.startDate.valid;
    data.endDate = dataCreatGoal.endDate.valid;
    data.tagsList = dataCreatGoal.tagsList.valid;
    data.status = dataCreatGoal.status.incorrect;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        expect(res.message).to.equal('STATUS_IS_INVALID');
      }
    );
  });

  it('Verify Create Goal Failed when Token incorrect ', () => {
    token = dataCreatGoal.token.incorrect;

    data.name = dataCreatGoal.name.valid;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.valid;
    data.startDate = dataCreatGoal.startDate.valid;
    data.endDate = dataCreatGoal.endDate.valid;
    data.tagsList = dataCreatGoal.tagsList.valid;
    data.status = dataCreatGoal.status.draft;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Create Goal Failed when Token expired ', () => {
    token = dataCreatGoal.token.expired;

    data.name = dataCreatGoal.name.valid;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.valid;
    data.startDate = dataCreatGoal.startDate.valid;
    data.endDate = dataCreatGoal.endDate.valid;
    data.tagsList = dataCreatGoal.tagsList.valid;
    data.status = dataCreatGoal.status.draft;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Create Goal Failed when Token empty ', () => {
    token = dataCreatGoal.token.empty;

    data.name = dataCreatGoal.name.valid;
    data.description = dataCreatGoal.description.valid;
    data.sessionIdsList = dataCreatGoal.sessionIdsList.valid;
    data.startDate = dataCreatGoal.startDate.valid;
    data.endDate = dataCreatGoal.endDate.valid;
    data.tagsList = dataCreatGoal.tagsList.valid;
    data.status = dataCreatGoal.status.draft;

    cy.wrap(createGoal(data, { token }).catch((err) => err)).then(
      (res: CreateGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
});
