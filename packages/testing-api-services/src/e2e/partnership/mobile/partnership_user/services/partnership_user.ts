import { PartnershipUserServiceClient } from '@api/partnership/gen/ts/partnership/proto/partnership/mobile/Partnership_userServiceClientPb';
import {
  ChangePasswordReq,
  GetMeReq,
  UpdateMeReq,
  SendOtpToResetPasswordByPhoneReq,
  VerifyOtpToResetPasswordByPhoneReq,
  SendOtpToResetPasswordByEmailReq,
  VerifyOtpToResetPasswordByEmailReq,
  ResetPasswordReq,
} from '@api/partnership/gen/ts/partnership/proto/partnership/mobile/partnership_user_pb';

import { baseGRPC } from '@demen/e2e-core';

const partnershipUserService = new PartnershipUserServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);

const service = baseGRPC;
service.setService(partnershipUserService);

export function getMe(data?: GetMeReq.AsObject, metadata?: any) {
  const req = new GetMeReq();

  return service.grpc(partnershipUserService.getMe, req, metadata);
}

export function updateMe(data?: UpdateMeReq.AsObject, metadata?: any) {
  const req = new UpdateMeReq();
  req.setName(data.name);
  req.setDescription(data.description);
  req.setProfilePicture(data.profilePicture);

  return service.grpc(partnershipUserService.updateMe, req, metadata);
}

export function changePassword(
  data?: ChangePasswordReq.AsObject,
  metadata?: any
) {
  const req = new ChangePasswordReq();
  req.setOldPassword(data.oldPassword);
  req.setPassword(data.password);

  return service.grpc(partnershipUserService.changePassword, req, metadata);
}

export function sendOtpToResetPasswordByPhone(
  data?: SendOtpToResetPasswordByPhoneReq.AsObject,
  metadata?: any
) {
  const req = new SendOtpToResetPasswordByPhoneReq();
  req.setPhoneCode(data.phoneCode);
  req.setPhoneNumber(data.phoneNumber);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(
    partnershipUserService.sendOtpToResetPasswordByPhone,
    req,
    metadata
  );
}

export function verifyOtpToResetPasswordByPhone(
  data?: VerifyOtpToResetPasswordByPhoneReq.AsObject,
  metadata?: any
) {
  const req = new VerifyOtpToResetPasswordByPhoneReq();
  req.setPhoneCode(data.phoneCode);
  req.setPhoneNumber(data.phoneNumber);
  req.setPartnershipId(data.partnershipId);
  req.setOtp(data.otp);

  return service.grpc(
    partnershipUserService.verifyOtpToResetPasswordByPhone,
    req,
    metadata
  );
}

export function sendOtpToResetPasswordByEmail(
  data?: SendOtpToResetPasswordByEmailReq.AsObject,
  metadata?: any
) {
  const req = new SendOtpToResetPasswordByEmailReq();
  req.setEmail(data.email);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(
    partnershipUserService.sendOtpToResetPasswordByEmail,
    req,
    metadata
  );
}

export function verifyOtpToResetPasswordByEmail(
  data?: VerifyOtpToResetPasswordByEmailReq.AsObject,
  metadata?: any
) {
  const req = new VerifyOtpToResetPasswordByEmailReq();
  req.setEmail(data.email);
  req.setPartnershipId(data.partnershipId);
  req.setOtp(data.otp);

  return service.grpc(
    partnershipUserService.verifyOtpToResetPasswordByEmail,
    req,
    metadata
  );
}

export function resetPassword(
  data?: ResetPasswordReq.AsObject,
  metadata?: any
) {
  const req = new ResetPasswordReq();
  req.setNewPassword(data.newPassword);

  return service.grpc(partnershipUserService.resetPassword, req, metadata);
}
