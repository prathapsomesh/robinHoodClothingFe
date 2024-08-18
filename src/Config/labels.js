export const labels = {
  navbar: {
    title: 'Robin Hood Clothing',
    links: {
      products: 'PRODUCTS',
      vision: 'VISION',
      quality: 'QUALITY',
      contact: 'CONTACT',
      login: 'LOGIN',
      about: 'ABOUT',
    },
  },
  LOGIN_WITH_EMAIL: {
    AFTER_FILLED_ALL_DETAILS: 'Submit',
    DIVIDER_OR: 'OR',
    LOGIN_THROUGH_OTP: 'Login with OTP',
    DONT_HAVE_ACCOUNT: "Don't have an account ? ",
    CREATE_NEW_ACCOUNT: 'Register',
    ADMIN_LOGIN: 'ADMIN LOGIN',
  },
  ERRORS: {
    LOGIN_WITH_EMAIL: {
      'auth/user-not-found':
        'User with above user email does not exists with us .',
      'auth/wrong-password': 'Password Incorrect. Please try again !',
    },
    LOGIN_WITH_PHONE: {
      'auth/invalid-verification-code': 'Incorrect OTP',
      'auth/user-not-found':
        'User with above phone number does not exists with us .',
    },
    REGISTER: {
      'auth/invalid-verification-code': 'Incorrect OTP',
      'auth/invalid-phone-number': 'Invalid Phone Number',
      'auth/code-expired': 'OTP Expired',
      'auth/provider-already-linked':
        'User With the Email Or phone already registered with us.',
      'auth/email-already-in-use':
        'User With the Email Or phone already registered with us.',
      PASSWORD_DIDNOT_MATCH: 'Passwords did not match',
    },
    SOME_THING_WENT_WRONG: 'Something went wrong',
  },
  LOGIN_WITH_OTP: {
    SEND_OTP: 'Send OTP',
    DIVIDER_OR: 'OR',
    EMPLOYEE_LOGIN: 'EMPLOYEE LOGIN',
    DONT_HAVE_ACCOUNT: "Don't have an account ? ",
    CREATE_NEW_ACCOUNT: 'Register',
    CONFIRM_CODE: 'Confirm OTP',
    RESEND_OTP: 'Resend OTP',
    CHANGE_PHONE_NUMBER: 'Change phone number',
  },
  EMPLOYEE_LIST: {
    HEADING: 'EMPLOYEE LIST',
    ID: 'Id',
    NAME: 'Name',
    ACTION: 'Action',
    ACTIVE_STATUS: 'Active Status',
    ADD_EMPLOYEE: 'Add',
  },
  BUTTON: {
    EDIT: 'Edit',
    DELETE: 'Delete',
    DISABLE: 'Disable',
    VIEW_DETAILS: 'View',
  },
  PROFILE: {
    HEADING: ' Profile Info',
    NAME: 'Name',
    PHONE: 'Phone',
    EMAIL: 'Email',
    DESIGNATION: 'Designation',
    UTYPE: 'User type',
    STATUS: 'Status',
  },
  ADD_EMPLOYEE: {
    HEADING: 'ADD EMPLOYEE',
    SUBMIT: 'Submit',
    ID_CARD_UPLOAD: 'Upload Govt Id Card Image',
    ID_CARD_FORMAT: '( jpg / png ) ',
    ID_CARD_MANDATORY: '*',
    REGISTER: 'Login',
    MAX_FILE_SIZE_EXCEEDED:
      'Size exceeded! Maximum file size that can be uploded is 1MB .',
    PHOTO_UPLOAD: 'Upload Photo ',
    SUBMIT: 'Submit',
  },
  ATTENDANCE: {
    HEADING: 'ATTENDANCE',
    ID: 'Id',
    NAME: 'Name',
    SEARCH: 'Search',
    WORKED_HOURS: 'Worked Hours',
    SUBMIT: 'Submit',
    OT_HOURS: 'OT Hours',
    ADVANCE: 'Advance',
  },
};
