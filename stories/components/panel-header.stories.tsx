/** @jsxImportSource @emotion/react */
import {
  Panel,
  PanelStack2,
  Dialog,
  DialogBody,
  DialogFooter,
} from '@blueprintjs/core';
import { PanelProps } from '@blueprintjs/core/lib/esnext/index';
import { css } from '@emotion/react';
import { useCallback, useState } from 'react';

import {
  PanelHeader,
  Accordion,
  Button,
  useOnOff,
  Toolbar,
  PanelPreferencesToolbar,
} from '../../src/components';

export default {
  title: 'Components / PanelHeader',
  component: PanelHeader,
};

export function Basic() {
  return (
    <div
      style={{
        height: 300,
      }}
    >
      <PanelHeader total={3} onClickSettings={() => void 0}>
        <Toolbar>
          <Toolbar.Item noTooltip title="trash" intent="danger" icon="trash" />
          <Toolbar.Item noTooltip title="filter" icon="filter" />
          <Toolbar.Item noTooltip title="plus" icon="plus" />
        </Toolbar>
      </PanelHeader>
    </div>
  );
}
export function WithDialog() {
  const [isOpen, open, close] = useOnOff();
  return (
    <div
      style={{
        height: 300,
      }}
    >
      <PanelHeader total={5} current={3} onClickSettings={open}>
        <Toolbar>
          <Toolbar.Item noTooltip title="trash" intent="danger" icon="trash" />
          <Toolbar.Item noTooltip title="filter" icon="filter" />
          <Toolbar.Item noTooltip title="plus" icon="plus" />
        </Toolbar>
      </PanelHeader>
      <Dialog title="Settings" icon="cog" isOpen={isOpen} onClose={close}>
        <DialogBody>
          <p style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            accusamus voluptas odit minima amet obcaecati eveniet voluptatibus
            assumenda esse animi id atque natus ipsa sunt iure illo,
            exercitationem voluptates non.
          </p>
        </DialogBody>
        <DialogFooter
          actions={<Button intent="primary" text="Save" onClick={close} />}
        />
      </Dialog>
    </div>
  );
}
export function WithAccordion() {
  return (
    <div
      style={{
        height: 300,
      }}
    >
      <Accordion>
        <Accordion.Item title="First Item" defaultOpened>
          <PanelHeader total={20} onClickSettings={() => void 0}>
            <Toolbar>
              <Toolbar.Item
                noTooltip
                title="trash"
                intent="danger"
                icon="trash"
              />
              <Toolbar.Item noTooltip title="filter" icon="filter" />
              <Toolbar.Item noTooltip title="plus" icon="plus" />
            </Toolbar>
          </PanelHeader>
          This is the first content
        </Accordion.Item>
        <Accordion.Item title="Second Item">
          <PanelHeader current={2} total={3} onClickSettings={() => void 0}>
            <Button minimal icon="filter" />
          </PanelHeader>
          This is the content of the second item
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
function PanelHeaderInit({ openPanel }: PanelProps<PanelInfo>) {
  return (
    <PanelHeader total={20} onClickSettings={() => void 0}>
      <Toolbar>
        <Toolbar.Item
          noTooltip
          title="trash"
          intent="danger"
          icon="trash"
          onClick={() =>
            openPanel({
              props: {
                content: 'Panel1',
              },
              renderPanel: PanelContainer,
              title: 'Panel 1',
            })
          }
        />
        <Toolbar.Item
          onClick={() =>
            openPanel({
              props: {
                content: `Panel2 ................................................
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                        dignissimos fugit porro debitis cupiditate similique quam exercitationem
                        natus hic delectus iste inventore itaque, dolorum eveniet ipsa sapiente
                        voluptatibus a ipsam. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Repellendus dignissimos fugit porro debitis cupiditate similique
                        quam exercitationem natus hic delectus iste inventore itaque, dolorum
                        eveniet ipsa sapiente voluptatibus a ipsam. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Repellendus dignissimos fugit porro debitis
                        cupiditate similique quam exercitationem natus hic delectus iste inventore
                        itaque, dolorum eveniet ipsa sapiente voluptatibus a ipsam. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Repellendus dignissimos fugit
                        porro debitis cupiditate similique quam exercitationem natus hic delectus
                        iste inventore itaque, dolorum eveniet ipsa sapiente voluptatibus a ipsam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                        dignissimos fugit porro debitis cupiditate similique quam exercitationem
                        natus hic delectus iste inventore itaque, dolorum eveniet ipsa sapiente
                        voluptatibus a ipsam. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Repellendus dignissimos fugit porro debitis cupiditate similique',`,
              },
              renderPanel: PanelContainer,
              title: 'Panel 2',
            })
          }
          noTooltip
          title="filter"
          icon="filter"
        />
        <Toolbar.Item
          onClick={() =>
            openPanel({
              props: {
                content: 'Panel3',
              },
              renderPanel: PanelContainer,
              title: 'Panel 3',
            })
          }
          noTooltip
          title="plus"
          icon="plus"
        />
      </Toolbar>
    </PanelHeader>
  );
}
interface PanelInfo {
  content?: string;
}
function PanelContainer({
  content = 'Panel',
  closePanel,
}: PanelProps<PanelInfo>) {
  return (
    <div>
      <PanelPreferencesToolbar onClose={closePanel} onSave={closePanel} />
      <div style={{ width: '100%', backgroundColor: 'grey' }}>{content}</div>
    </div>
  );
}

export function WithAccordionPanelToolbarStackedPanel() {
  const [currentPanelStack, setCurrentPanelStack] = useState<
    Array<Panel<PanelInfo>>
  >([
    {
      renderPanel: PanelHeaderInit,
      title: 'Panel Init',
    },
  ]);
  const addToPanelStack = useCallback(
    (newPanel: Panel<PanelInfo>) =>
      setCurrentPanelStack((stack) => [...stack, newPanel]),
    [],
  );
  const removeFromPanelStack = useCallback(
    () => setCurrentPanelStack((stack) => stack.slice(0, -1)),
    [],
  );

  return (
    <div
      style={{
        height: 300,
      }}
    >
      <Accordion>
        <Accordion.Item title="First Item" defaultOpened>
          <PanelStack2
            css={css`
              height: 100%;
            `}
            onOpen={addToPanelStack}
            onClose={removeFromPanelStack}
            stack={currentPanelStack}
            showPanelHeader={false}
            renderActivePanelOnly={false}
          />
        </Accordion.Item>
        <Accordion.Item title="Second Item">
          <PanelHeader current={2} total={3} onClickSettings={() => void 0}>
            <Button minimal icon="filter" />
          </PanelHeader>
          This is the content of the second item
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
