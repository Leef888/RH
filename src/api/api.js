import * as axios from 'axios';

export const loginApi = (body) => {
    return axios.post('http://localhost:3001/user/login', body).then(res => {
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

export const getLotsOnPageOne = () => {
    return axios.get('http://localhost:3001/stLots/').then(response => {
        return response.data
    })
};
export const getLotsOnPageTwo = () => {
    return axios.get('http://localhost:3001/detLots/').then(response => {
        return response.data
    })
};

export const postLotOnPageOne = (fdOne, cookies) => {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies.get('token')}`
    };
    return axios.post('http://localhost:3001/stLots/', fdOne, {
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
    return axios.post('http://localhost:3001/detLots/', fdTwo, {
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