<template>
	<div class="calculator-container" id="calContainer">
		<div class="result-container cf">
			<div id="selectStyle" v-if="billItem">
				<span v-bind:class="['icon', isIncome ? '' : 'close-icon']"><i class="icon-{{billItem.className}} icon-large"></i></span>
				<span class="title">{{billItem.name}}</span>
			</div>
			<span class="bill-num">{{billItem.value}}</span>
		</div>

		<div class="calculator" @click="calculate($event)">
			<table>
				<tbody>
					<tr>
						<td>1</td>
						<td>2</td>
						<td>3</td>
						<td id='backspace'>Backspace</td>
					</tr>
					<tr>
						<td>4</td>
						<td>5</td>
						<td>6</td>
						<td id="plus">+</td>
					</tr>
					<tr>
						<td>7</td>
						<td>8</td>
						<td>9</td>
						<td id="minus">-</td>
					</tr>
					<tr>
						<td id="clear">Clear</td>
						<td>0</td>
						<td>.</td>
						<td id="equal">=</td>
					</tr>
				</tbody>
				
			</table>
		</div>
	</div>
</template>
<script>
export default {
  	data() {
  		return{
  			expression: ''
  		} 
  	},
  	computed: {
  		isIncome(){
  			return this.billItem.className === 'money';
  		}
  	},
  	props: {
  		billItem: Object
  	},
  	methods: {
  		calculate(e) {
  			let target = e.target.innerHTML;
  			console.log(target);
  			var result = this.billItem.value;
  			switch (target) {
  				case 'Backspace':
  					let s = this.billItem.value.toString();
  					this.billItem.value = s.substring(0, s.length - 1);
  					break;
  				case 'Clear':
  					this.billItem.value = '';
  					break;
  				case '=':
  					try{
  						this.billItem.value = eval(this.billItem.value);
  					}catch(err) {
  						console.log(err)
  						alert('请输入正确的计算表达式!');
  					}
  					break;
  				default:
  					this.billItem.value += target;
  					break;
  			}
  		}
  	}
}
</script>
<style>
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
/*计算器*/
.calculator-container{
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 9999;
}
.result-container{
	width: 100%;
	padding: 10px 5%;
	height: 60px;
	line-height: 40px;
	box-sizing: border-box;
	background: #EEEEEE;
}
.result-container .icon{
	float: left;
	display: inline-block;
	width: 40px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	border-radius: 50%;
	background: #159957;
	color: #fff;
	margin-right: 10px;
}
.result-container .close-icon{
	background: #FE8988;
}
#selectStyle{
	display: inline;
}
.bill-num{
	float: right;
	font-size: 20px;
	font-weight: 700;
}
.calculator{
	z-index: 9999;
}
.calculator table{
	border-collapse: collapse;
	background: #EEEEEE;
}
.calculator td{
	box-sizing: border-box;
	width: 25%;
	padding: 10px;
	text-align: center;
	line-height: 30px;
	height: 30px;
	font-size: 22px;
	color: #555;
	border: 1px solid #ccc;
}	
</style>
