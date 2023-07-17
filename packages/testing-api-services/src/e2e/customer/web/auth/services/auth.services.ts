import { AuthServiceClient } from '@api/customer/gen/ts/customer/proto/customer/web/AuthServiceClientPb';
import { RefreshTokenReq } from '@api/customer/gen/ts/customer/proto/customer/web/auth_pb';
import { baseGRPC } from '@demen/e2e-core';

const authService = new AuthServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);

const service = baseGRPC;
service.setService(authService);

export function refreshToken(data: RefreshTokenReq.AsObject, metadata?: any) {
  const req = new RefreshTokenReq();
  req.setRefreshToken(data.refreshToken);

  return service.grpc(authService.refreshToken, req, metadata);
}

export function logout(metadata?: any) {
  return service.grpc(authService.logout, metadata);
}

export function logoutAllDevice(metadata?: any) {
  return service.grpc(authService.logoutAllDevice, metadata);
}
