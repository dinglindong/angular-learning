# vue3-org-tree 简介

&emsp;&emsp;vue3-org-tree 在 vue2-org-tree 基础上新增新增 selected 类，当前数据checked字段为true添加该类名


# webto 使用流程

## 安装 / Installation

```
npm install vue3-org-tree -S
```

## 导入 / Import

```
import Vue3OrgTree from 'vue3-org-tree'
components: {
    'vue3-org-tree': Vue3OrgTree
},
```

## 使用 / Use

```
<vue3-org-tree
   name="test"
   :data="treeList"
   :horizontal="false"
   :collapsable="collapsable"
   :render-content="renderContent"
   @on-expand="onExpand"
   @on-node-click="onNodeClick"
/>
```
[vue2-org-tree使用文档](http://www.mamicode.com/info-detail-2964091.html)
