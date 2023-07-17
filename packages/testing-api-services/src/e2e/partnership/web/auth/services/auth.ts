import { AuthServiceClient } from '@api/partnership/gen/ts/proto/partnership/web/AuthServiceClientPb';
import {
  LoginByEmailReq,
  LoginReq,
  LogoutReq,
  RefreshTokenReq,
} from '@api/partnership/gen/ts/proto/partnership/web/auth_pb';
import { baseGRPC } from '@demen/e2e-core';

const authService = new AuthServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);

const service = baseGRPC;
service.setService(authService);

export function login(data: LoginReq.AsObject) {
  const req = new LoginReq();

  req.setPartnershipId(data.partnershipId);
  req.setPassword(data.password);
  req.setPhoneCode(data.phoneCode);
  req.setPhoneNumber(data.phoneNumber);

  return service.grpc(authService.login, req);
}

export function loginByEmail(data: LoginByEmailReq.AsObject) {
  const req = new LoginByEmailReq();

  req.setPartnershipId(data.partnershipId);
  req.setPassword(data.password);
  req.setEmail(data.email);

  return service.grpc(authService.loginByEmail, req);
}

export function logout(data?: LogoutReq.AsObject) {
  const req = new LogoutReq();

  return service.grpc(authService.logout, req);
}

export function refreshToken(data: RefreshTokenReq.AsObject) {
  const req = new RefreshTokenReq();
  req.setRefreshToken(data.refreshToken);

  return service.grpc(authService.refreshToken, req);
}
