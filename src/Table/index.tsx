import { ColumnsStateContext } from 'ant-table-excel/context';
import { useUncontrolled } from 'ant-table-excel/hooks';
import { Button, Col, Row, Space, Table, TableProps } from 'antd';
import { arrayMoveImmutable } from 'array-move';
import { produce } from 'immer';
import React, {
  Dispatch,
  FC,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Item, Menu, useContextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';
import ReactDragListView from 'react-drag-listview';
import './index.less';
import SettingModal from './SettingModal';
import { ColumnsState, ColumnWithState, Meta } from './type';
import { findColKey, getSorter, getVisible } from './util';

type MyTableProps = {
  /**
   * @description 可以在 column 中传入相关 columnState, 将作为默认值使用
   */
  columns: ColumnWithState[];

  defaultColumnsState?: ColumnsState;

  columnsState?: ColumnsState;

  onColumnsStateChange?: Dispatch<ColumnsState>;

  meta?: Meta;
} & TableProps<any>;

const MENU_ID = 'menu-id';

const MyTable: FC<MyTableProps> = ({
  columns: propColumns,
  defaultColumnsState,
  columnsState: propColumnsState,
  onColumnsStateChange,
  meta: propMeta,
  ...tableProps
}) => {
  // 函数参数默认值对 null 无效,所以在这里写引用类型默认值
  const columns = useMemo(() => propColumns || [], [propColumns]);
  const meta = useMemo(
    () => ({
      defaultVisible: true,
      ...propMeta,
    }),
    [propMeta],
  );

  const [columnsState, setColumnsState] = useUncontrolled<ColumnsState>({
    value: propColumnsState,
    defaultValue: defaultColumnsState,
    finalValue: {},
    onChange: onColumnsStateChange,
  });

  const tableColumns = useMemo(
    () =>
      columns
        .filter(Boolean)
        .sort(getSorter(columnsState))
        .filter(getVisible(columnsState, meta.defaultVisible)),
    [columns, columnsState, meta.defaultVisible],
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  // 🔥 you can use this hook from everywhere. All you need is the menu id
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  const dragProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const moved = arrayMoveImmutable<ColumnWithState>(
        tableColumns,
        fromIndex,
        toIndex,
      );

      const newColumnsState = produce(columnsState, (draft) => {
        moved.forEach((col, idx) => {
          const colKey = findColKey(col);
          draft[colKey] = {
            ...draft[colKey],
            order: idx,
          };
        });
      });
      setColumnsState(newColumnsState);
    },
    nodeSelector: 'th',
  };

  const contextValue = useMemo(
    () => ({
      columnsState,
      setColumnsState,
    }),
    [columnsState, setColumnsState],
  );

  const onOk = useCallback(() => setIsModalOpen(false), []);
  const onCancel = useCallback(() => setIsModalOpen(false), []);

  return (
    <>
      <Row wrap={false}>
        <Col flex={1}></Col>
        <Col flex="none">
          <Space style={{ marginBottom: 8, marginLeft: 'auto' }}>
            <Button onClick={() => setIsModalOpen(true)}>列设置</Button>
          </Space>
        </Col>
      </Row>

      <ReactDragListView.DragColumn {...dragProps}>
        <Table
          columns={tableColumns}
          {...tableProps}
          onRow={(record) => {
            return {
              onContextMenu: (event) => {
                show({
                  event,
                  props: record,
                });
              },
            };
          }}
        />
      </ReactDragListView.DragColumn>

      <ColumnsStateContext.Provider value={contextValue}>
        {
          // 不能去除, 为了每次打开modal, useState重新执行
          isModalOpen && (
            <SettingModal
              columns={columns}
              open={isModalOpen}
              onOk={onOk}
              onCancel={onCancel}
              meta={meta}
            ></SettingModal>
          )
        }
      </ColumnsStateContext.Provider>

      {meta.contextMenus?.length && (
        <Menu id={MENU_ID}>
          {meta.contextMenus.map((item, index) => (
            <Item
              key={item.key || index}
              onClick={meta.handleItemClick}
              {...item}
            >
              {item.children}
            </Item>
          ))}
        </Menu>
      )}
    </>
  );
};

const MemoTable = memo(MyTable);
export default MemoTable;
