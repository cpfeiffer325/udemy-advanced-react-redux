export default ({ dispatch }) => next => action => {
  // check to see if the action has a promiste on its 'payload' property
  // If it does: wait for it to resolve
  // If no: send the action on to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action)
  }

  // we want to wait for the promise to resolve
  // get its data, and then create a new action with that data and dispatch
  action.payload.then(response => {
    const newAction = { ...action, payload: response }
    dispatch(newAction)
  })
}

