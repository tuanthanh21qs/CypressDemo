import {
  UpdateCourseReq,
  UpdateCourseRes,
} from '@api/academy/gen/ts/proto/course/web_admin/course_pb';
import { updateCourse } from '../services/course';
import { dataUpdateCourse } from '../data/updateCourse';

let token = '';
let data: UpdateCourseReq.AsObject = {
  id: '',
  name: '',
  tagsList: [],
  code: '',
  description: '',
  requiredCourseIdsList: [],
  status: 0,
  coverName: '',
  theme: 0,
  courseMapsList: [],
};

describe('Course - Case Successfull', () => {
  it('Verify Update Course Successfull full fillment', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Update Course Successfull when required course empty', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.empty;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Update Course Successfull when course map empty', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.empty;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Update Course Successfull when description empty', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.empty;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Update Course Successfull when slug empty', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Update Course Successfull when Name exist', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.exist;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
});

describe.only('', () => {
  it('Verify Update Course Failed when id empty', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.empty;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        console.log('🚀 ~ file: updateCourse.cy.ts:154 ~ it ~ res:', data);
        console.log('🚀 ~ file: updateCourse.cy.ts:154 ~ it ~ res:', res);
        expect(res.message).to.equal('Trường COURSE_ID là bắt buộc');
      }
    );
  });
  it('Verify Update Course Failed when id incorrect', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.incorrect;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        expect(res.message).to.equal('COURSE_NOT_FOUND');
      }
    );
  });

  it('Verify Update Course Failed when Name empty', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.empty;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', res);
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });

  it('Verify Update Course Failed when tag list empty', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.empty;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', res);
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });

  it('Verify Update Course Failed when code empty', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.empty;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', res);
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Update Course Failed when code exist', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.exist;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', res);
        expect(res.message).to.equal('COURSE_CODE_ALREADY_EXIST');
      }
    );
  });

  it('Verify Update Course Failed when status invalid', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.invalid;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', res);
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Update Course Failed when status incorrect', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.incorrect;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', res);
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });

  it('Verify Update Course Failed when theme incorrect', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.incorrect;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', res);
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });

  it('Verify Update Course Failed when courseMapList not exist', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.notExist;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', res);
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });
  it('Verify Update Course Failed when courseMapList type incorrect', () => {
    token = dataUpdateCourse.token.correct;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.typeIncorrect;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', data);
        console.log('🚀 ~ file: updateCourse.cy.ts:199 ~ it.only ~ res:', res);
        cy.wrap(res.id).as('ID');
        expect(res.id).not.to.be.empty;
      }
    );
  });

  it('Verify Update Course Failed when token empty', () => {
    token = dataUpdateCourse.token.empty;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Update Course Failed when token incorrect', () => {
    token = dataUpdateCourse.token.incorrect;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
  it('Verify Update Course Failed when token expired', () => {
    token = dataUpdateCourse.token.expired;

    data.id = dataUpdateCourse.id.correct;
    data.name = dataUpdateCourse.name.valid;
    data.tagsList = dataUpdateCourse.tagsList.valid;
    data.code = dataUpdateCourse.code.valid;
    data.description = dataUpdateCourse.description.valid;
    data.requiredCourseIdsList = dataUpdateCourse.requiredCourseIdsList.valid;
    data.status = dataUpdateCourse.status.draft;
    data.coverName = dataUpdateCourse.coverName.valid;
    data.theme = dataUpdateCourse.theme.valid;
    data.courseMapsList = dataUpdateCourse.courseMapsList.valid;

    cy.wrap(updateCourse(data, { token }).catch((err) => err)).then(
      (res: UpdateCourseRes.AsObject) => {
        expect(res.message).to.equal(
          'Http response at 400 or 500 level, http status code: 403'
        );
      }
    );
  });
});
