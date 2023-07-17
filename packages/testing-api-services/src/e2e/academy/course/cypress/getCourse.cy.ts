import {
  GetCourseReq,
  GetCourseRes,
} from '@api/academy/gen/ts/proto/course/web_admin/course_pb';
import { getCourse } from '../services/course';
import { dataGetCourse } from '../data/getCourse';

let token = '';
let data: GetCourseReq.AsObject = {
  id: '',
};

describe('Course - Case Successfull', () => {
  it('Verify Get Course Successfull', () => {
    token = dataGetCourse.token.correct;

    data.id = dataGetCourse.id.correct;

    cy.wrap(getCourse(data, { token }).catch((err) => err)).then(
      (res: GetCourseRes.AsObject) => {
        console.log('🚀 ~ file: getCourse.cy.ts:21 ~ it.only ~ res:', res);
        cy.wrap(res.course.id).as('ID');
        cy.wrap(res.course.name).as('Name');
        expect(res.course.id).not.to.be.empty;
      }
    );
  });
});

describe('Course - Case Failed', () => {
  it('Verify Get Course when id empty', () => {
    token = dataGetCourse.token.correct;

    data.id = dataGetCourse.id.empty;

    cy.wrap(getCourse(data, { token }).catch((err) => err)).then(
      (res: GetCourseRes.AsObject) => {
        console.log('🚀 ~ file: getCourse.cy.ts:37 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: getCourse.cy.ts:37 ~ it.only ~ res:', res);
        expect(res.message).to.equal('Trường COURSE_ID là bắt buộc');
      }
    );
  });
  it('Verify Get Course when id incorrect', () => {
    token = dataGetCourse.token.correct;

    data.id = dataGetCourse.id.incorrect;

    cy.wrap(getCourse(data, { token }).catch((err) => err)).then(
      (res: GetCourseRes.AsObject) => {
        expect(res.message).to.equal('COURSE_NOT_FOUND');
      }
    );
  });

  it('Verify Get Course when token empty', () => {
    token = dataGetCourse.token.empty;

    data.id = dataGetCourse.id.correct;

    cy.wrap(getCourse(data, { token }).catch((err) => err)).then(
      (res: GetCourseRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Get Course when token incorrect', () => {
    token = dataGetCourse.token.incorrect;

    data.id = dataGetCourse.id.correct;

    cy.wrap(getCourse(data, { token }).catch((err) => err)).then(
      (res: GetCourseRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Get Course when token expired', () => {
    token = dataGetCourse.token.expired;

    data.id = dataGetCourse.id.correct;

    cy.wrap(getCourse(data, { token }).catch((err) => err)).then(
      (res: GetCourseRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
});
