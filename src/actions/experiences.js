// @flow
import {experiencesService} from '../feathers'

type Dispatch = ({
  type: string,
  payload?: Array<Object>
}) => void

export const fetchAllExperiences = () => {
  return async (dispatch: Dispatch) => {
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
