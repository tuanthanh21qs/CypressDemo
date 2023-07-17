import {
  UpdateGoalReq,
  UpdateGoalRes,
} from '@api/academy/gen/ts/proto/goal/web_admin/goal_pb';
import { updateGoal } from '../services/goal';
import { dataUpdateGoal } from '../data/updateGoal';

let token = '';

let data: UpdateGoalReq.AsObject = {
  id: '',
  name: '',
  description: '',
  sessionIdsList: [],
  startDate: 0,
  endDate: 0,
  tagsList: [],
  status: 0,
};

describe('Goal - Update Goal', () => {
  it('Verify Update Goal Successfull when ID correct', () => {
    token = dataUpdateGoal.token.correct;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.draft;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Update Goal Failed when ID incorrect', () => {
    token = dataUpdateGoal.token.correct;

    data.id = dataUpdateGoal.id.incorrect;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.draft;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        expect(res.message).to.equal('GOAL_NOT_FOUND');
      }
    );
  });
  it('Verify Update Goal Failed when ID empty', () => {
    token = dataUpdateGoal.token.correct;

    data.id = dataUpdateGoal.id.empty;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.draft;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        expect(res.message).to.equal('Trường GOAL_ID là bắt buộc');
      }
    );
  });

  it('Verify Update Goal Successfull when status draft', () => {
    token = dataUpdateGoal.token.correct;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.draft;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Update Goal Successfull when status publish', () => {
    token = dataUpdateGoal.token.correct;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.publish;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Update Goal Successfull when status unPublish', () => {
    token = dataUpdateGoal.token.correct;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.unPublish;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });

  it('Verify Update Goal Failed when Name empty ', () => {
    token = dataUpdateGoal.token.correct;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.empty;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.draft;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Update Goal Failed when Name exist ', () => {
    token = dataUpdateGoal.token.correct;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.exist;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.draft;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });

  it('Verify Update Goal Failed when Session empty ', () => {
    token = dataUpdateGoal.token.correct;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.empty;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.draft;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Update Goal Failed when Session not exist ', () => {
    token = dataUpdateGoal.token.correct;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.notExist;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.draft;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        expect(res.message).to.equal('Không tìm thấy lớp học');
      }
    );
  });

  it('Verify Update Goal Failed when StartDate empty ', () => {
    token = dataUpdateGoal.token.correct;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.empty;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.draft;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        expect(res.message).to.equal(
          ' GOAL_START_DATE phải lớn hơn hoặc bằng 1683702987188'
        );
      }
    );
  });
  it('Verify Update Goal Failed when EndDate empty ', () => {
    token = dataUpdateGoal.token.correct;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.empty;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.draft;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'GOAL_END_DATE phải lớn hơn hoặc bằng 1686294992000'
        );
      }
    );
  });
  it('Verify Update Goal Failed when EndDate less than StartDate ', () => {
    token = dataUpdateGoal.token.correct;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.lessThanStartDate;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.draft;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'GOAL_END_DATE phải lớn hơn hoặc bằng 1686294992000'
        );
      }
    );
  });

  it('Verify Update Goal Failed when Status empty ', () => {
    token = dataUpdateGoal.token.correct;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.empty;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        expect(res.message).to.equal('STATUS_IS_INVALID');
      }
    );
  });
  it('Verify Update Goal Failed when Status invalid ', () => {
    token = dataUpdateGoal.token.correct;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.invalid;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        expect(res.message).to.equal('STATUS_IS_INVALID');
      }
    );
  });
  it('Verify Update Goal Failed when Status incorrect ', () => {
    token = dataUpdateGoal.token.correct;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.incorrect;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        expect(res.message).to.equal('STATUS_IS_INVALID');
      }
    );
  });

  it('Verify Update Goal Failed when Token incorrect ', () => {
    token = dataUpdateGoal.token.incorrect;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.draft;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Update Goal Failed when Token expired ', () => {
    token = dataUpdateGoal.token.expired;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.draft;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Update Goal Failed when Token empty ', () => {
    token = dataUpdateGoal.token.empty;

    data.id = dataUpdateGoal.id.correct;
    data.name = dataUpdateGoal.name.valid;
    data.description = dataUpdateGoal.description.valid;
    data.sessionIdsList = dataUpdateGoal.sessionIdsList.valid;
    data.startDate = dataUpdateGoal.startDate.valid;
    data.endDate = dataUpdateGoal.endDate.valid;
    data.tagsList = dataUpdateGoal.tagsList.valid;
    data.status = dataUpdateGoal.status.draft;

    cy.wrap(updateGoal(data, { token }).catch((err) => err)).then(
      (res: UpdateGoalRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
});
