import { useState } from 'react';

// 让组件在 props 变化时更新 state
const useDerivedState = (value: any) => {
  // 使用useState定义内部状态和前一个状态
  const [internalValue, setInternalValue] = useState(value);
  const [prevValue, setPrevValue] = useState(value);

  // 如果传入的value和前一个状态不同，则更新内部状态和前一个状态
  if (value !== prevValue) {
    setPrevValue(value);
    setInternalValue(value);
  }
  // 返回内部状态和更新内部状态的函数
  return [internalValue, setInternalValue];
};

export default useDerivedState;
