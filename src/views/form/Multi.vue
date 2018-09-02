<template>
  <div class="app-container">
    <el-form ref="dynamicValidateForm" :inline="true" :model="dynamicValidateForm" style="margin-left: 17%;">
      <div v-for="(notice, index) in dynamicValidateForm.notices" :key="notice.id">
        <el-form-item label="通知方式" >
          <el-radio-group v-model="notice.way">
            <el-radio-button label="0">QQ</el-radio-button>
            <el-radio-button label="1">邮件</el-radio-button>
            <el-radio-button label="2">短信</el-radio-button>
          </el-radio-group>
          <el-select
            :rules="[
              { required: true, message: '请输入通知时间', trigger: 'blur' },
            ]"
            v-model="notice.munites"
            placeholder="请选择..."
            style="width: 120px;">
            <el-option v-for="munite in munites" :key="munite.id" :label="munite.name" :value="munite.id"/>
          </el-select>
          <span v-if="index == 0" class="clickable" @click="addNotice()"> <svg-icon icon-class="plus-square" /></span>
          <span v-if="index >= 1" class="clickable" @click="removeNotice(index)"><svg-icon icon-class="minus-square" /></span>
        </el-form-item>
      </div>
    </el-form>
    <el-row style="margin-left:40%;">
      <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
      <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        notices: []
      },
      munites: [
        { id: '0', name: '立刻' },
        { id: '1', name: '1分钟后' },
        { id: '2', name: '2分钟后' },
        { id: '5', name: '5分钟后' },
        { id: '10', name: '10分钟后' },
        { id: '15', name: '15分钟后' },
        { id: '30', name: '30分钟后' },
        { id: '60', name: '1小时后' },
        { id: '120', name: '2小时后' },
        { id: '240', name: '4小时后' },
        { id: '480', name: '8小时后' },
        { id: '1440', name: '24小时后' }
      ]
    }
  },
  created() {
    this.dynamicValidateForm.notices.push({ id: this.dynamicValidateForm.notices.length, way: '0', munites: null })
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            type: 'success',
            message: '保存成功!'
          })
          return false
        } else {
          this.$message({
            type: 'warning',
            message: '输入错误，请修正后再试！'
          })
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    addNotice() {
      if (this.dynamicValidateForm.notices.length === 5) {
        this.$message({
          type: 'warning',
          message: '最多添加5条！'
        })
        return false
      }
      this.dynamicValidateForm.notices.push({ id: this.dynamicValidateForm.notices.length, way: '0', munites: null })
    },
    removeNotice(index) {
      this.dynamicValidateForm.notices.splice(index, 1)
    }
  }
}
</script>

<style>
.el-form {
  width: 85%;
}
.el-select {
  width: 100%;
}
.clickable {
  position: relative;
  cursor: pointer;
  color: #2196F3;
  margin-left: 2px;
}
</style>
