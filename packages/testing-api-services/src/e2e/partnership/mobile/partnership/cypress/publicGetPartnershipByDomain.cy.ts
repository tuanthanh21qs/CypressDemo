import {
  PublicGetPartnershipByDomainRes,
  PublicGetPartnershipByDomainReq,
} from '@api/partnership/gen/ts/partnership/proto/partnership/mobile/partnership_pb';
import { publicGetPartnershipByDomain } from '../services/partnership';
import { dataPublicGetPartnershipByDomain } from '../data/publicGetPartnershipByDomain';

let data: PublicGetPartnershipByDomainReq.AsObject = {
  domain: '',
};

describe('Partnership - Get PartnershipID By Domain', () => {
  it('Verify Get PartnershipID By Domain Successfull', () => {
    data.domain = dataPublicGetPartnershipByDomain.domain.correct;

    cy.wrap(publicGetPartnershipByDomain(data).catch((err) => err)).then(
      (res: PublicGetPartnershipByDomainRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Get PartnershipID By Domain Failed when Domain incorrect', () => {
    data.domain = dataPublicGetPartnershipByDomain.domain.incorrect;

    cy.wrap(publicGetPartnershipByDomain(data).catch((err) => err)).then(
      (res: PublicGetPartnershipByDomainRes.AsObject) => {
        expect(res.message).to.equal('Không tìm thấy đối tác');
      }
    );
  });
  it('Verify Get PartnershipID By Domain Failed when Domain empty', () => {
    data.domain = dataPublicGetPartnershipByDomain.domain.empty;

    cy.wrap(publicGetPartnershipByDomain(data).catch((err) => err)).then(
      (res: PublicGetPartnershipByDomainRes.AsObject) => {
        expect(res.message).to.equal('Trường PARTNERSHIP_DOMAIN là bắt buộc');
      }
    );
  });
});
