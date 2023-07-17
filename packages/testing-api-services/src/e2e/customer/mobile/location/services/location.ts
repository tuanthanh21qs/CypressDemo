import { CustomerLocationServiceClient } from '@api/customer/gen/ts/customer/proto/customer/mobile/LocationServiceClientPb';
import {
  Coordinates,
  OrderByItem,
  PaginationReq,
} from '@api/customer/gen/ts/customer/proto/customer/mobile/base_pb';
import {
  CreateMyLocationReq,
  CustomerLocationBasicInfo,
  UpdateMyLocationReq,
  DeleteMyLocationReq,
  RetrieveMyLocationReq,
  ListMyLocationReq,
} from '@api/customer/gen/ts/customer/proto/customer/mobile/location_pb';
import { baseGRPC } from '@demen/e2e-core';

const locationService = new CustomerLocationServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);

const service = baseGRPC;
service.setService(locationService);

export function createMyLocation(
  data?: CreateMyLocationReq.AsObject,
  metadata?: any
) {
  const coordinatesPb = new Coordinates();
  coordinatesPb.setLat(data.info.coordinates.lat);
  coordinatesPb.setLong(data.info.coordinates.pb_long);

  const customerLocationBasicInfoPb = new CustomerLocationBasicInfo();
  customerLocationBasicInfoPb.setName(data.info.name);
  customerLocationBasicInfoPb.setDescription(data.info.description);
  customerLocationBasicInfoPb.setCoordinates(coordinatesPb);
  customerLocationBasicInfoPb.setUnit(data.info.unit);
  customerLocationBasicInfoPb.setNumber(data.info.number);
  customerLocationBasicInfoPb.setStreet(data.info.street);
  customerLocationBasicInfoPb.setWard(data.info.ward);
  customerLocationBasicInfoPb.setDistrict(data.info.district);
  customerLocationBasicInfoPb.setCity(data.info.city);
  customerLocationBasicInfoPb.setRegion(data.info.region);
  customerLocationBasicInfoPb.setCountry(data.info.country);
  customerLocationBasicInfoPb.setPostalCode(data.info.postalCode);
  customerLocationBasicInfoPb.setFullAddress(data.info.fullAddress);
  customerLocationBasicInfoPb.setSuburban(data.info.suburban);
  customerLocationBasicInfoPb.setUserFullName(data.info.userFullName);
  customerLocationBasicInfoPb.setUserPhoneCode(data.info.userPhoneCode);
  customerLocationBasicInfoPb.setUserPhoneNumber(data.info.userPhoneNumber);

  const req = new CreateMyLocationReq();
  req.setInfo(customerLocationBasicInfoPb);

  return service.grpc(locationService.createMyLocation, req, metadata);
}

export function updateMyLocation(
  data?: UpdateMyLocationReq.AsObject,
  metadata?: any
) {
  const coordinatesPb = new Coordinates();
  coordinatesPb.setLat(data.info.coordinates.lat);
  coordinatesPb.setLong(data.info.coordinates.pb_long);

  const customerLocationBasicInfoPb = new CustomerLocationBasicInfo();
  customerLocationBasicInfoPb.setName(data.info.name);
  customerLocationBasicInfoPb.setDescription(data.info.description);
  customerLocationBasicInfoPb.setCoordinates(coordinatesPb);
  customerLocationBasicInfoPb.setUnit(data.info.unit);
  customerLocationBasicInfoPb.setNumber(data.info.number);
  customerLocationBasicInfoPb.setStreet(data.info.street);
  customerLocationBasicInfoPb.setWard(data.info.ward);
  customerLocationBasicInfoPb.setDistrict(data.info.district);
  customerLocationBasicInfoPb.setCity(data.info.city);
  customerLocationBasicInfoPb.setRegion(data.info.region);
  customerLocationBasicInfoPb.setCountry(data.info.country);
  customerLocationBasicInfoPb.setPostalCode(data.info.postalCode);
  customerLocationBasicInfoPb.setFullAddress(data.info.fullAddress);
  customerLocationBasicInfoPb.setSuburban(data.info.suburban);
  customerLocationBasicInfoPb.setUserFullName(data.info.userFullName);
  customerLocationBasicInfoPb.setUserPhoneCode(data.info.userPhoneCode);
  customerLocationBasicInfoPb.setUserPhoneNumber(data.info.userPhoneNumber);

  const req = new UpdateMyLocationReq();
  req.setId(data.id);
  req.setInfo(customerLocationBasicInfoPb);

  return service.grpc(locationService.updateMyLocation, req, metadata);
}

export function deleteMyLocation(
  data?: DeleteMyLocationReq.AsObject,
  metadata?: any
) {
  const req = new DeleteMyLocationReq();
  req.setId(data.id);

  return service.grpc(locationService.deleteMyLocation, req, metadata);
}

export function retrieveMyLocation(
  data?: RetrieveMyLocationReq.AsObject,
  metadata?: any
) {
  const req = new RetrieveMyLocationReq();
  req.setId(data.id);

  return service.grpc(locationService.retrieveMyLocation, req, metadata);
}

export function listMyLocation(
  data?: ListMyLocationReq.AsObject,
  metadata?: any
) {
  const pagination = new PaginationReq();
  pagination.setPageNumber(data.pagination.pageNumber);
  pagination.setPageLimit(data.pagination.pageLimit);

  const orderByListPb = data.orderByList.map((orderByList) => {
    const order = new OrderByItem();
    order.setDesc(orderByList.desc);
    order.setField(orderByList.field);

    return order;
  });

  const req = new ListMyLocationReq();
  req.setSearchText(data.searchText);
  req.setPagination(pagination);
  req.setOrderByList(orderByListPb);

  return service.grpc(locationService.listMyLocation, req, metadata);
}
