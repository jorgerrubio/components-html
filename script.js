const pages = [
    {
        label: 'Home',
        path: '',
    },
    {
        label: 'Autocomplete',
        path: 'autocomplete',
    },
    {
        label: 'Badges',
        path: 'badges',
    },
    {
        label: 'Button bars',
        path: 'button_bars',
    },
    {
        label: 'Buttons',
        path: 'buttons',
    },
    {
        label: 'Modal',
        path: 'modal',
    },
    {
        label: 'Responsive',
        path: 'responsive',
    },
    {
        label: 'Table',
        path: 'table',
    },
    {
        label: 'Toggle',
        path: 'toggle',
    },
]

function createElement(type, classNames) {
    const ele = document.createElement(type);
    if (classNames) {
        ele.classList.add(classNames);
    }
    return ele;
}

function getPath() {
    const path = window.location.pathname.split('/')[1];
    return {
        goTo: path === '' ? `./` : `../`,
        path
    };
}

function createMenu() {
    const path = getPath();
    const nav = createElement('nav');
    const ul = createElement('ul', 'navbar');

    pages.forEach((page) => {
        if (page.path !== path.path) {
            const li = createElement('li', 'navbar-item');
            const a = document.createElement('a');
            a.setAttribute('href', path.goTo + page.path)
            a.textContent = page.label;
            li.append(a);
            ul.append(li);
        }
    })
    nav.append(ul);
    document.body.prepend(nav);
}
