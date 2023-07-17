import { AuthServiceClient } from '@api/customer/gen/ts/customer/proto/customer/mobile/AuthServiceClientPb';
import {
  CheckAccountHavePhoneNumberReq,
  CheckPinReq,
  CreatePinReq,
  LinkSocialAccountReq,
  LoginByQRCodeReq,
  LoginReq,
  RefreshTokenReq,
  RegisterReq,
  ScanQRCodeReq,
  SocialLoginReq,
  UpdatePinReq,
  VerifyAndUpdateImportantInformationReq,
  VerifyPasswordSecurityReq,
  VerifySocialTokenReq,
} from '@api/customer/gen/ts/customer/proto/customer/mobile/auth_pb';
import { baseGRPC } from '@demen/e2e-core';

const authService = new AuthServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);

const service = baseGRPC;
service.setService(authService);

export function register(data: RegisterReq.AsObject, metadata?: any) {
  const req = new RegisterReq();
  req.setEmail(data.email);
  req.setPassword(data.password);
  req.setPhoneNumber(data.phoneNumber);
  req.setPhoneCode(data.phoneCode);
  req.setPartnershipId(data.partnershipId);
  req.setName(data.name);
  // AuthenticationType {
  //   AUTHENTICATION_TYPE_INVALID = 0,
  //   AUTHENTICATION_TYPE_PHONE = 1,
  //   AUTHENTICATION_TYPE_EMAIL = 2,
  // }
  req.setAuthenticationType(data.authenticationType);

  return service.grpc(authService.register, req, metadata);
}

export function login(data: LoginReq.AsObject, metadata?: any) {
  const req = new LoginReq();
  // AuthenticationType {
  //   AUTHENTICATION_TYPE_INVALID = 0,
  //   AUTHENTICATION_TYPE_PHONE = 1,
  //   AUTHENTICATION_TYPE_EMAIL = 2,
  // }
  req.setType(data.type);
  req.setEmail(data.email);
  req.setPhoneNumber(data.phoneNumber);
  req.setPhoneCode(data.phoneCode);
  req.setPassword(data.password);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(authService.login, req, metadata);
}

export function socialLogin(data: SocialLoginReq.AsObject, metadata?: any) {
  const req = new SocialLoginReq();
  req.setType(data.type);
  req.setAccessToken(data.accessToken);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(authService.socialLogin, req, metadata);
}

export function refreshToken(data: RefreshTokenReq.AsObject, metadata?: any) {
  const req = new RefreshTokenReq();
  req.setRefreshToken(data.refreshToken);

  return service.grpc(authService.refreshToken, req, metadata);
}

export function linkSocialAccount(
  data: LinkSocialAccountReq.AsObject,
  metadata?: any
) {
  const req = new LinkSocialAccountReq();
  req.setType(data.type);
  req.setAccessToken(data.accessToken);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(authService.linkSocialAccount, req, metadata);
}

export function logout(data?: any, metadata?: any) {
  return service.grpc(authService.logout, {}, metadata);
}

export function logoutAllDevice(data?: any, metadata?: any) {
  return service.grpc(authService.logoutAllDevice, {}, metadata);
}

export function verifySocialToken(
  data: VerifySocialTokenReq.AsObject,
  metadata?: any
) {
  const req = new VerifySocialTokenReq();
  req.setType(data.type);
  req.setAccessToken(data.accessToken);

  return service.grpc(authService.verifySocialToken, req, metadata);
}

export function createPin(data: CreatePinReq.AsObject, metadata?: any) {
  const req = new CreatePinReq();
  req.setPin(data.pin);

  return service.grpc(authService.createPin, req, metadata);
}

export function updatePin(data: UpdatePinReq.AsObject, metadata?: any) {
  const req = new UpdatePinReq();
  req.setPassword(data.password);
  req.setPin(data.pin);

  return service.grpc(authService.updatePin, req, metadata);
}

export function checkPin(data: CheckPinReq.AsObject, metadata?: any) {
  const req = new CheckPinReq();
  req.setPin(data.pin);

  return service.grpc(authService.checkPin, req, metadata);
}

//Không cần viết script auto
export function scanQRCode(data: ScanQRCodeReq.AsObject, metadata?: any) {
  const req = new ScanQRCodeReq();
  req.setQrCode(data.qrCode);

  return service.grpc(authService.scanQRCode, req, metadata);
}

//Không cần viết script auto
export function loginByQRCode(data: LoginByQRCodeReq.AsObject, metadata?: any) {
  const req = new LoginByQRCodeReq();
  req.setQrCode(data.qrCode);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(authService.loginByQRCode, req, metadata);
}

export function verifyPasswordSecurity(
  data: VerifyPasswordSecurityReq.AsObject,
  metadata?: any
) {
  const req = new VerifyPasswordSecurityReq();
  req.setPassword(data.password);

  return service.grpc(authService.verifyPasswordSecurity, req, metadata);
}

export function checkAccountHavePhoneNumber(
  data?: CheckAccountHavePhoneNumberReq.AsObject,
  metadata?: any
) {
  const req = new CheckAccountHavePhoneNumberReq();

  return service.grpc(authService.checkAccountHavePhoneNumber, req, metadata);
}

export function verifyAndUpdateImportantInformation(
  data?: VerifyAndUpdateImportantInformationReq.AsObject,
  metadata?: any
) {
  const req = new VerifyAndUpdateImportantInformationReq();
  req.setPhoneCode(data.phoneCode);
  req.setPhoneNumber(data.phoneNumber);
  req.setFullName(data.fullName);
  req.setOtp(data.otp);

  return service.grpc(
    authService.verifyAndUpdateImportantInformation,
    req,
    metadata
  );
}
