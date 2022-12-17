import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export function loadCourseDetail(action) {
    
  return Api(
      ApiConstants.COURSE_DETAIL+"?courseid="+action.uniqueid,
      null,
      'get',
      null
  );
}

export function loadEpisodeDetail(action) {
    
  return Api(
      ApiConstants.EPISODE_DETAIL+"?episodeid="+action.uniqueid,
      null,
      'get',
      null
  );
}