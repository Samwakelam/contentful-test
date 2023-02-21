/* eslint-disable import/no-anonymous-default-export */

import { ConfirmModalType, ConfirmModal, Modal } from '../../../src';

export default {
  ['Delete Modal']: () => {
    return (
      <Modal onRequestClose={() => {}} isOpen={true}>
        <ConfirmModal
          type={ConfirmModalType.DELETE}
          dispatches={{}}
          onClose={() => {}}
        />
      </Modal>
    );
  },
  ['Leave Modal']: () => {
    return (
      <Modal onRequestClose={() => {}} isOpen={true}>
        <ConfirmModal
          type={ConfirmModalType.LEAVE}
          dispatches={
            {
              /* Will not process dispatch as there is no pageContent available */
            }
          }
          onClose={() => {}}
        />
      </Modal>
    );
  },
  ['Publish Modal']: () => {
    return (
      <Modal onRequestClose={() => {}} isOpen={true}>
        <ConfirmModal
          type={ConfirmModalType.PUBLISH}
          dispatches={{
            onPublishPage: async (item, isSuccess) => {
              alert(`You have published page ${item.id}`);
              isSuccess(true);
            },
          }}
          onClose={() => {}}
        />
      </Modal>
    );
  },
  ['Custom Content']: () => {
    return (
      <Modal onRequestClose={() => {}} isOpen={true}>
        <ConfirmModal
          type={ConfirmModalType.LEAVE}
          dispatches={
            {
              /* Will not process dispatch as there is no pageContent available */
            }
          }
          customContent={{
            title: 'Please save your changes',
            description:
              'You need to save your changes before you can preview or publish your page.',
            decline: { text: 'Cancel' },
          }}
          onClose={() => {}}
        />
      </Modal>
    );
  },
};
