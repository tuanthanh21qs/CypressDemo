import { PartnershipServiceClient } from '@api/partnership/gen/ts/partnership/proto/partnership/mobile/PartnershipServiceClientPb';
import {
  PublicGetPartnershipByCodeReq,
  PublicGetPartnershipByDomainReq,
} from '@api/partnership/gen/ts/partnership/proto/partnership/mobile/partnership_pb';
import { baseGRPC } from '@demen/e2e-core';

const partnershipService = new PartnershipServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);

const service = baseGRPC;
service.setService(partnershipService);

export function publicGetPartnershipByCode(
  data: PublicGetPartnershipByCodeReq.AsObject
) {
  const req = new PublicGetPartnershipByCodeReq();
  req.setCodeName(data.codeName);

  return service.grpc(partnershipService.publicGetPartnershipByCode, req);
}

export function publicGetPartnershipByDomain(
  data: PublicGetPartnershipByDomainReq.AsObject
) {
  const req = new PublicGetPartnershipByDomainReq();
  req.setDomain(data.domain);

  return service.grpc(partnershipService.publicGetPartnershipByDomain, req);
}
