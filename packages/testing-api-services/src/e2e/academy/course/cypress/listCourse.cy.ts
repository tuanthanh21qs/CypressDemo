import {
  ListCourseReq,
  ListCourseRes,
} from '@api/academy/gen/ts/proto/course/web_admin/course_pb';
import { listCourse } from '../services/course';
import { dataListCourse } from '../data/listCourse';

let token = '';
let data: ListCourseReq.AsObject = {
  pagination: { pageNumber: 1, pageLimit: 20 },
  filterTagsList: [],
  filterKeywords: '',
};

describe('Course - List Successfull', () => {
  it('Verify List all Course Successfull', () => {
    token = dataListCourse.token.correct;

    cy.wrap(listCourse(data, { token }).catch((err) => err)).then(
      (res: ListCourseRes.AsObject) => {
        console.log(data);

        cy.wrap(res.coursesList).as('List Courses');
        cy.wrap(res.coursesList.length).as('Lenght List Courses');
        cy.wrap(res.coursesList[0].id).as('ID');
        cy.wrap(res.coursesList[0].name).as('Name');
        expect(res.coursesList[0].id).not.to.be.empty;
      }
    );
  });
  // it('Verify List all Course by tag list Successfull', () => {
  //   token = dataListCourse.token.correct;

  //   data.filterTagsList = dataListCourse.filterTagsList.haveResult;

  //   cy.wrap(listCourse(data, { token }).catch((err) => err)).then(
  //     (res: ListCourseRes.AsObject) => {
  //       console.log('🚀 ~ file: listCourse.cy.ts:38 ~ it.only ~ res:', data);
  //       console.log('🚀 ~ file: listCourse.cy.ts:38 ~ it.only ~ res:', res);
  //       cy.wrap(res.coursesList).as('List Courses');
  //       cy.wrap(res.coursesList.length).as('Lenght List Courses');
  //       cy.wrap(res.coursesList[0].id).as('ID');
  //       cy.wrap(res.coursesList[0].name).as('Name');
  //       expect(res.coursesList[0].id).not.to.be.empty;
  //     }
  //   );
  // });
  it('Verify List all Course by keyword Successfull', () => {
    token = dataListCourse.token.correct;

    data.filterKeywords = dataListCourse.filterKeywords.haveResult;

    cy.wrap(listCourse(data, { token }).catch((err) => err)).then(
      (res: ListCourseRes.AsObject) => {
        console.log('🚀 ~ file: listCourse.cy.ts:38 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: listCourse.cy.ts:38 ~ it.only ~ res:', res);
        cy.wrap(res.coursesList).as('List Courses');
        cy.wrap(res.coursesList.length).as('Lenght List Courses');
        cy.wrap(res.coursesList[0].id).as('ID');
        cy.wrap(res.coursesList[0].name).as('Name');
        expect(res.coursesList[0].id).not.to.be.empty;
      }
    );
  });
});

describe('Course - List Failed', () => {
  it('Verify List Goal Failed when token empty', () => {
    token = dataListCourse.token.empty;

    cy.wrap(listCourse(data, { token }).catch((err) => err)).then(
      (res: ListCourseRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify List Goal Failed when token incorrect', () => {
    token = dataListCourse.token.incorrect;

    cy.wrap(listCourse(data, { token }).catch((err) => err)).then(
      (res: ListCourseRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify List Goal Failed when token expired', () => {
    token = dataListCourse.token.expired;

    cy.wrap(listCourse(data, { token }).catch((err) => err)).then(
      (res: ListCourseRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });

  // it('Verify List Goal Failed when Tag list of course not exist', () => {
  //   token = dataListCourse.token.correct;

  //   data.filterTagsList = dataListCourse.filterTagsList.notHaveResult;

  //   cy.wrap(listCourse(data, { token }).catch((err) => err)).then(
  //     (res: ListCourseRes.AsObject) => {
  //       console.log('🚀 ~ file: listCourse.cy.ts:109 ~ it.only ~ res:', data);
  //       console.log('🚀 ~ file: listCourse.cy.ts:109 ~ it.only ~ res:', res);
  //       expect(res.message).to.equal('Lỗi');
  //     }
  //   );
  // });
  it('Verify List Goal Failed when Keyword of course not exist', () => {
    token = dataListCourse.token.correct;

    data.filterKeywords = dataListCourse.filterKeywords.notHaveResult;

    cy.wrap(listCourse(data, { token }).catch((err) => err)).then(
      (res: ListCourseRes.AsObject) => {
        console.log('🚀 ~ file: listCourse.cy.ts:122 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: listCourse.cy.ts:122 ~ it.only ~ res:', res);
        expect(res.coursesList.length).to.equal(0);
      }
    );
  });
});
