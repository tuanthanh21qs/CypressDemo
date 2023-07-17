import {
  GetZoneReq,
  GetZoneRes,
} from '@api/academy/gen/ts/proto/zone/web_admin/zone_pb';
import { getZone } from '../services/zone';
import { dataGetZone } from '../data/getZone';

let token = '';

let data: GetZoneReq.AsObject = {
  id: '',
};
describe('Zone - Get Zone Successfull', () => {
  it('Verify Get Zone Successfull', () => {
    token = dataGetZone.token.correct;

    data.id = dataGetZone.id.correct;

    cy.wrap(getZone(data, { token }).catch((err) => err)).then(
      (res: GetZoneRes.AsObject) => {
        cy.wrap(res.zone).as('Zone');
        cy.wrap(res.zone.id).as('ID');
        expect(res.zone.id).not.to.be.empty;
      }
    );
  });
});

describe('Zone - Get Zone Failed', () => {
  it('Verify Get Zone Failed when ID incorrect', () => {
    token = dataGetZone.token.correct;

    data.id = dataGetZone.id.incorrect;

    cy.wrap(getZone(data, { token }).catch((err) => err)).then(
      (res: GetZoneRes.AsObject) => {
        expect(res.message).to.equal('ZONE_NOT_FOUND');
      }
    );
  });
  it('Verify Get Zone Failed when ID empty', () => {
    token = dataGetZone.token.correct;

    data.id = dataGetZone.id.empty;

    cy.wrap(getZone(data, { token }).catch((err) => err)).then(
      (res: GetZoneRes.AsObject) => {
        expect(res.message).to.equal(
          'Đã có lỗi xảy ra vui lòng thử lại sau, hoặc liên hệ đội ngũ phát triễn'
        );
      }
    );
  });
  it('Verify Get Zone Failed when Token incorrect', () => {
    token = dataGetZone.token.incorrect;

    data.id = dataGetZone.id.correct;

    cy.wrap(getZone(data, { token }).catch((err) => err)).then(
      (res: GetZoneRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Get Zone Failed when Token expired', () => {
    token = dataGetZone.token.expired;

    data.id = dataGetZone.id.correct;

    cy.wrap(getZone(data, { token }).catch((err) => err)).then(
      (res: GetZoneRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Get Zone Failed when Token empty', () => {
    token = dataGetZone.token.empty;

    data.id = dataGetZone.id.correct;

    cy.wrap(getZone(data, { token }).catch((err) => err)).then(
      (res: GetZoneRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
});
