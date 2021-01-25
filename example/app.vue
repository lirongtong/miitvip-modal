<template>
    <div class="mi-btns">
        <div>
            <a-button type="primary" size="large" class="mrb8" @click="handleBaseModal">点击打开弹窗</a-button>
        </div>
        <div>
            <a-button type="ghost" size="large" class="mrb8" @click="handleModalAnimation('scale')">Scale ( 默认 )</a-button>
            <a-button type="ghost" size="large" class="mrb8" @click="handleModalAnimation('fade')">Fade</a-button>
            <a-button type="ghost" size="large" class="mrb8" @click="handleModalAnimation('slide')">Slide / Slide-Right</a-button>
            <a-button type="ghost" size="large" class="mrb8" @click="handleModalAnimation('slide-bottom')">Slide-Bottom</a-button>
            <a-button type="ghost" size="large" class="mrb8" @click="handleModalAnimation('slide-fall')">Slide-Fall</a-button>
            <a-button type="ghost" size="large" class="mrb8" @click="handleModalAnimation('newspaper')">Newspaper</a-button>
            <a-button type="ghost" size="large" class="mrb8" @click="handleModalAnimation('sticky')">Sticky</a-button>
            <a-button type="ghost" size="large" class="mrb8" @click="handleModalAnimation('flip')">Flip</a-button>
            <a-button type="ghost" size="large" class="mrb8" @click="handleModalAnimation('flip-vertical')">Flip-Vertical</a-button>
            <a-button type="ghost" size="large" class="mrb8" @click="handleModalAnimation('fall')">Fall</a-button>
            <a-button type="ghost" size="large" class="mrb8" @click="handleModalAnimation('rotate')">Rotate</a-button>
            <a-button type="ghost" size="large" class="mrb8" @click="handleModalAnimation('sign')">Sign</a-button>
            <a-button type="ghost" size="large" class="mrb8" @click="handleModalAnimation('slit')">Slit</a-button>
            <a-button type="ghost" size="large" class="mrb8" @click="handleModalAnimation('shake')">Shake</a-button>
        </div>
        <div>
            <a-button type="primary" size="large" class="mrb8" @click="handleSuccess">成功 ( Success )</a-button>
            <a-button type="danger" size="large" class="mrb8" @click="handleError">错误 ( Error )</a-button>
            <a-button type="primary" size="large" class="mrb8" @click="handleWarning">警告 ( Warning )</a-button>
            <a-button type="danger" size="large" @click="handleConfirm">确认 ( Confirm )</a-button>
        </div>
    </div>
    <mi-modal v-model:visible="visible"
        title="弹窗标题（Modal Title）"
        :onOk="handleBaseModal">
        自定义弹窗内容（Modal Content）
    </mi-modal>
    <mi-modal v-model:visible="animateVisible"
        title="弹窗标题（Modal Title）"
        :animation="animation"
        :onOk="handleBaseModal">
        自定义弹窗内容（Modal Content）
    </mi-modal>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        data() {
            return {
                visible: false,
                animation: 'scale',
                animateVisible: false
            }
        },
        methods: {
            handleBaseModal() {
                this.visible = !this.visible
            },
            handleModalAnimation(name: string) {
                this.animation = name
                this.animateVisible = !this.animateVisible
            },
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