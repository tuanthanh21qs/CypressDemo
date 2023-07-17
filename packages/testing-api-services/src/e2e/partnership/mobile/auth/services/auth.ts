import { AuthServiceClient } from '@api/partnership/gen/ts/partnership/proto/partnership/mobile/AuthServiceClientPb';
import {
  LoginReq,
  LogoutReq,
  RefreshTokenReq,
} from '@api/partnership/gen/ts/partnership/proto/partnership/web/auth_pb';
import { baseGRPC } from '@demen/e2e-core';

const authService = new AuthServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);

const service = baseGRPC;
service.setService(authService);

export function login(data: LoginReq.AsObject, metadata?: any) {
  const req = new LoginReq();
  req.setPhoneCode(data.phoneCode);
  req.setPhoneNumber(data.phoneNumber);
  req.setPassword(data.password);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(authService.login, req);
}

export function logout(data: LogoutReq.AsObject, metadata?: any) {
  const req = new LoginReq();

  return service.grpc(authService.logout, req, metadata);
}

export function refreshToken(data: RefreshTokenReq.AsObject, metadata?: any) {
  const req = new RefreshTokenReq();
  req.setRefreshToken(data.refreshToken);

  return service.grpc(authService.refreshToken, req, metadata);
}
