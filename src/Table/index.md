---
title: title
order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: Table
  order: 控制导航顺序，数字越小越靠前，默认以路径长度和字典序排序
group:
  title: 列拖拽排序
  order: 控制分组顺序，数字越小越靠前，默认以路径长度和字典序排序
---

# 列拖拽排序

两种用法:

1. 非受控模式 `defaultColumns` 和 `onColumnsChange?`
2. 受控模式 `columns` 和 `onColumnsChange`

```jsx
import { Table } from 'ant-table-excel';
import { useMemo } from 'react';

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

  return (
    <Table
      defaultColumns={columns}
      onColumnsChange={console.log}
      dataSource={dataSource}
      rowKey="name"
    ></Table>
  );
};
```
