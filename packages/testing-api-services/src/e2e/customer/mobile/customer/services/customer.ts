import { CustomerServiceClient } from '@api/customer/gen/ts/customer/proto/customer/mobile/CustomerServiceClientPb';
import {
  OrderByItem,
  PaginationReq,
} from '@api/customer/gen/ts/customer/proto/customer/mobile/base_pb';
import {
  ChangePasswordReq,
  DeleteUserReq,
  GetMeReq,
  GetUserByIdReq,
  UpdateMeReq,
  GetUserReq,
  GetListUserByIdsReq,
  GetListUserReq,
  CheckAlreadyExistEmailReq,
  CheckAlreadyExistPhoneReq,
} from '@api/customer/gen/ts/customer/proto/customer/mobile/customer_pb';
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
  req.setInviterId(data.inviterId);
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

export function getUserById(data?: GetUserByIdReq.AsObject, metadata?: any) {
  const req = new GetUserByIdReq();
  req.setUserId(data.userId);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(customerService.getUserById, req, metadata);
}

export function getUser(data?: GetUserReq.AsObject, metadata?: any) {
  const req = new GetUserReq();
  req.setEmail(data.email);
  req.setPhoneCode(data.phoneCode);
  req.setPhoneNumber(data.phoneNumber);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(customerService.getUser, req, metadata);
}

export function getListUserByIds(
  data?: GetListUserByIdsReq.AsObject,
  metadata?: any
) {
  const req = new GetListUserByIdsReq();
  req.setUserIdsList(data.userIdsList);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(customerService.getListUserByIds, req, metadata);
}

export function getListUser(data?: GetListUserReq.AsObject, metadata?: any) {
  const pagination = new PaginationReq();
  pagination.setPageNumber(data.pagination.pageNumber);
  pagination.setPageLimit(data.pagination.pageLimit);

  const orderByListPb = data.orderByList.map((orderByList) => {
    const order = new OrderByItem();
    order.setDesc(orderByList.desc);
    order.setField(orderByList.field);

    return order;
  });
  const req = new GetListUserReq();
  req.setPagination(pagination);
  req.setOrderByList(orderByListPb);

  return service.grpc(customerService.getListUser, req, metadata);
}

export function checkAlreadyExistEmail(
  data?: CheckAlreadyExistEmailReq.AsObject,
  metadata?: any
) {
  const req = new CheckAlreadyExistEmailReq();
  req.setEmail(data.email);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(customerService.checkAlreadyExistEmail, req, metadata);
}

export function checkAlreadyExistPhone(
  data?: CheckAlreadyExistPhoneReq.AsObject,
  metadata?: any
) {
  const req = new CheckAlreadyExistPhoneReq();
  req.setPhoneCode(data.phoneCode);
  req.setPhoneNumber(data.phoneNumber);
  req.setPartnershipId(data.partnershipId);

  return service.grpc(customerService.checkAlreadyExistPhone, req, metadata);
}
