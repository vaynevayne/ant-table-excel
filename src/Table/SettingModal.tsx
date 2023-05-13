import { ColumnsStateContext } from 'ant-table-excel/context';
import { Checkbox, Divider, Modal, ModalProps, Space } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { produce } from 'immer';
import React, { FC, memo, useContext, useState } from 'react';
import { ColumnWithState } from './type';
import { calcVisible, findColKey } from './util';

export type SettingModalProps = {
  columns: ColumnWithState[];
  defaultVisible: boolean;
} & ModalProps;

const SettingModal: FC<SettingModalProps> = ({
  columns,
  defaultVisible,
  ...other
}) => {
  const { columnsState, setColumnsState } = useContext(ColumnsStateContext);
  console.log('modal render');

  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <Modal title="Basic Modal" {...other}>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        全选
      </Checkbox>
      <Divider />

      <Space size={'small'}>
        {columns.map((column) => {
          console.log('render columns');

          const checked = calcVisible(columnsState, defaultVisible)(column);
          return (
            <Checkbox
              key={findColKey(column)}
              onChange={(e) => {
                const checked = e.target.checked;
                const colKey = findColKey(column);
                const newColumnsState = produce(columnsState, (draft) => {
                  draft[colKey] = { ...draft[colKey], visible: checked };
                });
                console.log('newColumnsState', newColumnsState);

                setColumnsState(newColumnsState);
              }}
              checked={checked}
            >
              {typeof column.title === 'function'
                ? column.title({})
                : column.title}
            </Checkbox>
          );
        })}
      </Space>
    </Modal>
  );
};

export default memo(SettingModal);
