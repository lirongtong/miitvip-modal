<p align="center">
    <a href="https://admin.makeit.vip/">
        <img width="200" src="https://file.makeit.vip/MIIT/M00/00/00/ajRkHV7QkoCAeo6PAAARuoXj0Jc275.png">
    </a>
</p>

<h1 align="center" color="green">
    <a href="https://admin.makeit.vip/" target="_blank" style="color: #41b995">
        Makeit Modal
    </a>
</h1>

<div align="center">

A unified template used to backend management based on Vue3.0 + Ant Design Vue + Vite

[![npm package](https://img.shields.io/npm/v/makeit-modal.svg?style=flat-square)](https://www.npmjs.org/package/modal)
[![npm_downloads](http://img.shields.io/npm/dm/makeit-modal.svg?style=flat-square)](http://www.npmtrends.com/makeit-modal)
![MIT](https://img.shields.io/badge/license-MIT-ff69b4.svg)
![webpack](https://img.shields.io/badge/webpack-5.17.0-orange.svg)
![vue](https://img.shields.io/badge/vue-3.0.5-green.svg)
![vite](https://img.shields.io/badge/vite-1.0.0-yellow.svg)

## 关于

> Makeit Modal 弹窗组件，是基于 Vue3.0 + Vite 开发。该组件可以在当前页面打开一个浮层来处理相关事务的某些节点，不影响整个事务的流程。内含多种弹出动效，同时包含快捷弹窗，便于快速处理浮窗提示。

## 安装

```bash
npm i makeit-modal
```

## 使用
```ts
import { createApp } from 'vue'
import MakeitModal from 'makeit-modal'
import 'makeit-modal/dist/modal.min.css'
import App from './app.vue'

const app = createApp(App)
app.use(MakeitModal)
app.mount('#app')
```

## 示例
```vue
<!-- 基础效果 -->
<template>
    <a-button type="primary" @click="handleModal">点击打开弹窗</a-button>
    <mi-modal v-model:visible="visible" title="标题">
        自定义弹窗内容（Modal Content）
    </mi-modal>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        data() {
            return {
                visible: false
            }
        },
        methods: {
            handleModal() {
                this.visible = !this.visible
            }
        }
    })
</script>

<!-- 快捷弹窗 -->
<template>
    <a-button class="mi-btn-success" @click="handleSuccess">Success</a-button>
    <a-button type="danger" @click="handleError">Error</a-button>
    <a-button class="mi-btn-warning" @click="handleWarning">Warning</a-button>
    <a-button class="mi-btn-info" @click="handleConfirm">Confirm</a-button>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        methods: {
            handleSuccess() {
                this.$miModal.success({
                    content: '操作成功（Successed）'
                })
            },
            handleError() {
                this.$miModal.error({
                    content: '操作失败（Failed）'
                })
            },
            handleConfirm() {
                this.$miModal.confirm({
                    content: '确定删除当前所选的条目吗？'
                })
            },
            handleWarning() {
                this.$miModal.warning({
                    content: '请引入 [ vue-route ] 组件'
                })
            }
        }
    })
</script>
```

## 更多
> 更多内容及使用请查看在线示例：[https://admin.makeit.vip/components/modal](https://admin.makeit.vip/components/modal)