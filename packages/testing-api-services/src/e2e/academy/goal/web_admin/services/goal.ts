import { PaginationReq } from '@api/academy/gen/ts/proto/common/web/paging_pb';
import { GoalServiceClient } from '@api/academy/gen/ts/proto/goal/web_admin/GoalServiceClientPb';
import {
  CreateGoalReq,
  GetGoalReq,
  UpdateGoalReq,
  DeleteGoalReq,
  ListGoalReq,
} from '@api/academy/gen/ts/proto/goal/web_admin/goal_pb';
import { baseGRPC } from '@demen/e2e-core';

const goalService = new GoalServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);
const service = baseGRPC;
service.setService(goalService);

export function createGoal(data: CreateGoalReq.AsObject, metadata?: any) {
  const req = new CreateGoalReq();
  req.setName(data.name);
  req.setDescription(data.description);
  // Array<string>
  req.setSessionIdsList(data.sessionIdsList);
  req.setStartDate(data.startDate);
  req.setEndDate(data.endDate);
  //Array<string>
  req.setTagsList(data.tagsList);
  //   GoalStatus {
  //   GOAL_STATUS_INVALID = 0,
  //   GOAL_STATUS_PUBLISHED = 1,
  //   GOAL_STATUS_UNPUBLISHED = 2,
  //   GOAL_STATUS_DRAFT = 3,
  // }
  req.setStatus(data.status);

  return service.grpc(goalService.createGoal, req, metadata);
}

export function getGoal(data: GetGoalReq.AsObject, metadata?: any) {
  const req = new GetGoalReq();
  req.setId(data.id);

  return service.grpc(goalService.getGoal, req, metadata);
}

export function updateGoal(data: UpdateGoalReq.AsObject, metadata?: any) {
  const req = new UpdateGoalReq();

  req.setId(data.id);
  req.setName(data.name);
  req.setDescription(data.description);
  // Array<string>
  req.setSessionIdsList(data.sessionIdsList);
  req.setStartDate(data.startDate);
  req.setEndDate(data.endDate);
  //Array<string>
  req.setTagsList(data.tagsList);
  //   GoalStatus {
  //   GOAL_STATUS_INVALID = 0,
  //   GOAL_STATUS_PUBLISHED = 1,
  //   GOAL_STATUS_UNPUBLISHED = 2,
  //   GOAL_STATUS_DRAFT = 3,
  // }
  req.setStatus(data.status);

  return service.grpc(goalService.updateGoal, req, metadata);
}

export function deleteGoal(data: DeleteGoalReq.AsObject, metadata?: any) {
  const req = new DeleteGoalReq();
  req.setId(data.id);

  return service.grpc(goalService.deleteGoal, req, metadata);
}

export function listGoal(data: ListGoalReq.AsObject, metadata?: any) {
  const paginationPB = new PaginationReq();
  paginationPB.setPageNumber(data.pagination.pageNumber);
  paginationPB.setPageLimit(data.pagination.pageLimit);

  const req = new ListGoalReq();
  req.setPagination(paginationPB);
  //Array<string>
  req.setFilterTagsList(data.filterTagsList);
  req.setFilterKeywords(data.filterKeywords);

  return service.grpc(goalService.listGoal, req, metadata);
}
