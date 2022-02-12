import { about } from "./pages/about";
import { home } from "./pages/home";

let routes = {

}

let templates = {

}

export const app_div = document.getElementById('app');

export function template (name, templateFunction) {
    return templates[name] = templateFunction;
}

export const route = (path, template)=>{
    if (typeof template === 'function') {
        return routes[path] = template;
    }
    else if (typeof template === 'string') {
        return routes[path] = templates[template];
    } else {
        return;
    };
}

export function resolveRoute(route) {
    try {
        return routes[route];
    } catch (e) {
        throw new Error(`Route ${route} not found`);
    };
};

export function router(evt) {
    let url = window.location.hash.slice(1) || '/';
    let route = resolveRoute(url);

    route();
};

template('home', () => {
    home();
});

template('about', function () {
    about();
});

window.addEventListener('load', router);
window.addEventListener('hashchange', router);


