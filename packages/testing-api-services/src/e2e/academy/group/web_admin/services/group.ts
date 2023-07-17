import { PaginationReq } from '@api/academy/gen/ts/proto/common/web/paging_pb';
import { GroupServiceClient } from '@api/academy/gen/ts/proto/group/web_admin/GroupServiceClientPb';
import {
  CreateGroupReq,
  GetGroupReq,
  UpdateGroupReq,
  DeleteGroupReq,
  ListGroupReq,
  AddGroupMemberReq,
  RemoveGroupMemberReq,
  ListGroupMemberReq,
} from '@api/academy/gen/ts/proto/group/web_admin/group_pb';

import { baseGRPC } from '@demen/e2e-core';

const groupService = new GroupServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);
const service = baseGRPC;
service.setService(groupService);

export function createGroup(data: CreateGroupReq.AsObject, metadata?: any) {
  const req = new CreateGroupReq();
  req.setName(data.name);
  // GroupRole {
  //   GROUP_ROLE_INVALID = 0,
  //   GROUP_ROLE_ADMIN = 1,
  //   GROUP_ROLE_LEARNER = 2,
  //   GROUP_ROLE_TEACHER = 3,
  // }
  req.setRole(data.role);
  //  Array<string>
  req.setTagsList(data.tagsList);
  req.setDescription(data.description);
  // GroupStatus {
  //   GROUP_STATUS_INVALID = 0,
  //   GROUP_STATUS_PUBLISHED = 1,
  //   GROUP_STATUS_UNPUBLISHED = 2,
  //   GROUP_STATUS_DRAFT = 3,
  // }
  req.setStatus(data.status);

  return service.grpc(groupService.createGroup, req, metadata);
}

export function getGroup(data: GetGroupReq.AsObject, metadata?: any) {
  const req = new GetGroupReq();
  req.setId(data.id);

  return service.grpc(groupService.getGroup, req, metadata);
}

export function updateGroup(data: UpdateGroupReq.AsObject, metadata?: any) {
  const req = new UpdateGroupReq();
  req.setId(data.id);
  req.setName(data.name);
  // GroupRole {
  //   GROUP_ROLE_INVALID = 0,
  //   GROUP_ROLE_ADMIN = 1,
  //   GROUP_ROLE_LEARNER = 2,
  //   GROUP_ROLE_TEACHER = 3,
  // }
  req.setRole(data.role);
  //  Array<string>
  req.setTagsList(data.tagsList);
  req.setDescription(data.description);
  // GroupStatus {
  //   GROUP_STATUS_INVALID = 0,
  //   GROUP_STATUS_PUBLISHED = 1,
  //   GROUP_STATUS_UNPUBLISHED = 2,
  //   GROUP_STATUS_DRAFT = 3,
  // }
  req.setStatus(data.status);

  return service.grpc(groupService.updateGroup, req, metadata);
}

export function deleteGroup(data: DeleteGroupReq.AsObject, metadata?: any) {
  const req = new DeleteGroupReq();
  req.setId(data.id);

  return service.grpc(groupService.deleteGroup, req, metadata);
}

export function listGroup(data: ListGroupReq.AsObject, metadata?: any) {
  const paginationPB = new PaginationReq();
  paginationPB.setPageNumber(data.pagination.pageNumber);
  paginationPB.setPageLimit(data.pagination.pageLimit);

  const req = new ListGroupReq();
  req.setPagination(paginationPB);
  // Array<string>
  req.setFilterTagsList(data.filterTagsList);
  req.setFilterKeywords(data.filterKeywords);

  return service.grpc(groupService.listGroup, req, metadata);
}

export function addGroupMember(
  data: AddGroupMemberReq.AsObject,
  metadata?: any
) {
  const req = new AddGroupMemberReq();
  req.setGroupId(data.groupId);
  // Array<string>
  req.setUserIdsList(data.userIdsList);
  // Array<string>
  req.setEmailsList(data.emailsList);

  return service.grpc(groupService.addGroupMember, req, metadata);
}

export function removeGroupMember(
  data: RemoveGroupMemberReq.AsObject,
  metadata?: any
) {
  const req = new RemoveGroupMemberReq();
  req.setGroupId(data.groupId);
  // Array<string>
  req.setUserIdsList(data.userIdsList);

  return service.grpc(groupService.removeGroupMember, req, metadata);
}

export function listGroupMember(
  data: ListGroupMemberReq.AsObject,
  metadata?: any
) {
  const paginationPB = new PaginationReq();
  paginationPB.setPageNumber(data.pagination.pageNumber);
  paginationPB.setPageLimit(data.pagination.pageLimit);

  const req = new ListGroupMemberReq();
  req.setGroupId(data.groupId);
  req.setPagination(paginationPB);

  return service.grpc(groupService.listGroupMember, req, metadata);
}
