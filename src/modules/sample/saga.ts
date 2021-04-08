import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { /* getSomething, */ postSomething } from 'src/modules/sample/api';
import { sampleActions } from './slice';

function* sampleGetSaga() {
  try {
    // const { data } = yield call(getSomething);
    yield put(sampleActions.getSuccess('test'));
  } catch (error) {
    console.error(error.message);
    yield put(sampleActions.getFailure());
  }
}

function* samplePostSaga({ payload }: ReturnType<typeof sampleActions.postRequest>) {
  try {
    const { data } = yield call(postSomething, payload);
    yield put(sampleActions.postSuccess(data));
  } catch (error) {
    console.error(error.message);
    yield put(sampleActions.postFailure());
  }
}

export default function* watcher() {
  yield all([
    takeEvery(sampleActions.getRequest, sampleGetSaga),
    takeLatest(sampleActions.postRequest, samplePostSaga),
  ]);
}
