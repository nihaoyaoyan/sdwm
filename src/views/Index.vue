<template>
    <div class="index">
        <div class="index-top">
            <HeadMenu></HeadMenu>
        </div>
        <el-row class="index-left">
            <el-col :span="4">
                <div class="grid-content">
                    <LeftMenu></LeftMenu>
                </div>
            </el-col>
            <el-col :span="20">
                <div class="grid-content">
                    <router-view></router-view>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import LeftMenu from "@/components/LeftMenu.vue";
import HeadMenu from "@/components/HeadMenu.vue";
export default {
  components: {
    LeftMenu,
    HeadMenu
  }
};
</script>

<style lang="scss" scoped>

</style>
