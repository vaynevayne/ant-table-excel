# ant-table-excel

[![NPM version](https://img.shields.io/npm/v/ant-table-excel.svg?style=flat)](https://npmjs.org/package/ant-table-excel)
[![NPM downloads](http://img.shields.io/npm/dm/ant-table-excel.svg?style=flat)](https://npmjs.org/package/ant-table-excel)

ant-table 库,支持导出excel,列拖拽排序,显示隐藏

## Usage

TODO

## Options

TODO

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# check your project for potential problems
$ pnpm run doctor
```

## LICENSE

MIT

FAQ:
- 为什么不支持 columns 受控 ? 
columns 作为列显示功能的的全量列表来渲染, 因为不可以被减少

- 为什么不把 visible,order 等功能放 column 字段上?
 column 支持了 render 函数,不方便序列化, 不利于回显,所以单独提供 table props 来做这件事,讲道理, 默认值是可以放column上的,但是既然提供了table props, 也就没必要放column,导致增加不必要的灵活性,总之,越简单越好