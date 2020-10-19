import reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";
import reactotronSaga from "reactotron-redux-saga";

declare global {
  interface Console {
    tron: any;
  }
}

if (process.env.NODE_ENV === "development") {
  const tron = reactotron
    .configure()
    .use(reactotronRedux())
    .use(reactotronSaga({}))
    .connect();

  tron.clear!();
  console.tron = tron;
}
