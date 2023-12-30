import newGarland from "./newGarland";
import light from "./light";
const garland = () => {

    newGarland()
    light()

    const garlandWrapper = document.querySelector('.garland-wrapper'),
          garland = document.querySelectorAll('.garland');

    setTimeout(() => {
        garland.forEach(item => {
            item.style.opacity = '1'
        })
        garlandWrapper.style.opacity = '1'
    }, 1000)
}
export default garland