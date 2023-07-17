import {
  DeleteCourseReq,
  DeleteCourseRes,
} from '@api/academy/gen/ts/proto/course/web_admin/course_pb';
import { deleteCourse } from '../services/course';
import { dataDeleteCourse } from '../data/deleteCourse';

let token = '';

let data: DeleteCourseReq.AsObject = {
  id: '',
};

describe('Course - Case Successfull', () => {
  it.skip('Verify Delete Course Successfull', () => {
    token = dataDeleteCourse.token.correct;

    data.id = dataDeleteCourse.id.correct;
    cy.wrap(deleteCourse(data, { token }).catch((err) => err)).then(
      (res: DeleteCourseRes.AsObject) => {
        expect(res).to.be.empty;
      }
    );
  });
});

describe('Course - Case Failed', () => {
  it('Verify Delete Course when id empty', () => {
    token = dataDeleteCourse.token.correct;

    data.id = dataDeleteCourse.id.empty;

    cy.wrap(deleteCourse(data, { token }).catch((err) => err)).then(
      (res: DeleteCourseRes.AsObject) => {
        console.log('🚀 ~ file: deleteCourse.cy.ts:35 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: deleteCourse.cy.ts:35 ~ it.only ~ res:', res);
        expect(res.message).to.equal('Trường COURSE_ID là bắt buộc');
      }
    );
  });
  it('Verify Delete Course when id incorrect', () => {
    token = dataDeleteCourse.token.correct;

    data.id = dataDeleteCourse.id.incorrect;

    cy.wrap(deleteCourse(data, { token }).catch((err) => err)).then(
      (res: DeleteCourseRes.AsObject) => {
        console.log('🚀 ~ file: deleteCourse.cy.ts:48 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: deleteCourse.cy.ts:48 ~ it.only ~ res:', res);
        expect(res.message).to.equal('COURSE_NOT_FOUND');
      }
    );
  });

  it('Verify Delete Course when token empty', () => {
    token = dataDeleteCourse.token.empty;

    data.id = dataDeleteCourse.id.correct;

    cy.wrap(deleteCourse(data, { token }).catch((err) => err)).then(
      (res: DeleteCourseRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Delete Course when token incorrect', () => {
    token = dataDeleteCourse.token.incorrect;

    data.id = dataDeleteCourse.id.correct;

    cy.wrap(deleteCourse(data, { token }).catch((err) => err)).then(
      (res: DeleteCourseRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Delete Course when token expired', () => {
    token = dataDeleteCourse.token.expired;

    data.id = dataDeleteCourse.id.correct;

    cy.wrap(deleteCourse(data, { token }).catch((err) => err)).then(
      (res: DeleteCourseRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
});
