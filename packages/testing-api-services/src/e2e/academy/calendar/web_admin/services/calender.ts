import { CalendarServiceClient } from '@api/academy/gen/ts/proto/calendar/web_admin/CalendarServiceClientPb';
import { GetEventsReq } from '@api/academy/gen/ts/proto/calendar/web_admin/calendar_pb';
import { baseGRPC } from '@demen/e2e-core';

const calendarService = new CalendarServiceClient(
  Cypress.env('BASE_API_URL'),
  null,
  null
);
const service = baseGRPC;
service.setService(calendarService);

export function getEvents(data: GetEventsReq.AsObject, metadata?: any) {
  const req = new GetEventsReq();

  req.setFilterZoneIdsList(data.filterZoneIdsList);
  req.setFilterGoalIdsList(data.filterGoalIdsList);
  req.setFilterSessionIdsList(data.filterSessionIdsList);
  req.setStartTime(data.startTime);
  req.setEndTime(data.endTime);

  return service.grpc(calendarService.getEvents, req, metadata);
}
