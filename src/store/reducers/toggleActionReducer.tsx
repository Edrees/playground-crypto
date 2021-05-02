const toggleActionReducer = (toggleAction = false, action: any) => {
  switch (action.type) {
    case 'TOGGLE_ACTION':
      return action.payload;
    default:
      return toggleAction;
  }
};

export default toggleActionReducer