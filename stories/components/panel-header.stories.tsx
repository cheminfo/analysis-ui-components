import {
  PanelHeader,
  Accordion,
  Button,
  Modal,
  useOnOff,
  Toolbar,
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
export function WithModal() {
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
      <Modal isOpen={isOpen} onRequestClose={close} width={400}>
        <Modal.Header>Settings</Modal.Header>
        <Modal.Body>
          <p style={{ paddingLeft: 20, paddingRight: 20 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            accusamus voluptas odit minima amet obcaecati eveniet voluptatibus
            assumenda esse animi id atque natus ipsa sunt iure illo,
            exercitationem voluptates non.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
            }}
          >
            <Button intent="primary" onClick={close}>
              Save
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
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
