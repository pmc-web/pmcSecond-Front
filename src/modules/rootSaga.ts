import { all, fork } from 'redux-saga/effects';
import sampleSaga from 'src/modules/sample/saga';

function* rootSaga() {
  yield all([fork(sampleSaga)]);
}
export default rootSaga;
