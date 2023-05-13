import { ColumnsStateContext } from 'ant-table-excel/context';
import { useWatch } from 'ant-table-excel/hooks/useWatch';
import { Checkbox, Divider, Modal, ModalProps, Space } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { produce } from 'immer';
import React, { FC, memo, useCallback, useContext, useState } from 'react';
import { ColumnsState, ColumnWithState } from './type';
import { findColKey, getVisible } from './util';

export type SettingModalProps = {
  columns: ColumnWithState[];
  defaultVisible: boolean;
} & ModalProps;

const mapVisibleToColumns = (
  columns: ColumnWithState[],
  columnsState: ColumnsState,
  defaultVisible: boolean,
) => {
  return columns.map((column) => {
    return {
      ...column,
      visible: getVisible(columnsState, defaultVisible)(column),
    };
  });
};

const SettingModal: FC<SettingModalProps> = ({
  columns,
  defaultVisible,
  ...modalProps
}) => {
  const { columnsState, setColumnsState } = useContext(ColumnsStateContext);

  /**
   * 顺序数量与 columns 一致,属性比 columns 多 visible
   * 搭配 isOpen 创建销毁, 才可以使用 useState 来计算
   */
  const [localColumns, setLocaleColumns] = useState(
    mapVisibleToColumns(columns, columnsState, defaultVisible),
  );

  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  useWatch(
    localColumns,
    (newLocalColumns) => {
      const isAllChecked = newLocalColumns.every((col) => col.visible);
      const isAllUnChecked = newLocalColumns.every((col) => !col.visible);

      setCheckAll(isAllChecked);
      setIndeterminate(!isAllUnChecked && !isAllChecked);
    },
    { immediate: true },
  );

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    setLocaleColumns(
      localColumns.map((columns) => ({
        ...columns,
        visible: e.target.checked,
      })),
    );
  };

  const onSubmit = useCallback(
    (e: any) => {
      /**
       * 允许 通过 defaultVisible=true visible=false
       * or  defaultVisible=false visible=true 来隐藏某一列, 所以所有 visible true/false 都需要保留
       */
      const newColumnsState = produce(columnsState, (draft) => {
        localColumns.forEach((column) => {
          const colKey = findColKey(column);
          draft[colKey] = {
            ...draft[colKey],
            visible: column.visible,
          };
        });
      });

      setColumnsState(newColumnsState);
      modalProps.onOk?.(e);
    },
    [columnsState, localColumns, modalProps, setColumnsState],
  );

  return (
    <Modal title="列设置" {...modalProps} onOk={onSubmit}>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        全选
      </Checkbox>
      <Divider />

      <Space size={'small'}>
        {localColumns.map((column, index) => {
          return (
            <Checkbox
              key={findColKey(column)}
              checked={column.visible}
              onChange={(e) => {
                const checked = e.target.checked;
                setLocaleColumns(
                  produce(localColumns, (draft) => {
                    draft[index].visible = checked;
                  }),
                );
              }}
            >
              {typeof column.title === 'function'
                ? // 不支持带参数的title函数
                  column.title({})
                : column.title}
            </Checkbox>
          );
        })}
      </Space>
    </Modal>
  );
};

export default memo(SettingModal);
