import { isWebp } from './components/isWebp.js'

isWebp()

const $box = document.querySelector('.box')

let startTime = new Date().getTime()
function animate() {
	let currentTime = new Date().getTime()
	let newPosX = 50 + ((currentTime - startTime) / 1000) * 60
	$box.style.left = `${newPosX}px`

	if (newPosX < 500) {
		window.requestAnimationFrame(animate)
	}
}
window.requestAnimationFrame(animate)