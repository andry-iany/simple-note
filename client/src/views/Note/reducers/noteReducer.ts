import { INote } from "../Note";
import { Reducer } from "react";

export enum INoteAction {
  CREATE = "create",
  DELETE = "delete",
  START_EDIT = "start_edit",
  CANCEL_EDIT = "cancel_edit",
  SUBMIT_EDIT = "submit_edit",
}

export interface INoteState {
  note: INote;
  preview: INote;
  isEditing: boolean;
}

export const initialState = {
  note: { title: "", body: "" },
  preview: { title: "", body: "" },
  isEditing: false,
};

const noteReducer: Reducer<INoteState, INoteAction> = () => {
  return initialState;
};

export default noteReducer;
