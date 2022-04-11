<template>
  <el-row :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card class="card">
        <div>
          <img src="../../../src/assets/logo.png" alt="" />
          <div class="admin">
            <h2>Admin</h2>
            <i>超级管理员</i>
          </div>
        </div>
        <div class="font">
          <p>上次登录时间：<span>2022/2/22</span></p>
          <p>上次登录地点：<span>上海</span></p>
        </div>
      </el-card>
      <el-card>
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">
      <div class="count">
        <el-card class="count-item" v-for="item in countData" :key="item.name">
          <i
            :class="'el-icon-' + item.icon"
            :style="{ background: item.color }"
          ></i>
          <div class="admin">
            <h4>{{ item.value }}</h4>
            <p class="word">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px"></el-card>
      <div class="sheet">
        <el-card
          style="width: 50%; height: 260px; margin-right: 10px"
        ></el-card>
        <el-card style="width: 50%; height: 260px"></el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      tableData: [
        {
          name: "华为",
          todayBuy: 200,
          monthBuy: 200,
          totalBuy: 2000,
        },
        {
          name: "iphone",
          todayBuy: 500,
          monthBuy: 400,
          totalBuy: 4000,
        },
        {
          name: "oppo",
          todayBuy: 400,
          monthBuy: 400,
          totalBuy: 1000,
        },
        {
          name: "vivo",
          todayBuy: 100,
          monthBuy: 100,
          totalBuy: 2000,
        },
        {
          name: "小米",
          todayBuy: 200,
          monthBuy: 200,
          totalBuy: 3000,
        },
      ],
      tableLabel: {
        name: "品牌",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 352,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 445,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 351,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
};
</script>

<style>
.admin {
  display: inline-block;
}
.admin h3 {
  text-align: center;
}
.word {
  margin-left: 5px;
}
.font {
  color: rgb(166, 173, 169);
}
.count {
  display: flex;
  flex-wrap: wrap;
  /* 换行显示 */
}
.count-item {
  width: 33%;
  padding: 0;
  text-align: center;
}
.sheet {
  display: flex;
}
</style>