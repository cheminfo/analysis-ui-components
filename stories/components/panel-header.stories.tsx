import {
  PanelHeader,
  Accordion,
  Button,
  Modal,
  useOnOff,
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
      <PanelHeader total={3} onClickSettings={() => {}}>
        <Button minimal intent="danger" icon="trash" />
        <Button minimal icon="filter" />
        <Button minimal icon="plus" />
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
        <Button minimal intent="danger" icon="trash" />
        <Button minimal icon="filter" />
        <Button minimal icon="plus" />
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
          <PanelHeader total={20} onClickSettings={() => {}}>
            <Button minimal intent="danger" icon="trash" />
            <Button minimal icon="filter" />
            <Button minimal icon="plus" />
          </PanelHeader>
          This is the first content
        </Accordion.Item>
        <Accordion.Item title="Second Item">
          <PanelHeader current={2} total={3} onClickSettings={() => {}}>
            <Button minimal icon="filter" />
          </PanelHeader>
          This is the content of the second item
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
