import {
  FileCollection,
  fileCollectionFromFiles,
  FileCollectionItem,
} from 'filelist-utils';

import { loadData } from '../data/append';
import { getIRAutoPeakPickingEnhancer } from '../data/enhancers/irAutoPeakPickingEnhancer';
import { irMeasurementEnhancer } from '../data/enhancers/irMeasurementEnhancer';
import { biologicLoader } from '../data/loaders/biologicLoader';
import { cdfLoader } from '../data/loaders/cdfLoader';
import { iumLoader } from '../data/loaders/iumLoader';
import { jcampLoader } from '../data/loaders/jcampLoader';
import { cary500Loader } from '../data/loaders/proprietary/agilent/cary500Loader';
import { spcLoader } from '../data/loaders/spcLoader';
import { wdfLoader } from '../data/loaders/wdfLoader';

import type { AppDispatch, AppState } from './appState';

const options = {
  loaders: [
    jcampLoader,
    spcLoader,
    wdfLoader,
    biologicLoader,
    cary500Loader,
    iumLoader,
    cdfLoader,
  ],
  enhancers: {
    ir: [
      irMeasurementEnhancer,
      getIRAutoPeakPickingEnhancer({ xVariable: 'x', yVariable: 'a' }),
    ],
  },
};

export async function loadIUM(
  file: File | FileCollectionItem,
  dispatch: AppDispatch,
) {
  dispatch({ type: 'LOAD_START' });
  try {
    const data = await file.text();
    const appState = JSON.parse(data);
    const payload: AppState = {
      ...appState,
      isLoading: true,
    };
    dispatch({
      type: 'LOAD_STATE',
      payload,
    });
  } finally {
    dispatch({ type: 'LOAD_END' });
  }
}
export async function loadFiles(
  files: File[] | FileCollection,
  dispatch: AppDispatch,
) {
  dispatch({ type: 'LOAD_START' });
  try {
    const fileCollection =
      files instanceof FileCollection
        ? files
        : await fileCollectionFromFiles(files);
    const data = await loadData(fileCollection, options);
    dispatch({ type: 'ADD_MEASUREMENTS', payload: data });
  } finally {
    dispatch({ type: 'LOAD_END' });
  }
}
