import { Table } from 'ant-table-excel';
import React, { useMemo } from 'react';

export default () => {
  const columns = useMemo(
    () => [
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
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
    { name: '张三', age: 12, address: '北京', phone: 1388888888 },
    { name: '张4', age: 13, address: '上海', phone: 1388888888 },
    { name: '张5', age: 14, address: '杭州', phone: 1388888888 },
  ];

  const defaultColumnsState = { name: { order: 2 } };

  return (
    <Table
      columns={columns}
      defaultColumnsState={defaultColumnsState}
      // onColumnsStateChange={console.log}
      dataSource={dataSource}
      rowKey="name"
    ></Table>
  );
};
