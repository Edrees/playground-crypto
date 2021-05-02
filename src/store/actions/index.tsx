export const toggleAction = (state: boolean) => (dispatch: any) => {
  dispatch({
    type: 'TOGGLE_ACTION',
    payload: state,
  })
}