import { combineReducers } from "redux";
import appReducer from "./appReducer";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  app: appReducer,
})

export default rootReducer;
