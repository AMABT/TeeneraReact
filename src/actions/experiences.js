// @flow
import {experiencesService} from '../feathers'

export const fetchAllExperiences = () => {
  return async (dispatch) => {
    dispatch({
      type: 'EXPERIENCES_FETCHING'
    })
    const response: { data: Array<Object> } = await experiencesService.find()
    dispatch({
      type: 'EXPERIENCES_FETCHED',
      payload: response.data
    })
  }
}
