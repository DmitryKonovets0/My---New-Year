import newGarland from "./newGarland";
const garland = () => {
    const garlandWrapper = document.querySelector('.garland-wrapper'),
          garland = document.querySelectorAll('.garland');
    newGarland()
    setTimeout(() => {
        garland.forEach(item => {
            item.style.opacity = '1'
        })
        // garlandLight.forEach(item => {
        //     item.style.opacity = '1'
        // })
        garlandWrapper.style.opacity = '1'
    }, 1000)
}
export default garland