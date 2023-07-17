import {
  CreateCourseReq,
  CreateCourseRes,
} from '@api/academy/gen/ts/proto/course/web_admin/course_pb';
import { createCourse } from '../services/course';
import { dataCreateCourse } from '../data/createCourse';

let token = '';

let data: CreateCourseReq.AsObject = {
  name: '',
  tagsList: [],
  code: '',
  description: '',
  coverName: '',
  requiredCourseIdsList: [],
  status: 0,
  theme: 0,
  courseMapsList: [],
};
describe('Course - Case Successfull', () => {
  it('Verify Create Course Successfull', () => {
    token = dataCreateCourse.token.correct;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.valid;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.draft;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.valid;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        console.log('🚀 ~ file: createCourse.cy.ts:37 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createCourse.cy.ts:37 ~ it.only ~ res:', res);
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Course Successfull when required course empty', () => {
    token = dataCreateCourse.token.correct;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.valid;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.empty;
    data.status = dataCreateCourse.status.draft;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.valid;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        console.log('🚀 ~ file: createCourse.cy.ts:59 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createCourse.cy.ts:59 ~ it.only ~ res:', res);
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Course Successfull when course map empty', () => {
    token = dataCreateCourse.token.correct;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.valid;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.draft;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.empty;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Course Successfull when discription empty', () => {
    token = dataCreateCourse.token.correct;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.valid;
    data.description = dataCreateCourse.description.empty;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.draft;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.valid;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Course Successfull when slug empty', () => {
    token = dataCreateCourse.token.correct;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.valid;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.draft;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.valid;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Create Course Successfull when courseMapList empty', () => {
    token = dataCreateCourse.token.correct;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.valid;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.draft;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.empty;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
});

describe('Course - Case Failed', () => {
  it('Verify Create Course Failed when Name empty', () => {
    token = dataCreateCourse.token.correct;

    data.name = dataCreateCourse.name.empty;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.valid;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.draft;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.valid;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        console.log('🚀 ~ file: createCourse.cy.ts:147 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createCourse.cy.ts:147 ~ it.only ~ res:', res);

        expect(res.message).to.equal('Trường COURSE_NAME là bắt buộc');
      }
    );
  });

  it('Verify Create Course Failed when tag list empty', () => {
    token = dataCreateCourse.token.correct;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.empty;
    data.code = dataCreateCourse.code.valid;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.draft;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.valid;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        console.log('🚀 ~ file: createCourse.cy.ts:171 ~ it ~ res:', data);
        console.log('🚀 ~ file: createCourse.cy.ts:171 ~ it ~ res:', res);
        expect(res.message).to.equal('Trường COURSE_TAG là bắt buộc');
      }
    );
  });

  it('Verify Create Course Failed when code empty', () => {
    token = dataCreateCourse.token.correct;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.empty;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.draft;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.valid;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        console.log('🚀 ~ file: createCourse.cy.ts:194 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createCourse.cy.ts:194 ~ it.only ~ res:', res);
        expect(res.message).to.equal('Trường COURSE_CODE là bắt buộc');
      }
    );
  });
  it('Verify Create Course Failed when code exist', () => {
    token = dataCreateCourse.token.correct;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.exist;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.draft;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.valid;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        console.log('🚀 ~ file: createCourse.cy.ts:216 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createCourse.cy.ts:216 ~ it.only ~ res:', res);
        expect(res.message).to.equal('COURSE_CODE_ALREADY_EXIST');
      }
    );
  });

  it('Verify Create Course Failed when status invalid', () => {
    token = dataCreateCourse.token.correct;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.valid;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.invalid;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.valid;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        console.log('🚀 ~ file: createCourse.cy.ts:239 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createCourse.cy.ts:239 ~ it.only ~ res:', res);
        expect(res.message).to.equal('STATUS_IS_INVALID');
      }
    );
  });
  it('Verify Create Course Failed when status incorrect', () => {
    token = dataCreateCourse.token.correct;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.valid;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.incorrect;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.valid;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        console.log('🚀 ~ file: createCourse.cy.ts:261 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createCourse.cy.ts:261 ~ it.only ~ res:', res);
        expect(res.message).to.equal('STATUS_IS_INVALID');
      }
    );
  });

  it('Verify Create Course Failed when theme incorrect', () => {
    token = dataCreateCourse.token.correct;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.valid;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.draft;
    data.theme = dataCreateCourse.theme.incorrect;
    data.courseMapsList = dataCreateCourse.courseMapsList.valid;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        console.log('🚀 ~ file: createCourse.cy.ts:284 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: createCourse.cy.ts:284 ~ it.only ~ res:', res);
        expect(res.message).to.equal('COURSE_THEME_NOT_FOUND');
      }
    );
  });

  it('Verify Create Course Failed when courseMapList not exist', () => {
    token = dataCreateCourse.token.correct;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.valid;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.draft;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.notExist;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        console.log('🚀 ~ file: createCourse.cy.ts:307 ~ it ~ res:', data);
        console.log('🚀 ~ file: createCourse.cy.ts:307 ~ it ~ res:', res);
        expect(res.message).to.equal('RESOURCE_NOT_FOUND');
      }
    );
  });
  it('Verify Create Course Failed when courseMapList type incorrect', () => {
    token = dataCreateCourse.token.correct;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.valid;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.draft;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.typeIncorrect;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        expect(res.message).to.equal(
          'Đã có lỗi xảy ra vui lòng thử lại sau, hoặc liên hệ đội ngũ phát triễn'
        );
      }
    );
  });

  it('Verify Create Course Failed when token empty', () => {
    token = dataCreateCourse.token.empty;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.valid;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.draft;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.valid;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Create Course Failed when token incorrect', () => {
    token = dataCreateCourse.token.incorrect;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.valid;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.draft;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.valid;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Create Course Failed when token expired', () => {
    token = dataCreateCourse.token.expired;

    data.name = dataCreateCourse.name.valid;
    data.tagsList = dataCreateCourse.tagsList.valid;
    data.code = dataCreateCourse.code.valid;
    data.description = dataCreateCourse.description.valid;
    data.coverName = dataCreateCourse.coverName.valid;
    data.requiredCourseIdsList = dataCreateCourse.requiredCourseIdsList.valid;
    data.status = dataCreateCourse.status.draft;
    data.theme = dataCreateCourse.theme.valid;
    data.courseMapsList = dataCreateCourse.courseMapsList.valid;

    cy.wrap(createCourse(data, { token }).catch((err) => err)).then(
      (res: CreateCourseRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
});
