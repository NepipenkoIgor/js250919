const users = [
    {
        age: 40,
        name: 'Яна'
    },
    {
        age: 33,
        name: 'Игорь'
    },
    {
        age: 18,
        name: 'Алена'
    },
    {
        age: 10,
        name: 'Дима'
    },
    {
        age: 50,
        name: 'Яна'
    },
    {
        age: 45,
        name: 'Дима'
    },
];


const table = document.createElement('table');
const thead = createHeader(users[0]);
const tbody = createBody(users);
table.append(thead, tbody);
document.body.append(table);
table.addEventListener('click', sortColumns)

function createHeader(user) {
    const thead = document.createElement('thead');
    Object.keys(user)
        .forEach((title) => {
            const th = document.createElement('th');
            th.innerHTML = title;
            th.dataset.type = typeof user[title];
            thead.appendChild(th);
            thead.insertAdjacentHTML()
        });
    return thead
}

function createBody(users) {
    const tbody = document.createElement('tbody');
    users.forEach((user) => {
        const tr = document.createElement('tr');
        Object.keys(user)
            .forEach((key) => {
                const td = document.createElement('td');
                td.innerHTML = user[key];
                tr.appendChild(td);
            });
        tbody.appendChild(tr);
    });
    return tbody
}


function sortColumns(event) {
    const el = event.target;
    const {type} = el.dataset;
    if (!type) {
        return;
    }
    const table = el.closest('table');
    const tbody = table.querySelector('tbody');
    const rows = [...tbody.querySelectorAll('tr')];
    rows.sort(sortFn(type));
    tbody.innerHTML = '';
    tbody.append(...rows);
}

function sortFn(type) {
    return (tr1, tr2) => {
        const [n1El, s1El] = tr1.querySelectorAll('td');
        const [n2El, s2El] = tr2.querySelectorAll('td');
        const a = type === 'string'
            ? s1El.innerHTML
            : Number(n1El.innerHTML);
        const b = type === 'string'
            ? s2El.innerHTML
            : Number(n2El.innerHTML);

        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    }
}
