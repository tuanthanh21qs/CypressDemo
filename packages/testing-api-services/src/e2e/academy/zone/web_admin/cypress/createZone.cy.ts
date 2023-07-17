import {
  CreateZoneReq,
  CreateZoneRes,
} from '@api/academy/gen/ts/proto/zone/web_admin/zone_pb';
import { createZone } from '../services/zone';
import { dataCreateZone } from '../data/createZone';

let token = '';

let data: CreateZoneReq.AsObject = {
  name: '',
  description: '',
  goalIdsList: [],
  coverName: '',
  status: 0,
  tagsList: [],
  address: '',
};

describe('Zone - Create Zone Success', () => {
  it('Verify Create Zone Success when fill fullment', () => {
    token = dataCreateZone.token.correct;

    data.name = dataCreateZone.name.valid;
    data.description = dataCreateZone.description.valid;
    data.goalIdsList = dataCreateZone.goalIdsList.correct;
    data.coverName = dataCreateZone.coverName.valid;
    data.status = dataCreateZone.status.valid.draft;
    data.tagsList = dataCreateZone.tagsList.valid;
    data.address = dataCreateZone.address.valid;

    cy.wrap(createZone(data, { token }).catch((err) => err)).then(
      (res: CreateZoneRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Zone Success when slug empty', () => {
    token = dataCreateZone.token.correct;

    data.name = dataCreateZone.name.valid;

    data.description = dataCreateZone.description.valid;
    data.goalIdsList = dataCreateZone.goalIdsList.correct;
    data.coverName = dataCreateZone.coverName.valid;
    data.status = dataCreateZone.status.valid.draft;
    data.tagsList = dataCreateZone.tagsList.valid;
    data.address = dataCreateZone.address.valid;

    cy.wrap(createZone(data, { token }).catch((err) => err)).then(
      (res: CreateZoneRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Zone Success when description empty', () => {
    token = dataCreateZone.token.correct;

    data.name = dataCreateZone.name.valid;
    data.description = dataCreateZone.description.empty;
    data.goalIdsList = dataCreateZone.goalIdsList.correct;
    data.coverName = dataCreateZone.coverName.valid;
    data.status = dataCreateZone.status.valid.draft;
    data.tagsList = dataCreateZone.tagsList.valid;
    data.address = dataCreateZone.address.valid;

    cy.wrap(createZone(data, { token }).catch((err) => err)).then(
      (res: CreateZoneRes.AsObject) => {
        console.log('🚀 ~ file: createZone.cy.ts:74 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createZone.cy.ts:74 ~ it.only ~ res:', res);
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Zone Success when cover Name empty', () => {
    token = dataCreateZone.token.correct;

    data.name = dataCreateZone.name.valid;
    data.description = dataCreateZone.description.valid;
    data.goalIdsList = dataCreateZone.goalIdsList.correct;
    data.coverName = dataCreateZone.coverName.empty;
    data.status = dataCreateZone.status.valid.draft;
    data.tagsList = dataCreateZone.tagsList.valid;
    data.address = dataCreateZone.address.valid;

    cy.wrap(createZone(data, { token }).catch((err) => err)).then(
      (res: CreateZoneRes.AsObject) => {
        console.log('🚀 ~ file: createZone.cy.ts:95 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createZone.cy.ts:95 ~ it.only ~ res:', res);
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Zone Success when tagsList empty', () => {
    token = dataCreateZone.token.correct;

    data.name = dataCreateZone.name.valid;
    data.description = dataCreateZone.description.valid;
    data.goalIdsList = dataCreateZone.goalIdsList.correct;
    data.coverName = dataCreateZone.coverName.valid;
    data.status = dataCreateZone.status.valid.draft;
    data.tagsList = dataCreateZone.tagsList.empty;
    data.address = dataCreateZone.address.valid;

    cy.wrap(createZone(data, { token }).catch((err) => err)).then(
      (res: CreateZoneRes.AsObject) => {
        console.log('🚀 ~ file: createZone.cy.ts:116 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createZone.cy.ts:116 ~ it.only ~ res:', res);
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Zone Success when address empty', () => {
    token = dataCreateZone.token.correct;

    data.name = dataCreateZone.name.valid;
    data.description = dataCreateZone.description.valid;
    data.goalIdsList = dataCreateZone.goalIdsList.correct;
    data.coverName = dataCreateZone.coverName.valid;
    data.status = dataCreateZone.status.valid.draft;
    data.tagsList = dataCreateZone.tagsList.valid;
    data.address = dataCreateZone.address.empty;

    cy.wrap(createZone(data, { token }).catch((err) => err)).then(
      (res: CreateZoneRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Zone Success when status is publish', () => {
    token = dataCreateZone.token.correct;

    data.name = dataCreateZone.name.valid;
    data.description = dataCreateZone.description.valid;
    data.goalIdsList = dataCreateZone.goalIdsList.correct;
    data.coverName = dataCreateZone.coverName.valid;
    data.status = dataCreateZone.status.valid.public;
    data.tagsList = dataCreateZone.tagsList.valid;
    data.address = dataCreateZone.address.valid;

    cy.wrap(createZone(data, { token }).catch((err) => err)).then(
      (res: CreateZoneRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Zone Success when status is unpublish', () => {
    token = dataCreateZone.token.correct;

    data.name = dataCreateZone.name.valid;
    data.description = dataCreateZone.description.valid;
    data.goalIdsList = dataCreateZone.goalIdsList.correct;
    data.coverName = dataCreateZone.coverName.valid;
    data.status = dataCreateZone.status.valid.unPublish;
    data.tagsList = dataCreateZone.tagsList.valid;
    data.address = dataCreateZone.address.valid;

    cy.wrap(createZone(data, { token }).catch((err) => err)).then(
      (res: CreateZoneRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Zone Success when status is draft', () => {
    token = dataCreateZone.token.correct;

    data.name = dataCreateZone.name.valid;
    data.description = dataCreateZone.description.valid;
    data.goalIdsList = dataCreateZone.goalIdsList.correct;
    data.coverName = dataCreateZone.coverName.valid;
    data.status = dataCreateZone.status.valid.draft;
    data.tagsList = dataCreateZone.tagsList.valid;
    data.address = dataCreateZone.address.valid;

    cy.wrap(createZone(data, { token }).catch((err) => err)).then(
      (res: CreateZoneRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
});

describe('Zone - Create Zone Failed', () => {
  it('Verify Create Zone Failed when Name empty', () => {
    token = dataCreateZone.token.correct;

    data.name = dataCreateZone.name.empty;
    data.description = dataCreateZone.description.valid;
    data.goalIdsList = dataCreateZone.goalIdsList.correct;
    data.coverName = dataCreateZone.coverName.valid;
    data.status = dataCreateZone.status.valid.draft;
    data.tagsList = dataCreateZone.tagsList.valid;
    data.address = dataCreateZone.address.valid;

    cy.wrap(createZone(data, { token }).catch((err) => err)).then(
      (res: CreateZoneRes.AsObject) => {
        expect(res.message).to.equal('Trường ZONE_NAME là bắt buộc');
      }
    );
  });
  // it.only('Verify Create Zone Failed when goalIdsList empty', () => {
  //   token = dataCreateZone.token.correct;

  //   data.name = dataCreateZone.name.valid;
  //   data.slug = dataCreateZone.slug.valid;
  //   data.description = dataCreateZone.description.valid;
  //   data.goalIdsList = dataCreateZone.goalIdsList.empty;
  //   data.coverName = dataCreateZone.coverName.valid;
  //   data.status = dataCreateZone.status.valid.draft;
  //   data.tagsList = dataCreateZone.tagsList.valid;
  //   data.address = dataCreateZone.address.valid;

  //   cy.wrap(createZone(data, { token }).catch((err) => err)).then(
  //     (res: CreateZoneRes.AsObject) => {
  //       console.log('🚀 ~ file: createZone.cy.ts:234 ~ it.only ~ res:', data);
  //       console.log('🚀 ~ file: createZone.cy.ts:234 ~ it.only ~ res:', res);
  //       expect(res.message).to.equal('Lỗi');
  //     }
  //   );
  // });
  it('Verify Create Zone Failed when goalIdsList incorrect', () => {
    token = dataCreateZone.token.correct;

    data.name = dataCreateZone.name.valid;
    data.description = dataCreateZone.description.valid;
    data.goalIdsList = dataCreateZone.goalIdsList.incorrect;
    data.coverName = dataCreateZone.coverName.valid;
    data.status = dataCreateZone.status.valid.draft;
    data.tagsList = dataCreateZone.tagsList.valid;
    data.address = dataCreateZone.address.valid;

    cy.wrap(createZone(data, { token }).catch((err) => err)).then(
      (res: CreateZoneRes.AsObject) => {
        expect(res.message).to.equal('GOAL_NOT_FOUND');
      }
    );
  });
  it('Verify Create Zone Failed when status null', () => {
    token = dataCreateZone.token.correct;

    data.name = dataCreateZone.name.valid;
    data.description = dataCreateZone.description.valid;
    data.goalIdsList = dataCreateZone.goalIdsList.correct;
    data.coverName = dataCreateZone.coverName.valid;
    data.status = dataCreateZone.status.null;
    data.tagsList = dataCreateZone.tagsList.valid;
    data.address = dataCreateZone.address.valid;

    cy.wrap(createZone(data, { token }).catch((err) => err)).then(
      (res: CreateZoneRes.AsObject) => {
        expect(res.message).to.equal('STATUS_IS_INVALID');
      }
    );
  });
  it('Verify Create Zone Failed when status incorrect', () => {
    token = dataCreateZone.token.correct;

    data.name = dataCreateZone.name.valid;
    data.description = dataCreateZone.description.valid;
    data.goalIdsList = dataCreateZone.goalIdsList.correct;
    data.coverName = dataCreateZone.coverName.valid;
    data.status = dataCreateZone.status.incorrect;
    data.tagsList = dataCreateZone.tagsList.valid;
    data.address = dataCreateZone.address.valid;

    cy.wrap(createZone(data, { token }).catch((err) => err)).then(
      (res: CreateZoneRes.AsObject) => {
        expect(res.message).to.equal('STATUS_IS_INVALID');
      }
    );
  });
  // it.only('Verify Create Zone Failed when status invalid', () => {
  //   token = dataCreateZone.token.correct;

  //   data.name = dataCreateZone.name.empty;
  //   data.slug = dataCreateZone.slug.valid;
  //   data.description = dataCreateZone.description.valid;
  //   data.goalIdsList = dataCreateZone.goalIdsList.correct;
  //   data.coverName = dataCreateZone.coverName.invalid;
  //   data.status = dataCreateZone.status.valid.draft;
  //   data.tagsList = dataCreateZone.tagsList.valid;
  //   data.address = dataCreateZone.address.valid;

  //   cy.wrap(createZone(data, { token }).catch((err) => err)).then(
  //     (res: CreateZoneRes.AsObject) => {
  //       console.log('🚀 ~ file: createZone.cy.ts:308 ~ it.only ~ res:', data);
  //       console.log('🚀 ~ file: createZone.cy.ts:308 ~ it.only ~ res:', res);
  //       expect(res.message).to.equal('Lỗi');
  //     }
  //   );
  // });

  it('Verify Create Zone Failed when token incorrect', () => {
    token = dataCreateZone.token.incorrect;

    data.name = dataCreateZone.name.valid;
    data.description = dataCreateZone.description.valid;
    data.goalIdsList = dataCreateZone.goalIdsList.correct;
    data.coverName = dataCreateZone.coverName.valid;
    data.status = dataCreateZone.status.valid.draft;
    data.tagsList = dataCreateZone.tagsList.valid;
    data.address = dataCreateZone.address.valid;

    cy.wrap(createZone(data, { token }).catch((err) => err)).then(
      (res: CreateZoneRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Create Zone Failed when token expired', () => {
    token = dataCreateZone.token.expired;

    data.name = dataCreateZone.name.valid;
    data.description = dataCreateZone.description.valid;
    data.goalIdsList = dataCreateZone.goalIdsList.correct;
    data.coverName = dataCreateZone.coverName.valid;
    data.status = dataCreateZone.status.valid.draft;
    data.tagsList = dataCreateZone.tagsList.valid;
    data.address = dataCreateZone.address.valid;

    cy.wrap(createZone(data, { token }).catch((err) => err)).then(
      (res: CreateZoneRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Create Zone Failed when token empty', () => {
    token = dataCreateZone.token.empty;

    data.name = dataCreateZone.name.valid;
    data.description = dataCreateZone.description.valid;
    data.goalIdsList = dataCreateZone.goalIdsList.correct;
    data.coverName = dataCreateZone.coverName.valid;
    data.status = dataCreateZone.status.valid.draft;
    data.tagsList = dataCreateZone.tagsList.valid;
    data.address = dataCreateZone.address.valid;

    cy.wrap(createZone(data, { token }).catch((err) => err)).then(
      (res: CreateZoneRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
});
