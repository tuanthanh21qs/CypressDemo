import {
  CreateGroupReq,
  CreateGroupRes,
} from '@api/academy/gen/ts/proto/group/web_admin/group_pb';
import { createGroup } from '../services/group';
import { dataCreateGroup } from '../data/createGroup';

let token = '';
let data: CreateGroupReq.AsObject = {
  name: '',
  role: 0,
  tagsList: [],
  description: '',
  status: 0,
};
describe('Group - Case Create Group Successfull', () => {
  it('Verify Create Group Successfull when fullfillment', () => {
    token = dataCreateGroup.token.correct;

    data.name = dataCreateGroup.name.valid;
    data.role = dataCreateGroup.role.admin;
    data.tagsList = dataCreateGroup.tagsList.valid;
    data.description = dataCreateGroup.description.valid;
    data.status = dataCreateGroup.status.draft;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Group Successfull when description empty', () => {
    token = dataCreateGroup.token.correct;

    data.name = dataCreateGroup.name.valid;
    data.role = dataCreateGroup.role.admin;
    data.tagsList = dataCreateGroup.tagsList.valid;
    data.description = dataCreateGroup.description.empty;
    data.status = dataCreateGroup.status.draft;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Group Successfull when Role is admin', () => {
    token = dataCreateGroup.token.correct;

    data.name = dataCreateGroup.name.valid;
    data.role = dataCreateGroup.role.admin;
    data.tagsList = dataCreateGroup.tagsList.valid;
    data.description = dataCreateGroup.description.valid;
    data.status = dataCreateGroup.status.draft;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Group Successfull when Role is teacher', () => {
    token = dataCreateGroup.token.correct;

    data.name = dataCreateGroup.name.valid;
    data.role = dataCreateGroup.role.teacher;
    data.tagsList = dataCreateGroup.tagsList.valid;
    data.description = dataCreateGroup.description.valid;
    data.status = dataCreateGroup.status.draft;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Group Successfull when Role is learner', () => {
    token = dataCreateGroup.token.correct;

    data.name = dataCreateGroup.name.valid;
    data.role = dataCreateGroup.role.leaner;
    data.tagsList = dataCreateGroup.tagsList.valid;
    data.description = dataCreateGroup.description.valid;
    data.status = dataCreateGroup.status.draft;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Group Successfull when Status is publish', () => {
    token = dataCreateGroup.token.correct;

    data.name = dataCreateGroup.name.valid;
    data.role = dataCreateGroup.role.admin;
    data.tagsList = dataCreateGroup.tagsList.valid;
    data.description = dataCreateGroup.description.valid;
    data.status = dataCreateGroup.status.publish;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Group Successfull when Status is unpublish', () => {
    token = dataCreateGroup.token.correct;

    data.name = dataCreateGroup.name.valid;
    data.role = dataCreateGroup.role.admin;
    data.tagsList = dataCreateGroup.tagsList.valid;
    data.description = dataCreateGroup.description.valid;
    data.status = dataCreateGroup.status.unpublish;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Group Successfull when Status is draft', () => {
    token = dataCreateGroup.token.correct;

    data.name = dataCreateGroup.name.valid;
    data.role = dataCreateGroup.role.admin;
    data.tagsList = dataCreateGroup.tagsList.valid;
    data.description = dataCreateGroup.description.valid;
    data.status = dataCreateGroup.status.draft;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
});

describe('Group - Case Create Group Failed', () => {
  it('Verify Create Group Failed when Name empty', () => {
    token = dataCreateGroup.token.correct;

    data.name = dataCreateGroup.name.empty;
    data.role = dataCreateGroup.role.admin;
    data.tagsList = dataCreateGroup.tagsList.valid;
    data.description = dataCreateGroup.description.valid;
    data.status = dataCreateGroup.status.draft;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        console.log('🚀 ~ file: createGroup.cy.ts:159 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createGroup.cy.ts:159 ~ it.only ~ res:', res);
        expect(res.message).to.equal('Trường GROUP_NAME là bắt buộc');
      }
    );
  });

  it('Verify Create Group Failed when Role incorrect', () => {
    token = dataCreateGroup.token.correct;

    data.name = dataCreateGroup.name.valid;
    data.role = dataCreateGroup.role.incorrect;
    data.tagsList = dataCreateGroup.tagsList.valid;
    data.description = dataCreateGroup.description.valid;
    data.status = dataCreateGroup.status.draft;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        console.log('🚀 ~ file: createGroup.cy.ts:159 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createGroup.cy.ts:159 ~ it.only ~ res:', res);
        expect(res.message).to.equal('GROUP_ROLE_IS_INVALID');
      }
    );
  });
  it('Verify Create Group Failed when Role invalid', () => {
    token = dataCreateGroup.token.correct;

    data.name = dataCreateGroup.name.valid;
    data.role = dataCreateGroup.role.invalid;
    data.tagsList = dataCreateGroup.tagsList.valid;
    data.description = dataCreateGroup.description.valid;
    data.status = dataCreateGroup.status.draft;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        console.log('🚀 ~ file: createGroup.cy.ts:159 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createGroup.cy.ts:159 ~ it.only ~ res:', res);
        expect(res.message).to.equal('GROUP_ROLE_IS_INVALID');
      }
    );
  });

  it('Verify Create Group Failed when Tag list empty', () => {
    token = dataCreateGroup.token.correct;

    data.name = dataCreateGroup.name.valid;
    data.role = dataCreateGroup.role.admin;
    data.tagsList = dataCreateGroup.tagsList.empty;
    data.description = dataCreateGroup.description.valid;
    data.status = dataCreateGroup.status.draft;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        console.log('🚀 ~ file: createGroup.cy.ts:159 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createGroup.cy.ts:159 ~ it.only ~ res:', res);
        expect(res.message).to.equal('Trường GROUP_TAG là bắt buộc');
      }
    );
  });

  it('Verify Create Group Failed when status incorrect', () => {
    token = dataCreateGroup.token.correct;

    data.name = dataCreateGroup.name.valid;
    data.role = dataCreateGroup.role.admin;
    data.tagsList = dataCreateGroup.tagsList.valid;
    data.description = dataCreateGroup.description.valid;
    data.status = dataCreateGroup.status.incorrect;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        console.log('🚀 ~ file: createGroup.cy.ts:159 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createGroup.cy.ts:159 ~ it.only ~ res:', res);
        expect(res.message).to.equal('STATUS_IS_INVALID');
      }
    );
  });
  it('Verify Create Group Failed when status invalid', () => {
    token = dataCreateGroup.token.correct;

    data.name = dataCreateGroup.name.valid;
    data.role = dataCreateGroup.role.admin;
    data.tagsList = dataCreateGroup.tagsList.valid;
    data.description = dataCreateGroup.description.valid;
    data.status = dataCreateGroup.status.invalid;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        console.log('🚀 ~ file: createGroup.cy.ts:159 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createGroup.cy.ts:159 ~ it.only ~ res:', res);
        expect(res.message).to.equal('STATUS_IS_INVALID');
      }
    );
  });

  it('Verify Create Group Failed when token incorrect', () => {
    token = dataCreateGroup.token.incorrect;

    data.name = dataCreateGroup.name.valid;
    data.role = dataCreateGroup.role.admin;
    data.tagsList = dataCreateGroup.tagsList.valid;
    data.description = dataCreateGroup.description.valid;
    data.status = dataCreateGroup.status.draft;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Create Group Failed when token expired', () => {
    token = dataCreateGroup.token.expired;

    data.name = dataCreateGroup.name.valid;
    data.role = dataCreateGroup.role.admin;
    data.tagsList = dataCreateGroup.tagsList.valid;
    data.description = dataCreateGroup.description.valid;
    data.status = dataCreateGroup.status.draft;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Create Group Failed when token empty', () => {
    token = dataCreateGroup.token.empty;

    data.name = dataCreateGroup.name.valid;
    data.role = dataCreateGroup.role.admin;
    data.tagsList = dataCreateGroup.tagsList.valid;
    data.description = dataCreateGroup.description.valid;
    data.status = dataCreateGroup.status.draft;

    cy.wrap(createGroup(data, { token }).catch((err) => err)).then(
      (res: CreateGroupRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
});
