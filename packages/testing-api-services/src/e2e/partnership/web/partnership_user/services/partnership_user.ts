import { PartnershipUserServiceClient } from '@api/partnership/gen/ts/partnership/proto/partnership/web/Partnership_userServiceClientPb';
import {
  ChangePasswordReq,
  GetMeReq,
  UpdateMeReq,
  SendOtpToResetPasswordByPhoneReq,
  VerifyOtpToResetPasswordByPhoneReq,
  SendOtpToResetPasswordByEmailReq,
  VerifyOtpToResetPasswordByEmailReq,
  ResetPasswordReq,
  CreateUserReq,
  UpdateUserReq,
  DeleteUserReq,
  DisableUserReq,
} from '@api/partnership/gen/ts/partnership/proto/partnership/web/partnership_user_pb';

import { baseGRPC } from '@demen/e2e-core';

const partnershipUserService = new PartnershipUserServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);

const service = baseGRPC;
service.setService(partnershipUserService);

export function createUser(data: CreateUserReq.AsObject, metadata?: any) {
  const req = new CreateUserReq();
  req.setEmail(data.email);
  req.setPassword(data.password);
  req.setName(data.name);
  req.setProfilePicture(data.profilePicture);
  req.setDescription(data.description);
  req.setPhoneCode(data.phoneCode);
  req.setPhoneNumber(data.phoneNumber);

  return service.grpc(partnershipUserService.createUser, req, metadata);
}

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

export function updateUser(data: UpdateUserReq.AsObject, metadata?: any) {
  const req = new UpdateUserReq();
  req.setUserId(data.userId);
  req.setName(data.name);
  req.setProfilePicture(data.profilePicture);
  req.setDescription(data.description);

  return service.grpc(partnershipUserService.updateUser, req, metadata);
}

export function deleteUser(data: DeleteUserReq.AsObject, metadata?: any) {
  const req = new DeleteUserReq();
  req.setUserId(data.userId);

  return service.grpc(partnershipUserService.deleteUser, req, metadata);
}

export function disableUser(data: DisableUserReq.AsObject, metadata?: any) {
  const req = new DisableUserReq();
  req.setUserId(data.userId);

  return service.grpc(partnershipUserService.disableUser, req, metadata);
}
