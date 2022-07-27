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