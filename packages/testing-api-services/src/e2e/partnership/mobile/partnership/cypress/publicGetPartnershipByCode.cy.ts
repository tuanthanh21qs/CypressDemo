import {
  PublicGetPartnershipByCodeRes,
  PublicGetPartnershipByCodeReq,
} from '@api/partnership/gen/ts/partnership/proto/partnership/mobile/partnership_pb';
import { publicGetPartnershipByCode } from '../services/partnership';
import { dataPublicGetPartnershipByCode } from '../data/publicGetPartnershipByCode';

let data: PublicGetPartnershipByCodeReq.AsObject = {
  codeName: '',
};

describe('Partnership - Get PartnershipID By Code', () => {
  it('Verify Get PartnershipID By Code Successfull', () => {
    data.codeName = dataPublicGetPartnershipByCode.code.correct;

    cy.wrap(publicGetPartnershipByCode(data).catch((err) => err)).then(
      (res: PublicGetPartnershipByCodeRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Get PartnershipID By Code Failed when Code incorrect', () => {
    data.codeName = dataPublicGetPartnershipByCode.code.incorrect;

    cy.wrap(publicGetPartnershipByCode(data).catch((err) => err)).then(
      (res: PublicGetPartnershipByCodeRes.AsObject) => {
        expect(res.message).to.equal('Không tìm thấy đối tác');
      }
    );
  });
  it('Verify Get PartnershipID By Code Failed when Code empty', () => {
    data.codeName = dataPublicGetPartnershipByCode.code.empty;

    cy.wrap(publicGetPartnershipByCode(data).catch((err) => err)).then(
      (res: PublicGetPartnershipByCodeRes.AsObject) => {
        expect(res.message).to.equal('Trường code name là bắt buộc');
      }
    );
  });
});
