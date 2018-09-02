<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基本信息</span>
      </div>
      <div>
        <el-form label-width="20%">
          <el-form-item label="名称">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input type="textarea"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基本信息</span>
      </div>
      <div>
        <el-form label-width="20%">
          <el-form-item label="名称">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input type="textarea"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基本信息</span>
      </div>
      <div>
        <el-form label-width="20%">
          <el-form-item label="名称">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input type="textarea"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
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

<style>
.box-card {
  margin-bottom: 30px;
}
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
