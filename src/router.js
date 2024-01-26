export class Router {
    routes = {}

    add(pathName, page) {
        this.routes[pathName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)
        this.handle()

        changeLinkStateStyle(event.target)
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname]

        fetch(route)
            .then(data => data.text())
            .then(html => document.querySelector("#app").innerHTML = html)
    }
}

function changeLinkStateStyle(target) {
    const body = document.querySelector("body")
    
    target.classList.add('active')

    document.querySelectorAll('a').forEach((item) => {
        if(item.classList.contains('active') && item !== target) {
            item.classList.remove('active')
        }
    })

    switch(window.location.pathname) {
        case "/":
            body.style.backgroundImage = "url('./assets/mountains-universe-1.png')"
            break
        case "/the-universe":
            body.style.backgroundImage = "url('./assets/mountains-universe02.png')"
            break
        case "/exploration":
            body.style.backgroundImage = "url('./assets/mountains-universe-3.png')"
            break
    }
}