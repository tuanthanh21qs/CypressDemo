import {
  ListZoneReq,
  ListZoneRes,
} from '@api/academy/gen/ts/proto/zone/web_admin/zone_pb';
import { listZone } from '../services/zone';
import { dataListZone } from '../data/listZone';

let token = '';

let data: ListZoneReq.AsObject = {
  pagination: { pageNumber: 1, pageLimit: 20 },
  filterTagsList: [],
  filterKeywords: '',
};

describe('Zone - List Zone Successfull', () => {
  it('Verify List all Zone Successfull', () => {
    token = dataListZone.token.correct;

    cy.wrap(listZone(data, { token }).catch((err) => err)).then(
      (res: ListZoneRes.AsObject) => {
        cy.wrap(res.zonesList).as('Zone list');
        expect(res.zonesList).not.to.be.empty;
        expect(res.zonesList[0].id).not.to.be.empty;
      }
    );
  });
  // it('Verify List Zone by tag list Successfull', () => {
  //   token = dataListZone.token.correct;

  //   data.filterTagsList = dataListZone.filterTagsList.haveResult;

  //   cy.wrap(listZone(data, { token }).catch((err) => err)).then(
  //     (res: ListZoneRes.AsObject) => {
  //       cy.wrap(res.zonesList).as('Zone list');
  //       expect(res.zonesList).not.to.be.empty;
  //     }
  //   );
  // });
  it('Verify List Zone by keywords Successfull', () => {
    token = dataListZone.token.correct;

    data.filterKeywords = dataListZone.filterKeywords.haveResult;

    cy.wrap(listZone(data, { token }).catch((err) => err)).then(
      (res: ListZoneRes.AsObject) => {
        cy.wrap(res.zonesList).as('Zone list');
        expect(res.zonesList).not.to.be.empty;
      }
    );
  });
});

describe('Zone - List Zone Failed', () => {
  it('Verify List Zone Failed when token incorrect', () => {
    token = dataListZone.token.incorrect;

    cy.wrap(listZone(data, { token }).catch((err) => err)).then(
      (res: ListZoneRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify List Zone Failed when token expired', () => {
    token = dataListZone.token.expired;

    cy.wrap(listZone(data, { token }).catch((err) => err)).then(
      (res: ListZoneRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify List Zone Failed when token empty', () => {
    token = dataListZone.token.empty;

    cy.wrap(listZone(data, { token }).catch((err) => err)).then(
      (res: ListZoneRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  // it('Verify List Zone Failed when Tag list of zone not exist', () => {
  //   token = dataListZone.token.correct;

  //   data.filterTagsList = dataListZone.filterTagsList.notHaveResult;

  //   cy.wrap(listZone(data, { token }).catch((err) => err)).then(
  //     (res: ListZoneRes.AsObject) => {
  //       expect(res.message).to.equal('Không có Ezone');
  //     }
  //   );
  // });
  it('Verify List Zone Failed when Key Word of zone not exist', () => {
    token = dataListZone.token.correct;

    data.filterKeywords = dataListZone.filterKeywords.notHaveResult;

    cy.wrap(listZone(data, { token }).catch((err) => err)).then(
      (res: ListZoneRes.AsObject) => {
        console.log('🚀 ~ file: listZone.cy.ts:106 ~ it ~ res:', data);
        console.log('🚀 ~ file: listZone.cy.ts:106 ~ it ~ res:', res);
        expect(res.zonesList.length).to.equal(0);
      }
    );
  });
});
