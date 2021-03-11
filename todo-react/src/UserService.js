const fetchUsers = async (ids) => {
    try {
        return getCachedValues();
    } catch (e) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();

        window.localStorage.setItem('users', JSON.stringify({
            data: result,
        }));

        return result;
    }

}

const getCachedValues = () => {
    const cachedData = window.localStorage.getItem('users');

    try {
        return JSON.parse(cachedData).data;
    } catch (e) {
        throw new Error();
    }
}

export default {
    fetchUsers,
}


// const cache = {};

// function asyncGet(id) {

// }

// function getById(id) {
//     if (!cache[id]) {
//         cache[id] = asyncGet(id);
//     }

//     return cache[id];
// }