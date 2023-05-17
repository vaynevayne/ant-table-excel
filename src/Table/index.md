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

使用方式:

- 通过 columnsState 传入 order, visible (优先级 高)
- 也可以通过 column.order column.visible 传入默认值 (优先级 中)
- 也可以通过 table 的 defaultVisible 传入全局默认值 (优先级 低)

### Demo

<code src="./demo/controlled.tsx" description='受控模式用法'>受控模式</code>

<code src="./demo/uncontrolled.tsx">非受控模式</code>

<code src="./demo/contextmenu.tsx">右键菜单</code>

### API

| prop                 | 描述                                                          | 类型                                                                              | 默认值                  |
| -------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------- |
| columns              | 同 antd, 扩展了 visible 和 order , 以便通过 column 传递默认值 | `ColumnWithState[]`                                                               | 无                      |
| defaultColumnsState  | 列状态的非受控属性                                            | `ColumnsState`                                                                    | 无                      |
| columnsState         | 列状态的受控属性                                              | `ColumnsState`                                                                    | 无                      |
| onColumnsStateChange | 列状态改变时调用                                              | `(columnsState:ColumnsState, reason:'order' \| 'visible')=> void`                 | 无                      |
| meta                 | 除了以上属性,其他属性都放到该命名空间下                       | `Meta`                                                                            | `{defaultVisible:true}` |
| `.drag-handle`       | 具有该类名的列可以开启行拖拽                                  | `render: (text, record, index) => <a className="drag-handle" href="#">Drag</a> }` | 无                      |
