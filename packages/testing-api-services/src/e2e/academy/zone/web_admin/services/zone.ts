import { PaginationReq } from '@api/academy/gen/ts/proto/common/web/paging_pb';
import { ZoneServiceClient } from '@api/academy/gen/ts/proto/zone/web_admin/ZoneServiceClientPb';
import {
  CreateZoneReq,
  GetZoneReq,
  UpdateZoneReq,
  DeleteZoneReq,
  ListZoneReq,
  ListUserZoneReq,
} from '@api/academy/gen/ts/proto/zone/web_admin/zone_pb';

import { baseGRPC } from '@demen/e2e-core';

const zoneService = new ZoneServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);
const service = baseGRPC;
service.setService(zoneService);

export function createZone(data: CreateZoneReq.AsObject, metadata?: any) {
  const req = new CreateZoneReq();
  req.setName(data.name);
  req.setDescription(data.description);

  // Array<string>
  req.setGoalIdsList(data.goalIdsList);
  req.setCoverName(data.coverName);
  //   enum ZoneStatus {
  //     ZONE_STATUS_INVALID = 0,
  //     ZONE_STATUS_PUBLISHED = 1,
  //     ZONE_STATUS_UNPUBLISHED = 2,
  //     ZONE_STATUS_DRAFT = 3,

  req.setStatus(data.status);

  // Array<string>
  req.setTagsList(data.tagsList);
  req.setAddress(data.address);

  return service.grpc(zoneService.createZone, req, metadata);
}

export function getZone(data: GetZoneReq.AsObject, metadata?: any) {
  const req = new GetZoneReq();
  req.setId(data.id);

  return service.grpc(zoneService.getZone, req, metadata);
}

export function updateZone(data: UpdateZoneReq.AsObject, metadata?: any) {
  const req = new UpdateZoneReq();
  req.setId(data.id);

  req.setName(data.name);
  req.setDescription(data.description);

  // Array<string>
  req.setGoalIdsList(data.goalIdsList);
  req.setCoverName(data.coverName);
  //   enum ZoneStatus {
  //     ZONE_STATUS_INVALID = 0,
  //     ZONE_STATUS_PUBLISHED = 1,
  //     ZONE_STATUS_UNPUBLISHED = 2,
  //     ZONE_STATUS_DRAFT = 3,

  req.setStatus(data.status);

  // Array<string>
  req.setTagsList(data.tagsList);
  req.setAddress(data.address);

  return service.grpc(zoneService.updateZone, req, metadata);
}

export function deleteZone(data: DeleteZoneReq.AsObject, metadata?: any) {
  const req = new DeleteZoneReq();
  req.setId(data.id);

  return service.grpc(zoneService.deleteZone, req, metadata);
}

export function listZone(data: ListZoneReq.AsObject, metadata?: any) {
  const paginationPB = new PaginationReq();
  paginationPB.setPageNumber(data.pagination.pageNumber);
  paginationPB.setPageLimit(data.pagination.pageLimit);

  const req = new ListZoneReq();
  req.setPagination(paginationPB);

  // Array<string>
  req.setFilterTagsList(data.filterTagsList);
  req.setFilterKeywords(data.filterKeywords);

  return service.grpc(zoneService.listZone, req, metadata);
}

export function listUserZone(data: ListUserZoneReq.AsObject, metadata?: any) {
  const paginationPB = new PaginationReq();
  paginationPB.setPageNumber(data.pagination.pageNumber);
  paginationPB.setPageLimit(data.pagination.pageLimit);

  const req = new ListZoneReq();
  req.setPagination(paginationPB);

  // Array<string>
  req.setFilterTagsList(data.filterTagsList);
  req.setFilterKeywords(data.filterKeywords);

  return service.grpc(zoneService.listUserZone, req, metadata);
}
