import {
  UpdateZoneReq,
  UpdateZoneRes,
} from '@api/academy/gen/ts/proto/zone/web_admin/zone_pb';
import { updateZone } from '../services/zone';
import { dataUpdateZone } from '../data/updateZone';

let token = '';

let data: UpdateZoneReq.AsObject = {
  id: '',
  name: '',
  description: '',
  goalIdsList: [],
  coverName: '',
  status: 0,
  tagsList: [],
  address: '',
};

describe('Zone - Update Zone Successfull', () => {
  it('Verify Update Zone Successfull full fillment', () => {
    token = dataUpdateZone.token.correct;

    data.id = dataUpdateZone.id.correct;
    data.name = dataUpdateZone.name.valid;
    data.description = dataUpdateZone.description.valid;
    data.goalIdsList = dataUpdateZone.goalIdsList.correct;
    data.coverName = dataUpdateZone.coverName.valid;
    data.status = dataUpdateZone.status.valid.public;
    data.tagsList = dataUpdateZone.tagsList.valid;
    data.address = dataUpdateZone.address.valid;

    cy.wrap(updateZone(data, { token }).catch((err) => err)).then(
      (res: UpdateZoneRes.AsObject) => {
        console.log('🚀 ~ file: updateZone.cy.ts:36 ~ it.only ~ res:', res);
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
});

describe('Zone - Update Zone Failed', () => {
  it('Verify Update Zone Failed when update status to draft', () => {
    token = dataUpdateZone.token.correct;

    data.id = dataUpdateZone.id.correct;
    data.name = dataUpdateZone.name.valid;
    data.description = dataUpdateZone.description.valid;
    data.goalIdsList = dataUpdateZone.goalIdsList.correct;
    data.coverName = dataUpdateZone.coverName.valid;
    data.status = dataUpdateZone.status.valid.draft;
    data.tagsList = dataUpdateZone.tagsList.valid;
    data.address = dataUpdateZone.address.valid;

    cy.wrap(updateZone(data, { token }).catch((err) => err)).then(
      (res: UpdateZoneRes.AsObject) => {
        expect(res.message).to.equal('CANNOT_UPDATE_STATUS');
      }
    );
  });
  it('Verify Update Zone Failed when token incorrect', () => {
    token = dataUpdateZone.token.incorrect;

    data.id = dataUpdateZone.id.correct;
    data.name = dataUpdateZone.name.valid;
    data.description = dataUpdateZone.description.valid;
    data.goalIdsList = dataUpdateZone.goalIdsList.correct;
    data.coverName = dataUpdateZone.coverName.valid;
    data.status = dataUpdateZone.status.valid.draft;
    data.tagsList = dataUpdateZone.tagsList.valid;
    data.address = dataUpdateZone.address.valid;

    cy.wrap(updateZone(data, { token }).catch((err) => err)).then(
      (res: UpdateZoneRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Update Zone Failed when token expỉed', () => {
    token = dataUpdateZone.token.expired;

    data.id = dataUpdateZone.id.correct;
    data.name = dataUpdateZone.name.valid;
    data.description = dataUpdateZone.description.valid;
    data.goalIdsList = dataUpdateZone.goalIdsList.correct;
    data.coverName = dataUpdateZone.coverName.valid;
    data.status = dataUpdateZone.status.valid.draft;
    data.tagsList = dataUpdateZone.tagsList.valid;
    data.address = dataUpdateZone.address.valid;

    cy.wrap(updateZone(data, { token }).catch((err) => err)).then(
      (res: UpdateZoneRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Update Zone Failed when token empty', () => {
    token = dataUpdateZone.token.empty;

    data.id = dataUpdateZone.id.correct;
    data.name = dataUpdateZone.name.valid;
    data.description = dataUpdateZone.description.valid;
    data.goalIdsList = dataUpdateZone.goalIdsList.correct;
    data.coverName = dataUpdateZone.coverName.valid;
    data.status = dataUpdateZone.status.valid.draft;
    data.tagsList = dataUpdateZone.tagsList.valid;
    data.address = dataUpdateZone.address.valid;

    cy.wrap(updateZone(data, { token }).catch((err) => err)).then(
      (res: UpdateZoneRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });

  it('Verify Update Zone Failed when id incorrect', () => {
    token = dataUpdateZone.token.correct;

    data.id = dataUpdateZone.id.incorrect;
    data.name = dataUpdateZone.name.valid;
    data.description = dataUpdateZone.description.valid;
    data.goalIdsList = dataUpdateZone.goalIdsList.correct;
    data.coverName = dataUpdateZone.coverName.valid;
    data.status = dataUpdateZone.status.valid.draft;
    data.tagsList = dataUpdateZone.tagsList.valid;
    data.address = dataUpdateZone.address.valid;

    cy.wrap(updateZone(data, { token }).catch((err) => err)).then(
      (res: UpdateZoneRes.AsObject) => {
        expect(res.message).to.equal('ZONE_NOT_FOUND');
      }
    );
  });
  it('Verify Update Zone Failed when id empty', () => {
    token = dataUpdateZone.token.correct;

    data.id = dataUpdateZone.id.empty;
    data.name = dataUpdateZone.name.valid;
    data.description = dataUpdateZone.description.valid;
    data.goalIdsList = dataUpdateZone.goalIdsList.correct;
    data.coverName = dataUpdateZone.coverName.valid;
    data.status = dataUpdateZone.status.valid.draft;
    data.tagsList = dataUpdateZone.tagsList.valid;
    data.address = dataUpdateZone.address.valid;

    cy.wrap(updateZone(data, { token }).catch((err) => err)).then(
      (res: UpdateZoneRes.AsObject) => {
        expect(res.message).to.equal('Trường ZONE_ID là bắt buộc');
      }
    );
  });
});
