const backbtn = document.querySelector('.back-input')
backbtn.onclick = function(){
    history.back()
};




const meNu = document.querySelector('.btn-menu')
const openMenu = document.querySelector('.btn-main')
const listInfo = document.querySelector('#slidebar')

meNu.onclick = function () {
    listInfo.style.display = 'none'
	console.log(openMenu)
}

openMenu.onclick = function () {
    listInfo.style.display = 'block'
	console.log(meNu)
}






const openP = document.getElementsByClassName('open-function')
const subNAV = document.getElementsByClassName('sub-nav')
const openP1 = document.getElementsByClassName('open-function1')
const subNAV1 = document.getElementsByClassName('sub-nav1')


console.log(openP)
console.log(subNAV)
for(const key in openP){
	openP[key].onclick = function () {
		if(subNAV[key].style.display === 'block'){
			console.log(openP[key])
			subNAV[key].style.display = 'none'
		}
		else{subNAV[key].style.display = 'block'}
	}
}

for(const key in openP1){
	openP1[key].onclick = function () {
		if(subNAV1[key].style.display === 'block'){
			console.log(openP1[key])
			subNAV1[key].style.display = 'none'
		}
		else{subNAV1[key].style.display = 'block'}
	}
}






const counters = document.querySelectorAll('.counter');
const speed = 300; // The lower the slower

