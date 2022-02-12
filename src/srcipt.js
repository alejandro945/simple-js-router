let routes = {

}

let templates = {

}

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
