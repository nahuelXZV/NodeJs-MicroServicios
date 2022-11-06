const db = {
    'user': [
        { id: '1', name: 'Nahuel' },
        { id: '2', name: 'Lucas' },
        { id: '3', name: 'Marcos' },
    ]
};

async function list(table) {
    return db[table];
}

async function get(tabla, key) {
    let col = await list(tabla);
    return col.filter(item => item.id === key)[0] || null;
}

async function upsert(tabla, data) {
    !db[tabla] ? db[tabla] = [] : null;
    db[tabla].push(data);
}

async function remove(tabla, key) {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
}