counters.forEach(function (counter) {
	const updateCount = function() {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = Math.floor(target / speed);

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});







// const increaseN = document.querySelectorAll('.div-increase-num');
// const speed = 200; // The lower the slower

// // const increaseDV = document.querySelector('.div-increase-num')

// console.log(increaseN)

// var arr = []

// for(i = 0;i<increaseN.length;i++){
//     let valueN = increaseN[i].textContent
//     arr.push(Number(valueN))
// }
// console.log(arr)

// for(var i = 0;i<arr[0];i++){
//     increaseDV.innerHTML = `<span class="increase-num">${i}</span>`
// }
// mobileMenu.onclick = function() {
//     var isMenu = document.getElementById('menu');
//     if (isMenu.style.display === 'none') {
//         isMenu.style.display = 'block';
//     } else {
//         isMenu.style.display = 'none';
//     }
// }






// Change
// ALL
const btnChange1 = document.querySelector('.btn-change1');
const btnChange2 = document.querySelector('.btn-change2');
const btnChange3 = document.querySelector('.btn-change3');
const btnChange4 = document.querySelector('.btn-change4');
// Index
const btnChange5 = document.querySelector('.btn-change5');
const btnChange6 = document.querySelector('.btn-change6');
const btnChange7 = document.querySelector('.btn-change7');
const btnChange8 = document.querySelector('.btn-change8');
const btnChange9 = document.querySelector('.btn-change9');
const btnChange10 = document.querySelector('.btn-change10');
const btnChange11 = document.querySelector('.btn-change11');
const btnChange12 = document.querySelector('.btn-change12');
const btnChange13 = document.querySelector('.btn-change13');
const btnChange14 = document.querySelector('.btn-change14');
// About
const btnChange15 = document.querySelector('.btn-change15');
const btnChange16 = document.querySelector('.btn-change16');
const btnChange17 = document.querySelector('.btn-change17');
const btnChange18 = document.querySelector('.btn-change18');
const btnChange19 = document.querySelector('.btn-change19');
const btnChange20 = document.querySelector('.btn-change20');
const btnChange21 = document.querySelector('.btn-change21');
const btnChange22 = document.querySelector('.btn-change22');
const btnChange23 = document.querySelector('.btn-change23');
const btnChange24 = document.querySelector('.btn-change24');
const btnChange25 = document.querySelector('.btn-change25');
const btnChange26 = document.querySelector('.btn-change26');
const btnChange27= document.querySelector('.btn-change27');
const btnChange28 = document.querySelector('.btn-change28');
// Blog
const btnChange29 = document.querySelector('.btn-change29');
const btnChange30 = document.querySelector('.btn-change30');
const btnChange31 = document.querySelector('.btn-change31');
const btnChange32 = document.querySelector('.btn-change32');
const btnChange33 = document.querySelector('.btn-change33');
const btnChange34 = document.querySelector('.btn-change34');
const btnChange35 = document.querySelector('.btn-change35');
const btnChange36 = document.querySelector('.btn-change36');
const btnChange37 = document.querySelector('.btn-change37');
const btnChange38 = document.querySelector('.btn-change38');
const btnChange39 = document.querySelector('.btn-change39');
const btnChange40 = document.querySelector('.btn-change40');
const btnChange41 = document.querySelector('.btn-change41');
// Portfolio
const btnChange42 = document.querySelector('.btn-change42');
const btnChange43 = document.querySelector('.btn-change43');
const btnChange44 = document.querySelector('.btn-change44');
const btnChange45 = document.querySelector('.btn-change45');
const btnChange46 = document.querySelector('.btn-change46');
// History
const btnChange47 = document.querySelector('.btn-change47');
const btnChange48 = document.querySelector('.btn-change48');
const btnChange49 = document.querySelector('.btn-change49');
const btnChange50 = document.querySelector('.btn-change50');
const btnChange51 = document.querySelector('.btn-change51');
const btnChange52 = document.querySelector('.btn-change52');
const btnChange53 = document.querySelector('.btn-change53');
const btnChange54 = document.querySelector('.btn-change54');
const btnChange55 = document.querySelector('.btn-change55');
const btnChange56 = document.querySelector('.btn-change56');
const btnChange57 = document.querySelector('.btn-change57');
const btnChange58 = document.querySelector('.btn-change58');
const btnChange59 = document.querySelector('.btn-change59');
const btnChange60 = document.querySelector('.btn-change60');
const btnChange61 = document.querySelector('.btn-change61');
const btnChange62 = document.querySelector('.btn-change62');
const btnChange63 = document.querySelector('.btn-change63');
const btnChange64 = document.querySelector('.btn-change64');
// Contact
const btnChange65 = document.querySelector('.btn-change65');
const btnChange66 = document.querySelector('.btn-change66');
const btnChange67 = document.querySelector('.btn-change67');
const btnChange68 = document.querySelector('.btn-change68');
const btnChange69 = document.querySelector('.btn-change69');
const btnChange70 = document.querySelector('.btn-change70');
const btnChange71 = document.querySelector('.btn-change71');
const btnChange72 = document.querySelector('.btn-change72');
const btnChange73 = document.querySelector('.btn-change73');
const btnChange74 = document.querySelector('.btn-change74');
const btnChange75 = document.querySelector('.btn-change75');
const btnChange76 = document.querySelector('.btn-change76');


// Delete
const btnDel1 = document.querySelector('.btn-del1')

console.log(btnDel1)

btnDel1.onclick = function deleteName() {
	localStorage.removeItem("headerIndex");
}







// Change
// ALL
btnChange1.onclick = function handleSubmit() {
	console.log($("#input-header-all").val());
	localStorage.setItem("headerIndex", $("#input-header-all").val());
	$("#input-header-all").val("");
}

btnChange2.onclick = function handleSubmit() {
	console.log($("#input-header-all1").val());
	localStorage.setItem("headerIndex1", $("#input-header-all1").val());
	$("#input-header-all1").val("");
}

btnChange3.onclick = function handleSubmit() {
	console.log($("#input-footer-all").val());
	localStorage.setItem("footerIndex", $("#input-footer-all").val());
	$("#input-footer-all").val("");
}

btnChange4.onclick = function handleSubmit() {
	console.log($("#input-footer-all1").val());
	localStorage.setItem("footerIndex1", $("#input-footer-all1").val());
	$("#input-footer-all1").val("");
}

// Index
btnChange5.onclick = function handleSubmit() {
	console.log($("#input-slider-index").val());
	localStorage.setItem("sliderIndex", $("#input-slider-index").val());
	$("#input-slider-index").val("");
}

btnChange6.onclick = function handleSubmit() {
	console.log($("#input-content-index").val());
	localStorage.setItem("contentIndex", $("#input-content-index").val());
	$("#input-content-index").val("");
}

btnChange7.onclick = function handleSubmit() {
	console.log($("#input-content-index1").val());
	localStorage.setItem("contentIndex1", $("#input-content-index1").val());
	$("#input-content-index1").val("");
}

btnChange8.onclick = function handleSubmit() {
	console.log($("#input-content-index2").val());
	localStorage.setItem("contentIndex2", $("#input-content-index2").val());
	$("#input-content-index2").val("");
}

btnChange9.onclick = function handleSubmit() {
	console.log($("#input-content-index3").val());
	localStorage.setItem("contentIndex3", $("#input-content-index3").val());
	$("#input-content-index3").val("");
}

btnChange10.onclick = function handleSubmit() {
	console.log($("#input-content-index4").val());
	localStorage.setItem("contentIndex4", $("#input-content-index4").val());
	$("#input-content-index4").val("");
}

btnChange11.onclick = function handleSubmit() {
	console.log($("#input-content-index5").val());
	localStorage.setItem("contentIndex5", $("#input-content-index5").val());
	$("#input-content-index5").val("");
}

btnChange12.onclick = function handleSubmit() {
	console.log($("#input-content-index6").val());
	localStorage.setItem("contentIndex6", $("#input-content-index6").val());
	$("#input-content-index6").val("");
}

btnChange13.onclick = function handleSubmit() {
	console.log($("#input-content-index7").val());
	localStorage.setItem("contentIndex7", $("#input-content-index7").val());
	$("#input-content-index7").val("");
}

btnChange14.onclick = function handleSubmit() {
	console.log($("#input-content-index8").val());
	localStorage.setItem("contentIndex8", $("#input-content-index8").val());
	$("#input-content-index8").val("");
}

// About

btnChange15.onclick = function handleSubmit() {
	console.log($("#input-content1-about").val());
	localStorage.setItem("content1About", $("#input-content1-about").val());
	$("#input-content1-about").val("");
}

btnChange16.onclick = function handleSubmit() {
	console.log($("#input-content1-about1").val());
	localStorage.setItem("content2About", $("#input-content1-about1").val());
	$("#input-content1-about1").val("");
}

btnChange17.onclick = function handleSubmit() {
	console.log($("#input-content2-about").val());
	localStorage.setItem("content3About", $("#input-content2-about").val());
	$("#input-content2-about").val("");
}

btnChange18.onclick = function handleSubmit() {
	console.log($("#input-content2-about2").val());
	localStorage.setItem("content4About", $("#input-content2-about2").val());
	$("#input-content2-about2").val("");
}

btnChange19.onclick = function handleSubmit() {
	console.log($("#input-content3-about").val());
	localStorage.setItem("content5About", $("#input-content3-about").val());
	$("#input-content3-about").val("");
}

btnChange20.onclick = function handleSubmit() {
	console.log($("#input-content3-about3").val());
	localStorage.setItem("content6About", $("#input-content3-about3").val());
	$("#input-content3-about3").val("");
}

btnChange21.onclick = function handleSubmit() {
	console.log($("#input-content-about-left1").val());
	localStorage.setItem("content7About", $("#input-content-about-left1").val());
	$("#input-content-about-left1").val("");
}

btnChange22.onclick = function handleSubmit() {
	console.log($("#input-content-about-left2").val());
	localStorage.setItem("content8About", $("#input-content-about-left2").val());
	$("#input-content-about-left2").val("");
}

btnChange23.onclick = function handleSubmit() {
	console.log($("#input-content-about-list1").val());
	localStorage.setItem("content9About", $("#input-content-about-list1").val());
	$("#input-content-about-list1").val("");
}

btnChange24.onclick = function handleSubmit() {
	console.log($("#input-content-about-list2").val());
	localStorage.setItem("content10About", $("#input-content-about-list2").val());
	$("#input-content-about-list2").val("");
}

btnChange25.onclick = function handleSubmit() {
	console.log($("#input-content-about-list3").val());
	localStorage.setItem("content11About", $("#input-content-about-list3").val());
	$("#input-content-about-list3").val("");
}

btnChange26.onclick = function handleSubmit() {
	console.log($("#input-content-about-list4").val());
	localStorage.setItem("content12About", $("#input-content-about-list4").val());
	$("#input-content-about-list4").val("");
}

btnChange27.onclick = function handleSubmit() {
	console.log($("#input-content-about-list5").val());
	localStorage.setItem("content13About", $("#input-content-about-list5").val());
	$("#input-content-about-list5").val("");
}

btnChange28.onclick = function handleSubmit() {
	console.log($("#input-content-about-list6").val());
	localStorage.setItem("content14About", $("#input-content-about-list6").val());
	$("#input-content-about-list6").val("");
}
// Blog
btnChange29.onclick = function handleSubmit() {
	console.log($("#input-content-blog1").val());
	localStorage.setItem("content1Blog", $("#input-content-blog1").val());
	$("#input-content-blog1").val("");
}

btnChange30.onclick = function handleSubmit() {
	console.log($("#input-content-blog2").val());
	localStorage.setItem("content2Blog", $("#input-content-blog2").val());
	$("#input-content-blog2").val("");
}

btnChange31.onclick = function handleSubmit() {
	console.log($("#input-content-blog3").val());
	localStorage.setItem("content3Blog", $("#input-content-blog3").val());
	$("#input-content-blog3").val("");
}

btnChange32.onclick = function handleSubmit() {
	console.log($("#input-content-blog-list1").val());
	localStorage.setItem("content1BlogList", $("#input-content-blog-list1").val());
	$("#input-content-blog-list1").val("");
}

btnChange33.onclick = function handleSubmit() {
	console.log($("#input-content-blog-list2").val());
	localStorage.setItem("content2BlogList", $("#input-content-blog-list2").val());
	$("#input-content-blog-list2").val("");
}

btnChange34.onclick = function handleSubmit() {
	console.log($("#input-content-blog-list3").val());
	localStorage.setItem("content3BlogList", $("#input-content-blog-list3").val());
	$("#input-content-blog-list3").val("");
}

btnChange35.onclick = function handleSubmit() {
	console.log($("#input-content-blog-list4").val());
	localStorage.setItem("content4BlogList", $("#input-content-blog-list4").val());
	$("#input-content-blog-list4").val("");
}

btnChange36.onclick = function handleSubmit() {
	console.log($("#input-content-blog-list5").val());
	localStorage.setItem("content5BlogList", $("#input-content-blog-list5").val());
	$("#input-content-blog-list5").val("");
}

btnChange37.onclick = function handleSubmit() {
	console.log($("#input-content-blog-list6").val());
	localStorage.setItem("content6BlogList", $("#input-content-blog-list6").val());
	$("#input-content-blog-list6").val("");
}

btnChange38.onclick = function handleSubmit() {
	console.log($("#input-content-blog-list7").val());
	localStorage.setItem("content7BlogList", $("#input-content-blog-list7").val());
	$("#input-content-blog-list7").val("");
}

btnChange39.onclick = function handleSubmit() {
	console.log($("#input-content-blog4").val());
	localStorage.setItem("content4Blog", $("#input-content-blog4").val());
	$("#input-content-blog4").val("");
}

btnChange40.onclick = function handleSubmit() {
	console.log($("#input-content-blog5").val());
	localStorage.setItem("content5Blog", $("#input-content-blog5").val());
	$("#input-content-blog5").val("");
}

btnChange41.onclick = function handleSubmit() {
	console.log($("#input-content-blog6").val());
	localStorage.setItem("content6Blog", $("#input-content-blog6").val());
	$("#input-content-blog6").val("");
}

// Portfolio
btnChange42.onclick = function handleSubmit() {
	console.log($("#input-content-portfolio1").val());
	localStorage.setItem("content1Portfolio", $("#input-content-portfolio1").val());
	$("#input-content-portfolio1").val("");
}

btnChange43.onclick = function handleSubmit() {
	console.log($("#input-content-portfolio2").val());
	localStorage.setItem("content2Portfolio", $("#input-content-portfolio2").val());
	$("#input-content-portfolio2").val("");
}

btnChange44.onclick = function handleSubmit() {
	console.log($("#input-content-portfolio3").val());
	localStorage.setItem("content3Portfolio", $("#input-content-portfolio3").val());
	$("#input-content-portfolio3").val("");
}

btnChange45.onclick = function handleSubmit() {
	console.log($("#input-content-portfolio4").val());
	localStorage.setItem("content4Portfolio", $("#input-content-portfolio4").val());
	$("#input-content-portfolio4").val("");
}

btnChange46.onclick = function handleSubmit() {
	console.log($("#input-content-portfolio5").val());
	localStorage.setItem("content5Portfolio", $("#input-content-portfolio5").val());
	$("#input-content-portfolio5").val("");
}

// History
btnChange47.onclick = function handleSubmit() {
	console.log($("#input-content-history1").val());
	localStorage.setItem("content1Portfolio", $("#input-content-history1").val());
	$("#input-content-history1").val("");
}

btnChange48.onclick = function handleSubmit() {
	console.log($("#input-content-history2").val());
	localStorage.setItem("content2Portfolio", $("#input-content-history2").val());
	$("#input-content-history2").val("");
}

btnChange49.onclick = function handleSubmit() {
	console.log($("#input-content-history3").val());
	localStorage.setItem("content3Portfolio", $("#input-content-history3").val());
	$("#input-content-history3").val("");
}

btnChange50.onclick = function handleSubmit() {
	console.log($("#input-content-history4").val());
	localStorage.setItem("content4Portfolio", $("#input-content-history4").val());
	$("#input-content-history4").val("");
}

btnChange51.onclick = function handleSubmit() {
	console.log($("#input-content-history5").val());
	localStorage.setItem("content5Portfolio", $("#input-content-history5").val());
	$("#input-content-history5").val("");
}

btnChange52.onclick = function handleSubmit() {
	console.log($("#input-content-history6").val());
	localStorage.setItem("content6Portfolio", $("#input-content-history6").val());
	$("#input-content-history6").val("");
}

btnChange53.onclick = function handleSubmit() {
	console.log($("#input-content-history7").val());
	localStorage.setItem("content7Portfolio", $("#input-content-history7").val());
	$("#input-content-history7").val("");
}

btnChange54.onclick = function handleSubmit() {
	console.log($("#input-content-history8").val());
	localStorage.setItem("content8Portfolio", $("#input-content-history8").val());
	$("#input-content-history8").val("");
}

btnChange55.onclick = function handleSubmit() {
	console.log($("#input-content-history9").val());
	localStorage.setItem("content9Portfolio", $("#input-content-history9").val());
	$("#input-content-history9").val("");
}

btnChange56.onclick = function handleSubmit() {
	console.log($("#input-content-history10").val());
	localStorage.setItem("content10Portfolio", $("#input-content-history10").val());
	$("#input-content-history10").val("");
}

btnChange57.onclick = function handleSubmit() {
	console.log($("#input-content-history11").val());
	localStorage.setItem("content11Portfolio", $("#input-content-history11").val());
	$("#input-content-history11").val("");
}

btnChange58.onclick = function handleSubmit() {
	console.log($("#input-content-history12").val());
	localStorage.setItem("content12Portfolio", $("#input-content-history12").val());
	$("#input-content-history12").val("");
}

btnChange59.onclick = function handleSubmit() {
	console.log($("#input-content-history13").val());
	localStorage.setItem("content13Portfolio", $("#input-content-history13").val());
	$("#input-content-history13").val("");
}

btnChange60.onclick = function handleSubmit() {
	console.log($("#input-content-history14").val());
	localStorage.setItem("content14Portfolio", $("#input-content-history14").val());
	$("#input-content-history14").val("");
}

btnChange61.onclick = function handleSubmit() {
	console.log($("#input-content-history15").val());
	localStorage.setItem("content15Portfolio", $("#input-content-history15").val());
	$("#input-content-history15").val("");
}

btnChange62.onclick = function handleSubmit() {
	console.log($("#input-content-history16").val());
	localStorage.setItem("content16Portfolio", $("#input-content-history16").val());
	$("#input-content-history16").val("");
}

btnChange63.onclick = function handleSubmit() {
	console.log($("#input-content-history17").val());
	localStorage.setItem("content17Portfolio", $("#input-content-history17").val());
	$("#input-content-history17").val("");
}

btnChange64.onclick = function handleSubmit() {
	console.log($("#input-content-history18").val());
	localStorage.setItem("content18Portfolio", $("#input-content-history18").val());
	$("#input-content-history18").val("");
}

// Contact
btnChange65.onclick = function handleSubmit() {
	console.log($("#input-content-contact1").val());
	localStorage.setItem("content1Contact", $("#input-content-contact1").val());
	$("#input-content-contact1").val("");
}

btnChange66.onclick = function handleSubmit() {
	console.log($("#input-content-contact2").val());
	localStorage.setItem("content2Contact", $("#input-content-contact2").val());
	$("#input-content-contact2").val("");
}

btnChange67.onclick = function handleSubmit() {
	console.log($("#input-content-contact3").val());
	localStorage.setItem("content3Contact", $("#input-content-contact3").val());
	$("#input-content-contact3").val("");
}

btnChange68.onclick = function handleSubmit() {
	console.log($("#input-content-contact4").val());
	localStorage.setItem("content4Contact", $("#input-content-contact4").val());
	$("#input-content-contact4").val("");
}

btnChange69.onclick = function handleSubmit() {
	console.log($("#input-content-contact5").val());
	localStorage.setItem("content5Contact", $("#input-content-contact5").val());
	$("#input-content-contact5").val("");
}

btnChange70.onclick = function handleSubmit() {
	console.log($("#input-content-contact6").val());
	localStorage.setItem("content6Contact", $("#input-content-contact6").val());
	$("#input-content-contact6").val("");
}

btnChange71.onclick = function handleSubmit() {
	console.log($("#input-content-contact7").val());
	localStorage.setItem("content7Contact", $("#input-content-contact7").val());
	$("#input-content-contact7").val("");
}

btnChange72.onclick = function handleSubmit() {
	console.log($("#input-content-contact8").val());
	localStorage.setItem("content8Contact", $("#input-content-contact8").val());
	$("#input-content-contact8").val("");
}

btnChange73.onclick = function handleSubmit() {
	console.log($("#input-content-contact9").val());
	localStorage.setItem("content9Contact", $("#input-content-contact9").val());
	$("#input-content-contact9").val("");
}

btnChange74.onclick = function handleSubmit() {
	console.log($("#input-content-contact10").val());
	localStorage.setItem("content10Contact", $("#input-content-contact10").val());
	$("#input-content-contact10").val("");
}

btnChange75.onclick = function handleSubmit() {
	console.log($("#input-content-contact11").val());
	localStorage.setItem("content11Contact", $("#input-content-contact11").val());
	$("#input-content-contact11").val("");
}

btnChange76.onclick = function handleSubmit() {
	console.log($("#input-content-contact12").val());
	localStorage.setItem("content12Contact", $("#input-content-contact12").val());
	$("#input-content-contact12").val("");
}