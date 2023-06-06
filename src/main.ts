import { sayHello } from './greet';

function displayHello(divId: string, name: string) {
    const elt = document.getElementById(divId);
    if (elt) {
        elt.innerText = sayHello(name);
    } else {
        throw new Error(`Cannot find an element with the specified id ${divId}`);
    }
}
displayHello('greet', 'TypeScript');