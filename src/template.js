import { about } from "./pages/about";
import { home } from "./pages/home";
import { template } from "./srcipt";

template('home', () => {
    home();
});

template('about', function () {
    about();
});