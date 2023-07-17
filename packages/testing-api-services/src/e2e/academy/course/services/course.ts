import { PaginationReq } from '@api/academy/gen/ts/proto/common/web/paging_pb';
import { CourseServiceClient } from '@api/academy/gen/ts/proto/course/web_admin/CourseServiceClientPb';
import { CourseMap } from '@api/academy/gen/ts/proto/course/web_admin/course_pb';
import {
  CreateCourseReq,
  GetCourseReq,
  UpdateCourseReq,
  DeleteCourseReq,
  ListCourseReq,
} from '@api/academy/gen/ts/proto/course/web_admin/course_pb';
import { baseGRPC } from '@demen/e2e-core';

const courseService = new CourseServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);
const service = baseGRPC;
service.setService(courseService);

export function createCourse(data: CreateCourseReq.AsObject, metadata?: any) {
  const courseMapPb = data.coursesMapList.map(({ type, id }) => {
    const courseMap = new CourseMap();
    courseMap.setId(id);
    // CourseMapType {
    //     COURSE_MAP_TYPE_INVALID = 0,
    //     COURSE_MAP_TYPE_RESOURCE = 1,
    //     COURSE_MAP_TYPE_ASSIGNMENT = 2,
    //   }
    courseMap.setType(type);

    return courseMap;
  });

  const req = new CreateCourseReq();
  req.setName(data.name);
  // Array<string>
  req.setTagsList(data.tagsList);
  req.setCode(data.code);
  req.setDescription(data.description);
  req.setCoverName(data.coverName);
  // Array<string>
  req.setRequiredCourseIdsList(data.requiredCourseIdsList);
  //   CourseStatus {
  //     COURSE_STATUS_INVALID = 0,
  //     COURSE_STATUS_PUBLISHED = 1,
  //     COURSE_STATUS_UNPUBLISHED = 2,
  //     COURSE_STATUS_DRAFT = 3,
  //   }
  req.setStatus(data.status);
  req.setTheme(data.theme);
  req.coursesMapList(courseMapPb);

  return service.grpc(courseService.createCourse, req, metadata);
}

export function getCourse(data: GetCourseReq.AsObject, metadata?: any) {
  const req = new GetCourseReq();
  req.setId(data.id);

  return service.grpc(courseService.getCourse, req, metadata);
}

export function updateCourse(data: UpdateCourseReq.AsObject, metadata?: any) {
  const courseMapPb = data.coursesMapList.map(({ type, id }) => {
    const courseMap = new CourseMap();
    courseMap.setId(id);
    courseMap.setType(type);

    return courseMap;
  });

  const req = new UpdateCourseReq();
  req.setId(data.id);
  req.setName(data.name);
  // Array<string>
  req.setTagsList(data.tagsList);
  req.setCode(data.code);
  req.setDescription(data.description);
  req.setCoverName(data.coverName);
  req.setRequiredCourseIdsList(data.requiredCourseIdsList);
  req.setStatus(data.status);
  req.setTheme(data.theme);
  req.coursesMapList(courseMapPb);

  return service.grpc(courseService.updateCourse, req, metadata);
}

export function deleteCourse(data: DeleteCourseReq.AsObject, metadata?: any) {
  const req = new DeleteCourseReq();
  req.setId(data.id);

  return service.grpc(courseService.deleteCourse, req, metadata);
}

export function listCourse(data: ListCourseReq.AsObject, metadata?: any) {
  const paginationPB = new PaginationReq();
  paginationPB.setPageNumber(data.pagination.pageNumber);
  paginationPB.setPageLimit(data.pagination.pageLimit);

  const req = new ListCourseReq();
  //Array<string>
  req.setFilterTagsList(data.filterTagsList);
  req.setFilterKeywords(data.filterKeywords);

  return service.grpc(courseService.listCourse, req, metadata);
}
