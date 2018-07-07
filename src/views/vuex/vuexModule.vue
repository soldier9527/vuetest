<template>
  <div>
      <p>Vuex</p>
      <el-tabs v-model="activeName" >
            <el-tab-pane label="同步计算器" name="first">
                <Count />
            </el-tab-pane>
            <el-tab-pane label="异步计算器" name="second">
                <AsynCount />
            </el-tab-pane>
            <el-tab-pane label="实际请求" name="third">
              <FakeRequest />
            </el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Count from "@/views/vuex/count";
import AsynCount from "@/views/vuex/asynCount";
import FakeRequest from "@/views/vuex/fakeRequest";
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  components: {
    Count,
    AsynCount,
    FakeRequest
  }
};
</script>
