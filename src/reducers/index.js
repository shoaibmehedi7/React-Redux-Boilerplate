import Counter from "./reducer_counter";
import { combineReducers } from "redux";
console.log("root red")
const rootReducer = combineReducers({
  number: Counter
});

export default rootReducer;
