import { ColumnsStateContext } from 'ant-table-excel/context';
import {
  useBearContext,
  useTemporalStore,
} from 'ant-table-excel/context/columnsState';
import { useWatch } from 'ant-table-excel/hooks/useWatch';
import { Button, Checkbox, Divider, Modal, ModalProps, Space } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { produce } from 'immer';
import React, {
  Dispatch,
  FC,
  memo,
  useCallback,
  useContext,
  useState,
} from 'react';
import { ColumnsState, ColumnWithState, Meta } from './type';
import { findColKey, getState, getVisible } from './util';

export type SettingModalProps = {
  columns: ColumnWithState[];
  meta: Meta;
  setIsOpenedSetting: Dispatch<boolean>;
} & ModalProps;

const mapVisibleToColumns = (
  columns: ColumnWithState[],
  columnsState: ColumnsState,
  defaultVisible: boolean,
) => {
  return columns.map((column) => {
    return {
      ...column,
      visible: !!getVisible(columnsState, defaultVisible)(column),
      disabled: getState(columnsState, column).disabled,
    };
  });
};

const SettingModal: FC<SettingModalProps> = ({
  columns,
  meta,
  setIsOpenedSetting,
  ...modalProps
}) => {
  const count = useBearContext((s) => s.count);
  const increment = useBearContext((state) => state.increment);
  const decrement = useBearContext((state) => state.decrement);

  const { undo, redo } = useTemporalStore((state) => state);

  console.log('count', count);

  const { columnsState, setColumnsState } = useContext(ColumnsStateContext);

  /**
   * 在 modal 代开时, 向columns 中注入visible 和disabled 属性
   * 顺序数量与 columns 一致,属性比 columns 多 visible
   * 搭配 isOpen 创建销毁, 才可以使用 useState 来计算
   */
  const [localColumns, setLocaleColumns] = useState(
    mapVisibleToColumns(columns, columnsState, !!meta.defaultVisible),
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

  const onOk = useCallback(() => {
    console.log('ok');
    increment(1);

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
    setIsOpenedSetting(false);
  }, [columnsState, localColumns, setColumnsState, setIsOpenedSetting]);

  return (
    <Modal
      title="列设置"
      onOk={onOk}
      onCancel={() => setIsOpenedSetting(false)}
      {...modalProps}
    >
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        全选
      </Checkbox>
      <Divider />
      bears: {count}
      <Button onClick={() => increment(1)}>increment</Button>
      <Button onClick={() => decrement(1)}>decrement</Button>
      <Button onClick={() => undo()}>undo</Button>
      <Button onClick={() => redo()}>redo</Button>
      <Space size={'small'}>
        {localColumns.map((column, index) => {
          return (
            <Checkbox
              key={findColKey(column)}
              checked={column.visible}
              onChange={(e) => {
                const checked = e.target.checked;
                console.log('onChange', checked);
                if (meta.onCheckboxChange) {
                  meta.onCheckboxChange?.(
                    checked,
                    setLocaleColumns,
                    index,
                    column,
                  );
                } else {
                  setLocaleColumns(
                    produce(localColumns, (draft) => {
                      draft[index].visible = checked;
                    }),
                  );
                }
              }}
              disabled={column.disabled}
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
