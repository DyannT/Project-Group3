localStorage.getItem("content1Portfolio") && $(".text-content-card1").html(`${localStorage.getItem("content1Portfolio")}`)

localStorage.getItem("content2Portfolio") && $(".text-content-card2").html(`${localStorage.getItem("content2Portfolio")}`)

localStorage.getItem("content3Portfolio") && $(".text-content-card3").html(`${localStorage.getItem("content3Portfolio")}`)

localStorage.getItem("content4Portfolio") && $(".text-content-card4").html(`${localStorage.getItem("content4Portfolio")}`)

localStorage.getItem("content5Portfolio") && $(".text-content-card5").html(`${localStorage.getItem("content5Portfolio")}`)

// Img
// Pic1   
localStorage.getItem("imagePor1") && $('.img-por1').attr("src",`${localStorage.getItem("imagePor1")}`)

// Pic2 
localStorage.getItem("imagePor2") && $('.img-por2').attr("src",`${localStorage.getItem("imagePor2")}`)

// Pic3 
localStorage.getItem("imagePor3") && $('.img-por3').attr("src",`${localStorage.getItem("imagePor3")}`)

// Pic4  
localStorage.getItem("imagePor4") && $('.img-por4').attr("src",`${localStorage.getItem("imagePor4")}`)

// Pic5   
localStorage.getItem("imagePor5") && $('.img-por5').attr("src",`${localStorage.getItem("imagePor5")}`)
