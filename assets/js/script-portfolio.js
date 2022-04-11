const fullPic = document.querySelector('.js-overlay')
const openPic = document.querySelectorAll('.js-openpic')
const imgOpen = document.querySelector('.img-open')
const imgClose = document.querySelector('.close-zoom')
const imgLeft = document.querySelector('.js-btn-left-move')
const imgRight = document.querySelector('.js-btn-right-move')


console.log(openPic)

// Open Pic
for (let i = 0; i < openPic.length; i++) {
    if (i === 0) {
        openPic[i].onclick = function () {
            fullPic.style.display = 'flex'
            imgOpen.src = `./assets/img/portfolio-pic${1}.jpg`;
            // imgLeft.style.display = 'none';
            sliderImg(i + 1)

        }
    }
    else {
        openPic[i].onclick = function () {
            fullPic.style.display = 'flex'
            imgOpen.src = `./assets/img/portfolio-pic${i + 1}.jpg`;
            // break;
            sliderImg(i + 1)
            // rightImg(i+1)
        }

    }
}

// Close Pic
imgClose.onclick = function () {
    fullPic.style.display = 'none'
}


function sliderImg(i) {
    do {
        imgLeft.onclick = function () {
            if (i === 2) {
                --i;
                imgOpen.src = `./assets/img/portfolio-pic${1}.jpg`;
                console.log(i)
            }
            else if(i>2){
                --i;
                imgOpen.src = `./assets/img/portfolio-pic${i}.jpg`;
                console.log(i)
            }
        }
        imgRight.onclick = function () {
            if (i === 5) {
                imgOpen.src = `./assets/img/portfolio-pic${openPic.length}.jpg`;
                console.log(i)
            }

            // else if (i === 2) {
            //     ++i;
            //     imgOpen.src = `./assets/img/portfolio-pic${i}.jpg`;
            //     console.log(i)
            // }

            else if(i<5){
            ++i;
            imgOpen.src = `./assets/img/portfolio-pic${i}.jpg`;
            console.log(i)
        }
        }
        // console.log(i)
    } while (i < 0)
}

