/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import {
  getCurrentMeasurement,
  getSelectedMeasurement,
  useAppDispatch,
  useAppState,
} from '../../app-data/index';
import {
  MeasurementExplorer,
  MeasurementInfoPanel,
  MeasurementsPanel,
} from '../../app/index';
import {
  Accordion,
  DropZoneContainer,
  FullscreenToolbarButton,
  Header,
  SplitPane,
  Toolbar,
} from '../../components/index';

import { useLoadFiles } from './hooks/useLoadFiles';

const mainCss = {
  root: css`
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  bottom: css`
    display: flex;
    flex-direction: row;
    flex: 1;
  `,
  contents: css`
    width: 100%;
    height: 100%;
  `,
  measurement: css`
    padding: 5px;
    width: 100%;
    height: 100%;
  `,
  panels: css`
    width: 100%;
    height: 100%;
    flex: 1 1 0%;
  `,
};

export default function MainLayout() {
  const dispatch = useAppDispatch();
  const appState = useAppState();
  const measurement = getCurrentMeasurement(appState);
  const loadFiles = useLoadFiles();

  return (
    <div css={mainCss.root}>
      <Header>
        <Toolbar orientation="horizontal">
          <div />
        </Toolbar>
        <Toolbar orientation="horizontal">
          <FullscreenToolbarButton />
        </Toolbar>
      </Header>
      <div css={mainCss.bottom}>
        <div>
          <Toolbar orientation="vertical">
            <div />
          </Toolbar>
        </div>
        <div css={mainCss.contents}>
          <SplitPane
            initialSize="400px"
            initialClosed={500}
            controlledSide="end"
          >
            <div css={mainCss.measurement}>
              <DropZoneContainer onDrop={loadFiles}>
                {measurement ? (
                  <MeasurementExplorer
                    measurement={measurement}
                    width="100%"
                    height="100%"
                    kind={appState.view.selectedKind === 'mass' ? 'mass' : '1d'}
                  />
                ) : null}
              </DropZoneContainer>
            </div>
            <div css={mainCss.panels}>
              <Accordion>
                <Accordion.Item title="Measurements" defaultOpened>
                  <MeasurementsPanel
                    measurements={appState.data.measurements}
                    onTabSelect={(kind) => {
                      dispatch({
                        type: 'SELECT_MEASUREMENT_KIND',
                        payload: kind,
                      });
                    }}
                    selectedMeasurement={getSelectedMeasurement(appState)}
                    onMeasurementSelect={({ measurement, kind }) => {
                      dispatch({
                        type: 'SELECT_MEASUREMENT',
                        payload: { id: measurement.id, kind },
                      });
                    }}
                  />
                </Accordion.Item>
                <Accordion.Item title="Measurement info" defaultOpened>
                  {measurement && (
                    <MeasurementInfoPanel measurement={measurement} />
                  )}
                </Accordion.Item>
              </Accordion>
            </div>
          </SplitPane>
        </div>
      </div>
    </div>
  );
}