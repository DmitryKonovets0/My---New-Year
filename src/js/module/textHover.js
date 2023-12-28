const textHover = () => {
    const body = document.querySelector('body'),
          textNewYear = document.querySelector('.new-year__text'),
          garland = document.querySelector('.wrap-for-garland');

    textNewYear.style.opacity = '1'
    textNewYear.addEventListener('mouseover', () => {
        textNewYear.style.cssText = `
    font-size: 40px;
    color: #fff;
    `
        body.style.backgroundColor = `#005105`
        setTimeout(() => {
            garland.style.opacity = '1'
        }, 1000)

        setTimeout(() => {
            textNewYear.style.cssText = `
            visibility: hidden;
            opacity: 0;
            transition: all 1s;
            `
            console.log(2)
        },3000)
    })
}

export default textHover