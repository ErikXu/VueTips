<template>
  <div class="app-container">
    <el-form ref="dynamicValidateForm" :model="dynamicValidateForm" label-width="150px">
      <el-form-item
        label="是否限额"
        prop="shouldValid"
      >
        <el-switch v-model="dynamicValidateForm.shouldValid" :active-text="dynamicValidateForm.shouldValid ? '1-10000' : ''"/>
      </el-form-item>
      <el-form-item
        :rules="dynamicValidateForm.shouldValid ? [
          { required: true, message: '请输入金额', trigger: 'blur' },
          { type: 'integer', min: 1, max: 10000, message: '金额范围为1-10000', trigger: ['blur', 'change'] }
        ] : [
          { required: true, message: '请输入金额', trigger: 'blur' }
        ]"
        label="金额"
        prop="amount"
      >
        <el-input v-model.number="dynamicValidateForm.amount"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        shouldValid: true,
        amount: ''
      }
    }
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
    }
  }
}
</script>

