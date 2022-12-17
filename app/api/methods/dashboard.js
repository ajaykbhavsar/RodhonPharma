import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export  function getCourseList(action) {
  return Api(
      ApiConstants.COURSEPATH,
      null,
      'get',
      null
  );
}

export  function getBookList(action) {
  return Api(
      ApiConstants.BOOKPATH,
      null,
      'get',
      null
  );
}

export  function getHowtolearnList(action) {
  return Api(
      ApiConstants.HOWTOLEARNPATH,
      null,
      'get',
      null
  );
}