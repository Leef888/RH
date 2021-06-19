import * as axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const loginApi = (body) => {
    return axios.post(baseUrl + '/user/login', body).then(res => {
        if (res.status === 200) {
            alert(res.data.message);
            return res
        } else {
            return res
        }
    }).catch(error => {
        return error
    })
};

export const getLotsOnPageOne = (currentPageOnPageOne, pageSize) => {
    return axios.get(baseUrl + `/stLots/?page=${currentPageOnPageOne}&limit=${pageSize}`).then(response => {
    //return axios.get(`http://localhost:3001/stLots/?page=1&limit=5`).then(response => {
        return response.data
    })
};
export const getLotsOnPageTwo = (currentPageOnPageTwo, pageSize) => {
    return axios.get(baseUrl + `/detLots/?page=${currentPageOnPageTwo}&limit=${pageSize}`).then(response => {
        return response.data
    })
};

export const postLotOnPageOne = (fdOne, cookies) => {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies.get('token')}`
    };
    return axios.post(baseUrl + '/stLots/', fdOne, {
        headers: headers
    }).catch(error => {
        return error
    })
};
export const postLotOnPageTwo = (fdTwo, cookies) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies.get('token')}`
    };
    return axios.post(baseUrl + '/detLots/', fdTwo, {
        headers: headers
    }).catch(error => {
        return error
    })
};

export const deleteLotOnPageOne = (lotURL, cookies) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies.get('token')}`
    };
    return axios.delete(`${lotURL}`, {
        headers: headers
    }).then(response => {
        return response
    }).catch(error => {
        alert(error)
    })
};
export const deleteLotOnPageTwo = (lotURL, cookies) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies.get('token')}`
    };
    return axios.delete(`${lotURL}`, {
        headers: headers
    }).then(response => {
            return response
    }).catch(error => {
        alert(error)
    })
};