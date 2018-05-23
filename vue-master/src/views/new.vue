<template>
  <section class="edit-bill" id="editBill">
  		<header>
  			<a v-link="{path: '/'}" class="icon-remove icon-2x cancel-edit"></a>
  			<span class="header-title">记一笔</span>
  			<a @click="addBill" class="icon-ok icon-2x confirm"></a>
  		</header>

  		<div class="bill-opts" id="billOpts">
  			<div class="opts-item cf">
  				<div class="opts-container" @click="changeItem('money')">
  					<span class="icon"><i class="icon-money icon-large"></i></span>
  					<span class="title">收入</span>
  				</div>
  			</div>
  			<div class="opts-item cf">
  				<div class="opts-container" @click="changeItem('suitcase')">
  					<span class="icon close-icon"><i class="icon-suitcase icon-large"></i></span>
  					<span class="title">衣服</span>
  				</div>
  				<div class="opts-container" @click="changeItem('food')">
  					<span class="icon close-icon"><i class="icon-food icon-large"></i></span>
  					<span class="title">饮食</span>
  				</div>
  				<div class="opts-container" @click="changeItem('building')">
  					<span class="icon close-icon"><i class="icon-building icon-large"></i></span>
  					<span class="title">住宿</span>
  				</div>
  				<div class="opts-container" @click="changeItem('plane')">
  					<span class="icon close-icon"><i class="icon-plane icon-large"></i></span>
  					<span class="title">交通</span>
  				</div>
  			</div>
  			<div class="opts-item cf">
  				<div class="opts-container" @click="changeItem('shoppingCart')">
  					<span class="icon close-icon"><i class="icon-shopping-cart icon-large"></i></span>
  					<span class="title">购物</span>
  				</div>
  				<div class="opts-container" @click="changeItem('link')">
  					<span class="icon close-icon"><i class="icon-link icon-large"></i></span>
  					<span class="title">其他</span>
  				</div>
  			</div>
  		</div>
  	</section>
	<calculator v-if="showCalcu" transition="fade" :bill-item="item"></calculator>
</template>

<script>
import Calculator from '../components/Calculator';
import * as util from '../util/util';

const config = {
	money: '收入',
	suitcase: '衣服',
	food: '饮食',
	building: '住宿',
	plane: '交通',
	shoppingCart: '购物',
	link: '其他'
}

export default {
  	components: {
  		Calculator
  	},
  	data() {
  		return {
  			item: {
  				name: '',
  				value: '',
  				className: ''
  			},
  			showCalcu: false
  		}
  	},
  	created() {
  		console.log(this.$router)
  	},
  	methods: {
  		changeItem(itemName) {
  			this.showCalcu = true;
  			this.item.name = config[itemName];
  			this.item.className = util.toCamelbak(itemName);
  		},
  		addBill() {
  			if(this.item.value){
  				this.item.value = parseFloat(this.item.value, 10);
  			}else {
  				alert('请输入正确的账单金额！');
  				return;
  			}
  			let value = this.item.value;
  			if(+value !== value) {
  				alert('请输入正确的账单金额！');
  				return;
  			}
  			let data = util.checkBill();
  			this.item.id = data.length ? data[data.length - 1].id + 1 : 1;
  			this.item.date = this.item.date || new Date().toISOString().substring(0,10);
  			util.saveBill(this.item);
  			// this.$router.app.$children[1].bills.push(this.item);
  			this.$route.router.go({path: '/home'});
  		}
  	},
    route: {
      data: function (transition) {
          transition.next({
            message: 'data fetched!'
          })
      }
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
.edit-bill{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.cancel-edit{
	position: absolute;
	left: 5%;
	color: #ffffff;
	bottom: 10px;
}
.confirm{
	position: absolute;
	right: 5%;
	color: #ffffff;
	bottom: 10px;
}
.opts-item{
	padding: 10px 0 10px 25px;
	border-bottom: 1px solid #ccc;
}
.opts-container{
	float: left;
	width: 40px;
	text-align: center;
	margin-right: 5%;
}
.opts-item .icon{
	display: block;
	width: 40px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	border-radius: 50%;
	background: #159957;
	color: #fff;
	margin-bottom: 5px;
}
.opts-item .close-icon{
	background: #FE8988;
}
.opts-item .title{
	color: #555;
}
</style>
