import { CustomerServiceClient } from '@api/customer/gen/ts/customer/proto/customer/web/CustomerServiceClientPb';
import {
  ChangePasswordReq,
  DeleteUserReq,
  GetMeReq,
  UpdateMeReq,
} from '@api/customer/gen/ts/customer/proto/customer/web/customer_pb';
import { baseGRPC } from '@demen/e2e-core';

const customerService = new CustomerServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);

const service = baseGRPC;
service.setService(customerService);

export function getMe(data?: GetMeReq.AsObject, metadata?: any) {
  const req = new GetMeReq();

  return service.grpc(customerService.getMe, req, metadata);
}

export function updateMe(data?: UpdateMeReq.AsObject, metadata?: any) {
  const req = new UpdateMeReq();
  req.setName(data.name);
  req.setProfilePicture(data.profilePicture);
  req.setDescription(data.description);
  req.setBirthday(data.birthday);
  //   Gender {
  //     GENDER_INVALID = 0,
  //     GENDER_MALE = 1,
  //     GENDER_FEMALE = 2,
  //     GENDER_OTHER = 3,
  //   }
  req.setGender(data.gender);
  req.setEmail(data.email);

  return service.grpc(customerService.updateMe, req, metadata);
}

export function changePassword(
  data?: ChangePasswordReq.AsObject,
  metadata?: any
) {
  const req = new ChangePasswordReq();
  req.setOldPassword(data.oldPassword);
  req.setPassword(data.password);

  return service.grpc(customerService.changePassword, req, metadata);
}

export function deleteUser(data?: DeleteUserReq.AsObject, metadata?: any) {
  const req = new DeleteUserReq();
  req.setPassword(data.password);

  return service.grpc(customerService.deleteUser, req, metadata);
}
