<template>
	<div class="bill-item">
		<div :class="['bill', showEdit ? 'left-in' : '']" @click="showOp">
			<span v-bind:class="['income-icon', bill.className=='money' ? 'close-icon' : '']"><i class="icon-{{bill.className}}"></i></span>
			<span class="title">{{ bill.name }}</span>
			<span class="income-num">
				<span v-if="bill.className=='money'">+</span>
				<span v-else>-</span>
				{{ bill.value }}&nbsp;元
			</span>
			<span class="bill-date">{{ bill.date }}</span>
			<span class="bill-right"><i class="icon icon-angle-right"></i></span>
		</div>
		<div class='bill-revise'>
			<span id="reviseBill" @click="editBill(bill)"><i class="icon-pencil icon-large"></i></span>
			<span id="deleteBill" @click="delBill(bill)"><i class="icon-trash icon-large"></i></span>
		</div>
	</div>
</template>
<script>
import {delBill, reviseBill}  from '../util/util';
export default {
  	data() {
  		return{
  			showEdit: false
  		} 
  	},
  	props: {
  		bill: Object,
  		showCalcu: Boolean
  	},
  	methods: {
  		editBill() {
  			this.showCalcu = true;
  			this.$parent.item = this.bill;
  			console.log(this.$parent.$router);
  		},
  		showOp() {
  			if(this.showCalcu) {
  				this.showCalcu = false;
  				reviseBill(this.bill.id, this.bill.value);
  			}
  			this.showEdit = !this.showEdit;
  		},
  		delBill(bill) {
  			delBill(bill.id);
  			this.$parent.bills.$remove(bill);
  		}
  	}

}
</script>

<style>
/* 必需 */
.billitem-transition {
  transition: all .3s ease;
  background-color: #eee;
  overflow: hidden;
  opacity: 1;
}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.billitem-enter, .billitem-leave {
  opacity: 0;
}
.bill{
	width: 95%;
	z-index: 999;
	background: #ffffff;
	position: absolute;
	right: 0;
	top: 0;
	padding-left: 5%;
	transition: all .3s ease;
}
.bill-item{
	font-size: 18px;
	height: 50px;
	line-height: 50px;
	padding: 0 5%;
	border-bottom: 1px dashed #ccc;
	position: relative;
}
.bill-item:nth-of-type(odd){
	background: #FBFBFB;
}
.bill-item>span{
	margin-right: 5%;
}
.bill-item .title{
	color: #555;
	margin-right: 10px;
}
.income-icon{
	display: inline-block;
	width: 30px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	border-radius: 50%;
	background: #FE8988;
	color: #fff;
}
.close-icon{
	background: #159957;
}

span.income-icon+span.income-num{
	color: #159957;
}
.bill-date{
	position: absolute;
	right: 10%;
	color: #ccc;
	font-size: 14px;
}
.bill-right{
	position: absolute;
	right: 0;
	color: #ccc;
}
.bill-revise{
	background: #FE8988;
	height: 40px;
	line-height: 40px;
	position: absolute;
	right: 0;
	top: 0;
	padding: 5px 10px;
	z-index: 22;
}
.left-in{
	-webkit-transform: translateX(-85px);
	-moz-transform: translateX(-85px);
	-ms-transform: translateX(-85px);
	-o-transform: translateX(-85px);
	transform: translateX(-85px);
}
.bill-revise>span{
	margin: 0 5px;
	color: #fff;
}
</style>
