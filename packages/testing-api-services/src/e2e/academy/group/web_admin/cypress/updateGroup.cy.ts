import {
  UpdateGroupReq,
  UpdateGroupRes,
} from '@api/academy/gen/ts/proto/group/web_admin/group_pb';
import { updateGroup } from '../services/group';
import { dataUpdateGroup } from '../data/updateGroup';

let token = '';
let data: UpdateGroupReq.AsObject = {
  id: '',
  name: '',
  role: 0,
  tagsList: [],
  description: '',
  status: 0,
};
describe('Group - Case Update Group Successfull', () => {
  it('Verify Update Group fullfillment Successfull', () => {
    token = dataUpdateGroup.token.correct;

    data.id = dataUpdateGroup.id.correct;
    data.name = dataUpdateGroup.name.valid;
    data.role = dataUpdateGroup.role.leaner;
    data.tagsList = dataUpdateGroup.tagsList.valid;
    data.description = dataUpdateGroup.description.valid;
    data.status = dataUpdateGroup.status.draft;

    cy.wrap(updateGroup(data, { token }).catch((err) => err)).then(
      (res: UpdateGroupRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
});

describe('Group - Case Update Group Failed', () => {
  it.only('Verify Update Group Failed when Update Role', () => {
    token = dataUpdateGroup.token.correct;

    // Status publish thì không update được role

    data.id = dataUpdateGroup.id.correct;
    data.name = dataUpdateGroup.name.valid;
    data.role = dataUpdateGroup.role.admin;
    data.tagsList = dataUpdateGroup.tagsList.valid;
    data.description = dataUpdateGroup.description.valid;
    data.status = dataUpdateGroup.status.publish;

    cy.wrap(updateGroup(data, { token }).catch((err) => err)).then(
      (res: UpdateGroupRes.AsObject) => {
        console.log('🚀 ~ file: updateGroup.cy.ts:50 ~ it ~ res:', data);
        console.log('🚀 ~ file: updateGroup.cy.ts:50 ~ it ~ res:', res);
        expect(res.message).to.equal('Lỗi');
      }
    );
  });

  it('Verify Update Group Failed when ID incorrect', () => {
    token = dataUpdateGroup.token.correct;

    data.id = dataUpdateGroup.id.incorrect;
    data.name = dataUpdateGroup.name.valid;
    data.role = dataUpdateGroup.role.leaner;
    data.tagsList = dataUpdateGroup.tagsList.valid;
    data.description = dataUpdateGroup.description.valid;
    data.status = dataUpdateGroup.status.draft;
  });
  it('Verify Update Group Failed when ID empty', () => {
    token = dataUpdateGroup.token.correct;

    data.id = dataUpdateGroup.id.empty;
    data.name = dataUpdateGroup.name.valid;
    data.role = dataUpdateGroup.role.leaner;
    data.tagsList = dataUpdateGroup.tagsList.valid;
    data.description = dataUpdateGroup.description.valid;
    data.status = dataUpdateGroup.status.draft;
  });

  it('Verify Update Group Failed when Name empty', () => {
    token = dataUpdateGroup.token.correct;

    data.id = dataUpdateGroup.id.correct;
    data.name = dataUpdateGroup.name.empty;
    data.role = dataUpdateGroup.role.leaner;
    data.tagsList = dataUpdateGroup.tagsList.valid;
    data.description = dataUpdateGroup.description.valid;
    data.status = dataUpdateGroup.status.draft;
  });

  it('Verify Update Group Failed when Tag List empty', () => {
    token = dataUpdateGroup.token.correct;

    data.id = dataUpdateGroup.id.correct;
    data.name = dataUpdateGroup.name.valid;
    data.role = dataUpdateGroup.role.leaner;
    data.tagsList = dataUpdateGroup.tagsList.empty;
    data.description = dataUpdateGroup.description.valid;
    data.status = dataUpdateGroup.status.draft;
  });

  it('Verify Update Group Failed when Status incorrect', () => {
    token = dataUpdateGroup.token.correct;

    data.id = dataUpdateGroup.id.correct;
    data.name = dataUpdateGroup.name.valid;
    data.role = dataUpdateGroup.role.leaner;
    data.tagsList = dataUpdateGroup.tagsList.valid;
    data.description = dataUpdateGroup.description.valid;
    data.status = dataUpdateGroup.status.incorrect;
  });

  it('Verify Update Group Failed when Token incorrect', () => {
    token = dataUpdateGroup.token.incorrect;

    data.id = dataUpdateGroup.id.correct;
    data.name = dataUpdateGroup.name.valid;
    data.role = dataUpdateGroup.role.leaner;
    data.tagsList = dataUpdateGroup.tagsList.valid;
    data.description = dataUpdateGroup.description.valid;
    data.status = dataUpdateGroup.status.incorrect;
  });
  it('Verify Update Group Failed when Token expired', () => {
    token = dataUpdateGroup.token.expired;

    data.id = dataUpdateGroup.id.correct;
    data.name = dataUpdateGroup.name.valid;
    data.role = dataUpdateGroup.role.leaner;
    data.tagsList = dataUpdateGroup.tagsList.valid;
    data.description = dataUpdateGroup.description.valid;
    data.status = dataUpdateGroup.status.incorrect;
  });
  it('Verify Update Group Failed when Token empty', () => {
    token = dataUpdateGroup.token.empty;

    data.id = dataUpdateGroup.id.correct;
    data.name = dataUpdateGroup.name.valid;
    data.role = dataUpdateGroup.role.leaner;
    data.tagsList = dataUpdateGroup.tagsList.valid;
    data.description = dataUpdateGroup.description.valid;
    data.status = dataUpdateGroup.status.incorrect;
  });
});
