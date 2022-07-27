<p align="center">
    <a href="https://admin.makeit.vip/">
        <img width="200" src="https://file.makeit.vip/MIIT/M00/00/00/ajRkHV_pUyOALE2LAAAtlj6Tt_s370.png">
    </a>
</p>

<h1 align="center" color="green">
    <a href="https://admin.makeit.vip/" target="_blank" style="color: #41b995">
        Makeit Modal
    </a>
</h1>

<div align="center">

基于 Vue3.x + Vite 开发的弹窗组件 Makeit Modal

[![npm package](https://img.shields.io/npm/v/makeit-modal.svg?style=flat-square)](https://www.npmjs.org/package/modal)
[![npm_downloads](http://img.shields.io/npm/dm/makeit-modal.svg?style=flat-square)](http://www.npmtrends.com/makeit-modal)
![MIT](https://img.shields.io/badge/license-MIT-ff69b4.svg)
![webpack](https://img.shields.io/badge/webpack-5.70.0-orange.svg)
![vue](https://img.shields.io/badge/vue-3.2.36-green.svg)
![vite](https://img.shields.io/badge/vite-2.9.9-yellow.svg)
![ant design vue](https://img.shields.io/badge/ant%20design%20vue-3.x-blueviolet.svg)

</div>

## 关于

> Makeit Modal 弹窗组件，是基于 Vue3.x + Vite 开发。该组件可以在当前页面打开一个浮层来处理相关事务的某些节点，不影响整个事务的流程。内含多种弹出动效，同时包含快捷弹窗，便于快速处理浮窗提示。

## 安装

```bash
npm i makeit-modal
```

## 使用

```ts
import { createApp } from 'vue'
import App from './app.vue'
import MakeitModal from 'makeit-modal'
import 'makeit-modal/dist/modal.min.css'

const app = createApp(App)
app.use(MakeitModal)
app.mount('#app')
```

## 示例

```vue
<template>
    <div class="mi-btns">
        <div>
            <a-button type="primary" size="large" class="mrb8" @click="handleBaseModal">点击打开弹窗</a-button>
        </div>
        <div>
            <a-button size="large" class="mrb8" @click="handleModalAnimation('scale')">Scale ( 默认 )</a-button>
            <a-button size="large" class="mrb8" @click="handleModalAnimation('fade')">Fade</a-button>
            <a-button size="large" class="mrb8" @click="handleModalAnimation('slide')">Slide / Slide-Right</a-button>
            <a-button size="large" class="mrb8" @click="handleModalAnimation('slide-bottom')">Slide-Bottom</a-button>
            <a-button size="large" class="mrb8" @click="handleModalAnimation('slide-fall')">Slide-Fall</a-button>
            <a-button size="large" class="mrb8" @click="handleModalAnimation('newspaper')">Newspaper</a-button>
            <a-button size="large" class="mrb8" @click="handleModalAnimation('sticky')">Sticky</a-button>
            <a-button size="large" class="mrb8" @click="handleModalAnimation('flip')">Flip</a-button>
            <a-button size="large" class="mrb8" @click="handleModalAnimation('flip-vertical')">Flip-Vertical</a-button>
            <a-button size="large" class="mrb8" @click="handleModalAnimation('fall')">Fall</a-button>
            <a-button size="large" class="mrb8" @click="handleModalAnimation('rotate')">Rotate</a-button>
            <a-button size="large" class="mrb8" @click="handleModalAnimation('sign')">Sign</a-button>
            <a-button size="large" class="mrb8" @click="handleModalAnimation('slit')">Slit</a-button>
            <a-button size="large" class="mrb8" @click="handleModalAnimation('shake')">Shake</a-button>
        </div>
        <div>
            <a-button size="large" class="mrb8" @click="handleSuccess">成功 ( Success )</a-button>
            <a-button size="large" class="mrb8" @click="handleError">错误 ( Error )</a-button>
            <a-button size="large" class="mrb8" @click="handleWarning">警告 ( Warning )</a-button>
            <a-button size="large" @click="handleConfirm">确认 ( Confirm )</a-button>
        </div>
    </div>
    <mi-modal v-model:visible="variables.visible"
        title="弹窗标题（Modal Title）"
        :onOk="handleBaseModal">
        自定义弹窗内容（Modal Content）
    </mi-modal>
    <mi-modal v-model:visible="variables.animateVisible"
        title="弹窗标题（Modal Title）"
        :animation="variables.animation"
        :key="variables.animation"
        :onOk="handleBaseModal">
        自定义弹窗内容（Modal Content）
    </mi-modal>
</template>

<script setup>
    import { reactive, getCurrentInstance } from 'vue'

    const { appContext: {config: {globalProperties: vm}} } = getCurrentInstance()

    const variables = reactive({
        visible: false,
        animation: 'scale',
        animateVisible: false
    })

    const handleBaseModal = () => {
        variables.visible = !variables.visible
    }

    const handleModalAnimation = (name) => {
        variables.animation = name
        variables.animateVisible = !variables.animateVisible
    }

    const handleSuccess = () => {
        vm.$modal.success({content: '操作成功（Successed）'})
    }

    const handleError = () => {
        vm.$modal.error({content: '操作失败（Failed）'})
    }

    const handleConfirm = () => {
        vm.$modal.confirm({content: '确定删除当前所选的条目吗？'})
    }

    const handleWarning = () => {
        vm.$modal.success({content: '请先引入 [ Ant Design Vue ] 组件'})
    }
</script>
```

## 更多

> 更多内容及使用请查看在线示例：[https://admin.makeit.vip/components/modal](https://admin.makeit.vip/components/modal)
