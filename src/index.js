import { Router } from './router.js'

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/the-universe", "/pages/the-universe.html")
router.add("/exploration", "/pages/exploration.html")

window.onpopstate = () => router.handle()
window.route = () => router.route()