import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 引入样式文件（可选）
import App from './App'; // 主组件文件
import reportWebVitals from './reportWebVitals'; // 可选：性能报告工具

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 如果你不希望在这个应用中监听性能报告，也可以注释掉
reportWebVitals();
