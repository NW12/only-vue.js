'use strict';

/**
 * 驼峰转横线
 * @param  {[type]} s [description]
 * @return {[type]}   [description]
 */
export let toCamelbak = (s) => {
	return s.replace(/([A-Z])/g,"-$1").toLowerCase();
}


/**
 * 保存账单
 * @param  {[type]} arr 账单数组
 * @return {[type]}     [description]
 */
export let saveBill = (obj) => {
	let data;
	if(window.localStorage.bills){
		data = JSON.parse(window.localStorage.bills);
	}else {
		data = [];
	}
	data.push(obj);
	data = JSON.stringify(data);
	window.localStorage.bills = data;
}

/**
 * 查询账单
 * @return {arr}  账单数组
 */
export let checkBill = () => {
	let data;
	if(window.localStorage.bills) {
		data = JSON.parse(window.localStorage.bills);
	}else {
		data = [];
	}
	return data;
}

/**
 * 删除账单
 * @param  {[type]} id 账单id
 * @return {[type]}    [description]
 */
export let delBill = (id) => {
	var bills = JSON.parse(localStorage.bills);
	for (var i = 0; i < bills.length; i++) {
		if (bills[i].id === id) {
			bills.splice(i, 1);
			break;
		}
	}
	var data = JSON.stringify(bills);
	window.localStorage.bills = data;
}

/**
 * 修改账单
 * @param  {[type]} id 账单id
 * @return {[type]}    [description]
 */
export let reviseBill = (id, value) => {
	var bills = JSON.parse(localStorage.bills);
	for (var i = 0; i < bills.length; i++) {
		if (bills[i].id === id) {
			bills[i].value = value;
			break;
		}
	}
	var data = JSON.stringify(bills);
	window.localStorage.bills = data;
}