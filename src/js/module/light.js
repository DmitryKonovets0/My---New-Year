import newGarland from "./newGarland";
const light = () => {
    newGarland()
    function setColor(selector) {
        const light = document.querySelectorAll(selector);
        async function animation() {
            setTimeout(() => {
                light.forEach(item => {
                    item.style.fill = 'red';
                    item.style.filter = 'drop-shadow(0px 0px 7px red)'

                });
                setTimeout(() => {
                    light.forEach(item => {
                        item.style.fill = 'blue'
                        item.style.filter = 'drop-shadow(0px 0px 7px blue)'

                    }); setTimeout(() => {
                        light.forEach(item => {
                            item.style.fill = 'yellow'
                            item.style.filter = 'drop-shadow(0px 0px 7px yellow)'

                        }); setTimeout(() => {
                            light.forEach(item => {
                                item.style.fill = 'green'
                                item.style.filter = 'drop-shadow(0px 0px 7px green)'

                            })}, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }
        return setInterval(animation, 4000)
    }
    setColor('path.first');setColor('path.second');setColor('path.third');setColor('path.fourth');
    setColor('path.fifth');setColor('path.sixth');setColor('path.seventh');setColor('path.eight');
    setColor('path.ninth');setColor('path.tenth');setColor('path.eleventh');setColor('path.twelfth');
    setColor('path.thirteenth');setColor('path.fourteenth');setColor('path.fifteenth');setColor('path.sixteenth');
    setColor('path.seventeenth');

}
export default light