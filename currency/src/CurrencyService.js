import _ from 'lodash';

const fetchCurrencies = async (ids) => {
    try {
        return getCachedValues();
    } catch (e) {
        const response = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0');
        const data = await response.json();

        const idsMap = _.keyBy(ids);

        const result = data.filter(item => idsMap[item.Cur_ID]);
        window.localStorage.setItem('curr', JSON.stringify({
            date: new Date().toISOString(),
            data: result,
        }));

        return result;
    }

}

const getCachedValues = () => {
    const cachedData = window.localStorage.getItem('curr');

    try {
        return JSON.parse(cachedData).data;
    } catch (e) {
        throw new Error();
    }
}

export default {
    fetchCurrencies,
}


const cache = {};

function asyncGet(id) {

}

function getById(id) {
    if (!cache[id]) {
        cache[id] = asyncGet(id);
    }

    return cache[id];
}