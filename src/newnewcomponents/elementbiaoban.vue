<template>
    <div>
        <h1 class="name">饿了么表单</h1>
        <div class="form-container">
            <el-form ref="formRef" :model="form" label-width="140px">
                <el-form-item>
                    <template #label>
                        <span class="label-with-icon">
                            <el-icon>
                                <Edit />
                            </el-icon>
                            活动名称
                        </span>
                    </template>
                    <el-input v-model="form.name" placeholder="请输入活动名称" />
                </el-form-item>
                <el-form-item>
                    <template #label>
                        <span class="label-with-icon">
                            <el-icon>
                                <Location />
                            </el-icon>
                            活动区域
                        </span>
                    </template>
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai" />
                        <el-option label="区域二" value="beijing" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <template #label>
                        <span class="label-with-icon">
                            <el-icon>
                                <Clock />
                            </el-icon>
                            活动时间
                        </span>
                    </template>
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;" />
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;" />
                    </el-col>
                </el-form-item>
            </el-form>
        </div>
        <hr>
    </div>
</template>

<script setup>
import { Clock, Location, Edit } from "@element-plus/icons-vue";
import { ref, reactive } from "vue";

const formRef = ref(null);

const form = reactive({
    name: "",
    region: "",
    date1: "",
    date2: "",
    delivery: false,
    type: [],
    resource: "",
    desc: "",
});
</script>

<style scoped>
.name {
    color: aqua;
    z-index: 12;
}

.form-container {
    position: relative;
    z-index: 10;
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-title {
    color: #409eff;
    margin-bottom: 20px;
    text-align: center;
    font-size: 24px;
    z-index: 100;
}

.line {
    text-align: center;
    color: #606266;
}

.label-with-icon {
    display: flex;
    align-items: center;
    gap: 6px;
}

.label-with-icon .el-icon {
    color: #409eff;
    font-size: 16px;
}
</style>