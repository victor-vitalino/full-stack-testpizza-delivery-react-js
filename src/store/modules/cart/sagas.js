import { call, select, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { formatPrice } from "../../../util/format";

import { addToCartSuccess, updateAmountSuccess } from "./actions";

function* addToCart({ product }) {
  
  yield put(addToCartSuccess(product));
}
function* updateAmount({ id, amount }) {
  yield put(updateAmountSuccess(id, amount));
}
export default all([
  takeLatest("@cart/ADD_REQUEST", addToCart),
  takeLatest("@cart/UPDATE_AMOUNT_REQUEST", updateAmount),
]);
