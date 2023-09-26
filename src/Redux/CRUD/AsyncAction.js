import { deleteData, getSingleData, readData, updateData } from "../API/APIs";
import {
  Failure,
  Success,
  addFailure,
  addRequest,
  addSuccess,
  deleteFailure,
  deleteSuccess,
  delete_Request,
  editFailure,
  editSuccess,
  updateFailure,
  updateRequest,
  updateSuccess,
} from "./Action";

// Read
export const getList = () => async (dispatch) => {
  dispatch(Failure());
  try {
    const req = await fetch(readData);
    const res = await req.json();
    dispatch(Success(res));
  } catch (err) {
    dispatch(Failure(err.message));
  }
};
// Create
export const addList = (payload) => async (dispatch) => {
  dispatch(addRequest());
  try {
    const req = await fetch(readData, {
      method: "post",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await req.json();
    dispatch(addSuccess(res));
  } catch (err) {
    dispatch(addFailure(err.message));
  }
};

// Update
export const getSingleList = (payload) => async (dispatch) => {
  dispatch(addRequest());
  try {
    const req = await fetch(`${getSingleData}${payload}`);
    const res = await req.json();
    dispatch(editSuccess(res));
  } catch (err) {
    dispatch(editFailure(err.message));
  }
};

export const updateList = (payload, id) => async (dispatch) => {
  dispatch(updateRequest());
  try {
    const req = await fetch(`${updateData}${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await req.json();
    dispatch(updateSuccess(res));
  } catch (err) {
    dispatch(updateFailure(err.message));
  }
};
// Delete
export const deleteList = (payload) => async (dispatch) => {
  dispatch(delete_Request());
  try {
    const req = await fetch(`${deleteData}${payload}`, {
      method: "DELETE",
    });
    dispatch(deleteSuccess(payload));
  } catch (err) {
    dispatch(deleteFailure(err.message));
  }
};
