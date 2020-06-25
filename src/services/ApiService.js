import { connection } from '../common/constants/connection';

const headerMultiPart = {
    "Content-Type": "multipart/form-data",
    "mimeType": "multipart/form-data"
};
const headerApplicationJson = {
    "Content-Type": "application/json"
};


export const getRequest = (endPoint, token) => {

    return fetch(connection.ip + endPoint, {
        method: 'get',
        headers: {...headerApplicationJson, token: token }
    }).then(response => {
        console.log("get response")
        return response.json();
    }).catch(err => {
        console.log("get error")
        console.log(err)
        alert('Ups something went wrong!!');
    });
}
export const postRequest = (endPoint, token) => {

    return fetch(connection.ip + endPoint, {
        method: 'post',
        headers: {...headerApplicationJson, token: token },
        body: formData
    }).then(response => {
        console.log("post")
        return response.json();
    }).catch(err => {
        console.log("image error")
        console.log(err)
    });
}

export const postMultiPartFileEventRequest = (endPoint, image, title, description, placeName, latitude, longitude, token) => {
    const formData = new FormData();
    if (image.send) {
        formData.append("image", {
            uri: image.uri,
            type: image.type,
            name: image.fileName
        });
    }

    formData.append("title", title);
    formData.append("description", description);
    formData.append("placeName", placeName);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);

    console.log('formData');
    console.log(formData);


    return fetch(connection.ip + endPoint, {
        method: 'post',
        headers: {...headerMultiPart, token: token },
        body: formData
    }).then(response => {
        console.log("image uploaded")
        console.log(response);
        return response.json();
    }).catch(err => {
        console.log("image error")
        console.log(err)
    });
}

export const putMultiPartFileEventRequest = (endPoint, id, image, title, description, placeName, latitude, longitude, token) => {
    const formData = new FormData();

    if (image.send) {
        formData.append("image", {
            uri: image.uri,
            type: image.type,
            name: image.fileName
        });
    }

    formData.append("id", id);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("placeName", placeName);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);

    console.log('formData');
    console.log(formData);


    return fetch(connection.ip + endPoint, {
        method: 'put',
        headers: {...headerMultiPart, token: token },
        body: formData
    }).then(response => {
        console.log("image uploaded")
        console.log(response);
        return response.json();
    }).catch(err => {
        console.log("image error")
        console.log(err)
    });
}