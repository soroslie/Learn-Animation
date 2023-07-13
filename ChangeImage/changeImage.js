const canvas = document.querySelector('.airpods-scrolling')
const context = canvas.getContext('2d')

const currentFrame = index => (`https://www.apple.com/105/medla/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`)

const frmaeCount = 147

canvas.height = 770
canvas.width = 1158
const img = new Image()
img.src = currentFrame(1)

img.onload = function () {
    context.draw.Image(img, 0, 0)
}


const updateimage = index => {
    img.src = currentFrame(index);
    console.log(img.src)
    context.drawImage(img, 0, 0)
}

window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight
    const scrollFraction = scrollTop / maxScrollTop
    const frameIndex = Math.min(frmaeCount - 1, Math.floor(scrollFraction * frmaeCount))
    requestAnimationFrame(() => updateimage(frameIndex + 1))
})