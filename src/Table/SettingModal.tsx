import { Checkbox, ColumnType, Divider, Modal, ModalProps } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import React, { FC, useMemo, useState } from 'react';

const CheckboxGroup = Checkbox.Group;

type CheckedValue = ColumnType['key'] | ColumnType['title'];

export type SettingModalProps = {
  checkedList: CheckedValue[];
  setCheckedList: (checkedList: CheckedValue[]) => void;
} & ModalProps;

const SettingModal: FC<SettingModalProps> = ({
  columns,
  checkedList,
  setCheckedList,
  ...other
}) => {
  const options = useMemo(() => {
    if (!columns) {
      return [];
    }
    return columns.map((col) => ({
      label: col.title,
      value: col.key || col.title,
      disabled: !!col.disabled,
    }));
  }, []);

  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < options.length);
    setCheckAll(list.length === options.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? options.map((item) => item.value) : []);
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
      <CheckboxGroup
        options={options}
        value={checkedList}
        onChange={onChange}
      />
    </Modal>
  );
};

export default SettingModal;
