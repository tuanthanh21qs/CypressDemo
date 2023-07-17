import { AuthEmailServiceClient } from '@api/customer/gen/ts/customer/proto/customer/web/Auth_emailServiceClientPb';
import {
  LoginByEmailReq,
  ResetPasswordByEmailReq,
  SendOtpByEmailReq,
  VerifyEmailReq,
  VerifyOtpToResetPasswordByEmailReq,
} from '@api/customer/gen/ts/customer/proto/customer/web/auth_email_pb';
import { baseGRPC } from '@demen/e2e-core';

const authEmailService = new AuthEmailServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);

const service = baseGRPC;
service.setService(authEmailService);

export function loginByEmail(data: LoginByEmailReq.AsObject) {
  const req = new LoginByEmailReq();
  req.setEmail(data.email);
  req.setPassword(data.password);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(authEmailService.loginByEmail, req);
}

export function sendOtpByEmail(
  data: SendOtpByEmailReq.AsObject,
  metadata?: any
) {
  const req = new SendOtpByEmailReq();
  req.setEmail(data.email);
  req.setPartnershipId(data.partnershipId);
  req.setType(data.type);

  return service.grpc(authEmailService.sendOtpByEmail, req, metadata);
}

export function verifyEmail(data: VerifyEmailReq.AsObject, metadata?: any) {
  const req = new VerifyEmailReq();
  req.setEmail(data.email);
  req.setPartnershipId(data.partnershipId);
  req.setOtp(data.otp);

  return service.grpc(authEmailService.verifyEmail, req, metadata);
}

export function verifyOtpToResetPasswordByEmail(
  data: VerifyOtpToResetPasswordByEmailReq.AsObject,
  metadata?: any
) {
  const req = new VerifyOtpToResetPasswordByEmailReq();
  req.setOtp(data.otp);
  req.setEmail(data.email);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(
    authEmailService.verifyOtpToResetPasswordByEmail,
    req,
    metadata
  );
}

export function resetPasswordByEmail(
  data: ResetPasswordByEmailReq.AsObject,
  metadata?: any
) {
  const req = new ResetPasswordByEmailReq();
  req.setNewPassword(data.newPassword);

  return service.grpc(authEmailService.resetPasswordByEmail, req, metadata);
}
