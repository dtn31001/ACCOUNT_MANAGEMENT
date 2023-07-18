/** @format */

import { CLOSE_FORM, SHOW_FORM } from "../Contants/ActionType";

export let actionShowForm = () => {
  return {
    type: SHOW_FORM,
  };
};

export let actionCloseForm = () => {
  return {
    type: CLOSE_FORM,
  };
};
