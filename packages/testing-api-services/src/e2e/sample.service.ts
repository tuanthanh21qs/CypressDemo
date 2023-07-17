import { AuthServiceClient } from '@api/partnership/gen/ts/partnership/proto/partnership/web/AuthServiceClientPb';
import { LoginReq } from '@api/partnership/gen/ts/partnership/proto/partnership/web/auth_pb';
import { baseGRPC } from '@demen/e2e-core';

const partnerShipAuthService = new AuthServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);
const service = baseGRPC;
service.setService(partnerShipAuthService);

export function login() {
  const req = new LoginReq();
  req.setPassword('123456');
  req.setPartnershipId('123456');
  req.setPhoneCode('+84');
  req.setPhoneNumber('0912345678');

  return service.grpc(partnerShipAuthService.login, req, {});
}
