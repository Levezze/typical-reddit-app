import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setView } from "../slices/viewSlice";
import { setFeedColumns, resetFeedColumns } from "../slices/feedSlice";

const viewListenerMiddleware = createListenerMiddleware();

viewListenerMiddleware.startListening({
  actionCreator: setView,
  effect: async (action, listenerApi) => {
    if (action.payload > 0) {
      listenerApi.dispatch(setFeedColumns(1));
    } else {
      listenerApi.dispatch(resetFeedColumns());
    };
  },
});

export default viewListenerMiddleware;