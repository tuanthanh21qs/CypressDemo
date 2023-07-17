import { AuthPhoneServiceClient } from '@api/customer/gen/ts/customer/proto/customer/mobile/Auth_phoneServiceClientPb';
import {
  LoginByPhoneReq,
  RegisterByPhoneNotRequiredPasswordReq,
  RegisterByPhoneReq,
  ResetPasswordByPhoneReq,
  SendOtpByPhoneReq,
  VerifyOtpToResetPasswordByPhoneReq,
  VerifyPhoneNumberReq,
  LoginByPhoneOTPReq,
  IsPhoneNumberIsVerifiedReq,
} from '@api/customer/gen/ts/customer/proto/customer/mobile/auth_phone_pb';
import { baseGRPC } from '@demen/e2e-core';

const authPhoneService = new AuthPhoneServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);

const service = baseGRPC;
service.setService(authPhoneService);

export function registerByPhone(data: RegisterByPhoneReq.AsObject) {
  const req = new RegisterByPhoneReq();

  req.setPassword(data.password);
  req.setPhoneNumber(data.phoneNumber);
  req.setPhoneCode(data.phoneCode);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(authPhoneService.registerByPhone, req);
}

export function registerByPhoneNotRequiredPassword(
  data: RegisterByPhoneNotRequiredPasswordReq.AsObject
) {
  const req = new RegisterByPhoneNotRequiredPasswordReq();

  req.setPhoneNumber(data.phoneNumber);
  req.setPhoneCode(data.phoneCode);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(authPhoneService.registerByPhoneNotRequiredPassword, req);
}

export function loginByPhone(data: LoginByPhoneReq.AsObject) {
  const req = new LoginByPhoneReq();

  req.setPassword(data.password);
  req.setPhoneNumber(data.phoneNumber);
  req.setPhoneCode(data.phoneCode);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(authPhoneService.loginByPhone, req);
}

export function loginByPhoneOTP(data: LoginByPhoneOTPReq.AsObject) {
  const req = new LoginByPhoneOTPReq();

  req.setOtp(data.otp);
  req.setPhoneNumber(data.phoneNumber);
  req.setPhoneCode(data.phoneCode);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(authPhoneService.loginByPhoneOTP, req);
}

export function isPhoneNumberIsVerified(
  data?: IsPhoneNumberIsVerifiedReq.AsObject,
  metadata?: any
) {
  const req = new IsPhoneNumberIsVerifiedReq();

  return service.grpc(authPhoneService.isPhoneNumberIsVerified, req, metadata);
}

export function sendOtpByPhone(data: SendOtpByPhoneReq.AsObject) {
  const req = new SendOtpByPhoneReq();
  req.setPartnershipId(data.partnershipId);
  req.setOtpType(data.otpType);
  req.setPhoneCode(data.phoneCode);
  req.setPhoneNumber(data.phoneNumber);

  return service.grpc(authPhoneService.sendOtpByPhone, req, {});
}

export function verifyPhoneNumber(
  data: VerifyPhoneNumberReq.AsObject,
  metadata: any
) {
  const req = new VerifyPhoneNumberReq();
  req.setPhoneCode(data.phoneCode);
  req.setPhoneNumber(data.phoneNumber);
  req.setPartnershipId(data.partnershipId);
  req.setOtp(data.otp);
  return service.grpc(authPhoneService.verifyPhoneNumber, req, metadata);
}

export function verifyOtpToResetPasswordByPhone(
  data: VerifyOtpToResetPasswordByPhoneReq.AsObject
) {
  const req = new VerifyOtpToResetPasswordByPhoneReq();
  req.setPhoneCode(data.phoneCode);
  req.setPhoneNumber(data.phoneNumber);
  req.setPartnershipId(data.partnershipId);
  req.setOtp(data.otp);

  return service.grpc(authPhoneService.verifyOtpToResetPasswordByPhone, req);
}

export function resetPasswordByPhone(
  data: ResetPasswordByPhoneReq.AsObject,
  metadata: any
) {
  const req = new ResetPasswordByPhoneReq();
  req.setNewPassword(data.newPassword);

  return service.grpc(authPhoneService.resetPasswordByPhone, req, metadata);
}
