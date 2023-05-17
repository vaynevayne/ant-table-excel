import { Table } from 'ant-table-excel';
import { produce } from 'immer';
import React, { useMemo, useState } from 'react';

export default () => {
  const columns = useMemo(
    () => [
      {
        title: 'Drag',
        key: 'Drag',
        render: (text, record, index) => (
          <a className="drag-handle" href="#">
            Drag
          </a>
        ),
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        sorter: (a, b) => a['age'] - b['age'],
      },
      {
        title: '地址',
        dataIndex: 'address',
      },
      {
        title: '电话',
        dataIndex: 'phone',
      },
    ],
    [],
  );

  const dataSource = [
    { name: '张3', age: 12, address: '北京', phone: 1388888888 },
    { name: '张4', age: 13, address: '上海', phone: 1388888888 },
    { name: '张5', age: 14, address: '杭州5', phone: 1388888888 },
    { name: '张6', age: 14, address: '杭州6', phone: 1388888888 },
    { name: '张7', age: 14, address: '杭州7', phone: 1388888888 },
  ];

  const [columnsState, onColumnsStateChange] = useState({ name: { order: 2 } });

  const onCheckboxChange = (checked, setLocalColumns, index, column) => {
    // 需求: 地址 age 有且仅有一个被选中

    setLocalColumns((localColumns) => {
      const ageIndex = localColumns.findIndex(
        (item) => item.dataIndex === 'age',
      );
      const addressIndex = localColumns.findIndex(
        (item) => item.dataIndex === 'address',
      );

      return produce(localColumns, (draft) => {
        if (ageIndex !== -1) draft[ageIndex].visible = false;
        if (addressIndex !== -1) draft[addressIndex].visible = false;

        draft[index].visible = checked;
      });
    });
    console.log('column', column);
  };

  return (
    <Table
      columns={columns}
      columnsState={columnsState}
      onColumnsStateChange={onColumnsStateChange}
      dataSource={dataSource}
      rowKey="name"
      onCheckboxChange={onCheckboxChange}
    ></Table>
  );
};
