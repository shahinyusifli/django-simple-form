/*1-ci tapsiriq*/
function ad_deyismek(a) {
	var b = a.replace(a[1],'');
	console.log(b);
}
var c = ad_deyismek('sahin');

/*2-ci tapsiriq*/
function ad_herifler_deyis(a) {
	var kohne = a, 
	 string_en_son = (a.length - 1);

	let b = a.replace(a[0],a[string_en_son]);
	let d = b.replace(b[string_en_son],' ');

	 console.log(d);
}
var c = ad_herifler_deyis('JavaScript');

/*3-cu tapsiriq*/
function boyuk_herif_yazdir(a) {
	let deyis_herifler_1 = a[1].toUpperCase(),
	deyis_herifler_2 = a[2].toUpperCase();
	let deyis_yekun = a.replace(a[1], deyis_herifler_1);
	console.log(deyis_yekun.replace(a[2], deyis_herifler_2));
}
let boyuk_herif = boyuk_herif_yazdir('sahin')

/*4-cu tapsiriq*/
function son_3_herf(a) {
	let herif_tap = a.slice(-4);
	let yapisdir_son_uc = a.replace(a[2], herif_tap);
	console.log(yapisdir_son_uc);
}
let tapsiriq_4 = son_3_herf('sahin');

/*5-ci tapsiriq*/
function tapsiriq_5_fun(a) {
	let random_reqem = Math.floor(Math.random() *10);
	let random_boyuk_evezle = a.replace(a[random_reqem], a[random_reqem].toUpperCase());
	console.log(random_boyuk_evezle);	
} 
let tapsiriq_5 = tapsiriq_5_fun('azerbaycan');

/*6-ci tapsiriq*/
function tapsiriq_6_fun(a) {
	let netice = a - 13;
	if (netice>13) {
		let vur = netice*2;
		console.log(vur)
	} 
	else {
		console.log(netice);
	}
}
let tapsiriq_6 = tapsiriq_6_fun(50);

/*7-ci tapsiriq*/
function tapsiriq_7_fun(a) {
	if (a%7 == 0 || a%3 == 0) {
		console.log(true);
	}
	else {
		console.log(false);
	}
}
let tapsiriq_7 = tapsiriq_7_fun(20);

/*8-ci tapsiriq*/

function tapsiriq_8_fun(a,b) {
	if (a > 30 && a < 70 && b > 30 && b < 70) {
		console.log(a + ' ve ' + b +' ededleri 30 ve 70-in arasindadir');
	}
	else if (a > 30 && a < 70 || b > 30 && b < 70) {
		console.log('verilmis reqemlerden biri verilmis 70 ve 30 araligina daxil deyil');
	}
	else {
		console.log('hec biri verilmis araliga daxil deyil');
	}
}
var tapsiriq_8 = tapsiriq_8_fun(20,50); 


/*9-cu tapsiriq*/

function tapsiriq_9_fun(a,b) {
	let ferq_a = Math.abs(50 - a);
	let ferq_b = Math.abs(50 - b);

	if (ferq_a > ferq_b) {
		console.log(a +' ' +b + '-den 50-e daha yaxindir');
	}
	else if (ferq_a < ferq_b ) {
		console.log(b +' ' + a + '-den 50-e daha yaxindir');
	}
	
	else if (a == 50 && b == 50) {
		console.log('iki edede 50-ye beraberdir');
	}
}
let tapsiriq_9 = tapsiriq_9_fun(50,50);

/*10-cu tapsiriq*/

function tapsiriq_10_fun(a) {
	let faylin_genislenmesi = a.split('.');
	console.log('faylin genislenmesi: ' + faylin_genislenmesi[1]);
}

let tapsiriq_10 = tapsiriq_10_fun('index.js');

/* 11-ci tapsiriq */

function tapsiriq_11_fun(a) {
	let sozun_ilk_herfi = a[0];
	let deyisdirilmis = a.replace(a[0], (sozun_ilk_herfi + sozun_ilk_herfi));
	let deyisdirilmis_2 = deyisdirilmis.replace(a[(a.length - 1)], sozun_ilk_herfi); 
	console.log(deyisdirilmis_2);
}
let tapsiriq_11 = tapsiriq_11_fun('javascript');


/* 12-ci tapsiriq */

function tapsiriq_12_fun(a,b){
	let sil_indexe_gore = a.replace(a[b], ' ');
	console.log(sil_indexe_gore);
}
let tapsiriq_12 = tapsiriq_12_fun('sahin', 2);

/* 13-cu tapsiriq */

function tapsiriq_13_fun(a,b) {
	if (a == b) {
		console.log((a + b)*3);
	}
	else{
		console.log(a + b);
	}
}
let tapsiriq_13 = tapsiriq_13_fun(40,30);

/* 14-cu tapsiriq */
function tapsiriq_14_fun(a,b) {
	if (a > 0 && b > 0) {
		console.log(true);
	}
	else if (a < 0 && b > 0 || a > 0 && b < 0) {
		console.log(false);
	}
} 
let tapsiriq_14 = tapsiriq_14_fun(20, 50);

/* 15-ci tapsiriq */
function tapsiriq_15_fun(a, b) {
	if (a.search(b) < 0 || a.search('b') =! 0) {
		console.log(b + a);
	}
	else {
		console.log(a);
	}
}

let tapsiriq_15 = tapsiriq_15_fun('sahin', 'dd');