import { Draft } from 'immer';

import { AppState } from '../appState';
import { AppStateAction } from '../appStateActions';

import {
  addMeasurements,
  changeMeasurementDisplay,
  selectMeasurement,
  selectMeasurementKind,
} from './measurements';
import { ActionType, AppStateProducer } from './types';

export const loadFullState: AppStateProducer<'LOAD_FULL_STATE'> = (
  draft,
  action,
) => {
  const { data, view } = action.payload;
  draft.data = data;
  draft.view = view;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const producers: Record<ActionType, AppStateProducer<any>> = {
  ADD_MEASUREMENTS: addMeasurements,
  SELECT_MEASUREMENT: selectMeasurement,
  SELECT_MEASUREMENT_KIND: selectMeasurementKind,
  CHANGE_MEASUREMENT_DISPLAY: changeMeasurementDisplay,
  LOAD_FULL_STATE: loadFullState,
};

export function appStateProducer(
  draft: Draft<AppState>,
  action: AppStateAction,
) {
  const producer = producers[action.type];
  if (!producer) {
    throw new Error(`Missing producer for action type ${action.type}`);
  }
  producer(draft, action);
}