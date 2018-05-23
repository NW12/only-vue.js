<template>
  <header>
  	<a href="#index" class="icon-list icon-large category"></a>
  	<span class="header-title">记账本</span>
  	<a v-link="{path: '/new'}" class="icon-edit icon-large add-bill"></a>
  	<div class="cate-container">
  		<a href="#index" class="bill-list-tilte">账目列表</a>
  		<a href="#category" class="bill-statistics">账目统计</a>
  		<a href="#chart" class="bill-chart">账目图表</a>
  	</div>
  </header>
  <p v-if="bills.length == 0" class="alert-info">暂时还没有账单哦，赶快来记一笔吧~</p>
  <bill-item v-for="bill in bills" :bill.sync="bill" :show-calcu.sync="showCalcu"  transition="billitem"></bill-item>

  <calculator v-if="showCalcu"  transition="fade" :bill-item="item"></calculator>
</template>
<script>
import BillItem from '../components/BillItem';
import Calculator from '../components/Calculator';
import * as util from '../util/util';
export default {
	components: {
	  	BillItem,
	  	Calculator
	},
	data() {
		return {
			bills: [],
			showCalcu: false,
			item: {}
		} 
	},
	created(){
		this.bills = util.checkBill();
	}
}
</script>

<style>

body{
	font-family: 'MicroSoft Yahei'
}
header {
	width: 100%;
	background-color: #159957;
	background-image: linear-gradient(120deg, #155799, #159957);
	text-align: center;
	height: 50px;
	line-height: 50px;
	position: relative;
}
.header-title{
	font-size: 18px;
	color: #ffffff;
}
.add-bill{
	position: absolute;
	right: 5%;
	bottom: 13px;
	color: #ffffff;
}
.category{
	position: absolute;
	left: 5%;
	color: #ffffff;
	bottom: 13px;
}
.alert-info{
	width: 100%;
	color: #333;
	margin-top: 15px;
	text-align: center;
}
.cate-container{
	display: none;
	background-color: #159957;
	background-image: linear-gradient(120deg, #155799, #159957);
	position: absolute;
	left: 0;
	top: 50px;
	width: 100%;
	height: 40px;
	line-height: 40px;
	border-top: 1px solid #fff;
}
.cate-container a{
	color: #ffffff;
	margin: 0 5%;
}
</style>
