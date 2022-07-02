import { isNote } from "../Note";
import { INote } from "../Note";
import { Reducer } from "react";

export enum INoteActionType {
  CREATE = "create",
  DELETE = "delete",
  START_EDIT = "start_edit",
  CANCEL_EDIT = "cancel_edit",
  SUBMIT_EDIT = "submit_edit",
  UPDATE_PREVIEW = "update_preview",
}

export interface INoteAction {
  type: INoteActionType;
  payload?: unknown;
}

export interface INoteState {
  note: INote;
  preview: INote;
  isEditing: boolean;
}

export const initialState: INoteState = {
  note: { title: "", body: "" },
  preview: { title: "", body: "" },
  isEditing: false,
};

const noteReducer: Reducer<INoteState, INoteAction> = (state, action) => {
  switch (action.type) {
    case INoteActionType.START_EDIT:
      return handleStartEdit(state, action);
    case INoteActionType.CANCEL_EDIT:
      return handleCancelEdit(state, action);
    case INoteActionType.SUBMIT_EDIT:
      return handleSubmitEdit(state, action);
    case INoteActionType.CREATE:
      return handleStartNew(state, action);
    case INoteActionType.DELETE:
      return handleDelete(state, action);
    case INoteActionType.UPDATE_PREVIEW:
      return handleUpdatePreview(state, action);
  }
};

function handleStartEdit(state: INoteState, _action: INoteAction) {
  return {
    ...state,
    isEditing: true,
    preview: state.note,
  };
}
function handleCancelEdit(state: INoteState, _action: INoteAction) {
  return {
    ...state,
    isEditing: false,
  };
}
function handleSubmitEdit(state: INoteState, _action: INoteAction) {
  return {
    ...state,
    isEditing: false,
    note: state.preview,
  };
}
function handleStartNew(state: INoteState, action: INoteAction) {
  return {
    ...state,
    isEditing: true,
    note: initialState.note,
    preview: initialState.preview,
  };
}
function handleDelete(state: INoteState, action: INoteAction) {
  return {
    ...state,
    isEditing: false,
    note: initialState.note,
    preview: initialState.preview,
  };
}
function handleUpdatePreview(state: INoteState, action: INoteAction) {
  if (isNote(action.payload)) {
    return {
      ...state,
      preview: { title: action.payload.title, body: action.payload.body },
    };
  }
  return state;
}
export default noteReducer;
