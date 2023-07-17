import { DeleteZoneReq } from '@api/academy/gen/ts/proto/zone/web_admin/zone_pb';
import { deleteZone } from '../services/zone';
import { dataDeleteZone } from '../data/deleteZone';

let token = '';

let data: DeleteZoneReq.AsObject = {
  id: '',
};
describe('Zone - Delete Zone Successfull', () => {
  it('Verify Delete Zone Successfull', () => {
    token = dataDeleteZone.token.correct;

    data.id = dataDeleteZone.id.correct;

    cy.wrap(deleteZone(data, { token }).catch((err) => err)).then((res) => {
      console.log('🚀 ~ file: deleteZone.cy.ts:17 ~ it.only ~ res:', data);
      console.log('🚀 ~ file: deleteZone.cy.ts:17 ~ it.only ~ res:', res);
      expect(res).to.be.empty;
    });
  });
});

describe('Zone - Delete Zone Failed', () => {
  it('Verify Delete Zone Failed when ID incorrect', () => {
    token = dataDeleteZone.token.correct;

    data.id = dataDeleteZone.id.incorrect;

    cy.wrap(deleteZone(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('ZONE_NOT_FOUND');
    });
  });
  it('Verify Delete Zone Failed when ID empty', () => {
    token = dataDeleteZone.token.correct;

    data.id = dataDeleteZone.id.empty;

    cy.wrap(deleteZone(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal('Trường ZONE_ID là bắt buộc');
    });
  });
  it('Verify Delete Zone Failed when Token incorrect', () => {
    token = dataDeleteZone.token.incorrect;

    data.id = dataDeleteZone.id.correct;

    cy.wrap(deleteZone(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal(
        'Http response at 400 or 500 level, http status code: 403'
      );
    });
  });
  it('Verify Delete Zone Failed when Token expired', () => {
    token = dataDeleteZone.token.expired;

    data.id = dataDeleteZone.id.correct;

    cy.wrap(deleteZone(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal(
        'Http response at 400 or 500 level, http status code: 403'
      );
    });
  });
  it('Verify Delete Zone Failed when Token empty', () => {
    token = dataDeleteZone.token.empty;

    data.id = dataDeleteZone.id.correct;

    cy.wrap(deleteZone(data, { token }).catch((err) => err)).then((res) => {
      expect(res.message).to.equal(
        'Http response at 400 or 500 level, http status code: 403'
      );
    });
  });
});
