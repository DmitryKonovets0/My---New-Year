import garland from "./garland";

const textHover = () => {
        const body = document.querySelector('body'),
              textNewYear = document.querySelector('.new-year__text'),
              xmasTree = document.querySelector('.xmas-tree');

        textNewYear.addEventListener('mouseover', () => {

            garland()

            textNewYear.style.cssText =
            `font-size: 35px;
            color: #fff;`

            setTimeout(() => {
                body.style.backgroundColor = `#005105`
            }, 1000);

            setTimeout(() => {
                textNewYear.style.cssText =
                    `visibility: hidden;
                    opacity: 0;
                    transition: all 1s;`
            },3000);

            setTimeout(() => {
                xmasTree.style.opacity = '1'
            }, 4000)
        })
}

export default textHover