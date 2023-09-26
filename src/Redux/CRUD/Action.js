
// Read
export const Request = (payload) => ({
  type: "REQUEST",
  payload
})

export const Success = (payload) => ({
  type: "SUCCESS",
  payload
})

export const Failure = (payload) => ({
  type: "FAILURE",
  payload
})

// Create
export const addRequest = (payload) => ({
  type: "ADD_REQUEST",
  payload
})

export const addSuccess = (payload) => ({
  type: "ADD_SUCCESS",
  payload
})

export const addFailure = (payload) => ({
  type: "ADD_FAILURE",
  payload
})

// Update
export const editSuccess = (payload) => ({
  type: "EDIT_SUCCESS",
  payload
})

export const editFailure = (payload) => ({
  type: "EDIT_FAILURE",
  payload
})

export const updateRequest = (payload) => ({
  type: "update_REQUEST",
  payload
})

export const updateSuccess = (payload) => ({
  type: "update_SUCCESS",
  payload
})

export const updateFailure = (payload) => ({
  type: "update_FAILURE",
  payload
})

// Delete
export const delete_Request = (payload) => ({
  type: "DELETE_REQUEST",
  payload
})

export const deleteSuccess = (payload) => ({
  type: "DELETE_SUCCESS",
  payload
})

export const deleteFailure = (payload) => ({
  type: "DELETE_FAILURE",
  payload
})
