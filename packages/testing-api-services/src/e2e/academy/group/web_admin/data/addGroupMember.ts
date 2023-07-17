export const dataAddGroupMember = {
  successfull: {
    addByUserID: {
      groupAdminAddUserIsAdmin: {
        groupId: '64520c609895e1bcea8c9641',
        userIdsList: ['643cce572cfb6d0ffe26bd4a', ''],
        emailsList: [],
      },
      groupTeacherAddUserIsTeacher: {
        groupId: '645211cf9895e1bcea8c9670',
        userIdsList: ['6454acf04eb08e11af8a1c65', ''],
        emailsList: [],
      },
      groupLearnerAddUserIsLearner: {
        groupId: '644260a33dadc36ce81fa736',
        userIdsList: ['64366cb7e0a493545f319468', '64366cdae0a493545f31946a'],
        emailsList: [],
      },
    },
    addViaEmailIsRegister: {
      groupAdminAddUserIsAdmin: {},
      groupTeacherAddUserIsTeacher: {},
      groupLearnerAddUserIsLearner: {},
    },
    addViaEmailIsNotRegister: {
      groupAdminAddUserIsAdmin: {},
      groupTeacherAddUserIsTeacher: {},
      groupLearnerAddUserIsLearner: {},
    },
  },
  failed: {
    groupIdIncorrect: {},
    groupIdEmpty: {},

    groupAdminAddUserIsTeacher: {},
    groupAdminAddUserIsLearner: {},

    groupTeacherAddUserIsLearner: {},
    groupTeacherAddUserIsAdmin: {},

    groupLearnerAddUserIsAdmin: {},
    groupLearnerAddUserIsTeacher: {},

    userIdIncorrect: {},
    userIdEmpty: {},

    emailWrongFormat: {},
    emailEmpty: {},

    tokenIncorrect: {},
    tokenExpired: {},
    tokenEmpty: {},
  },
};
