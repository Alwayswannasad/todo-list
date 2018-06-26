export const url = 'https://lab.lectrum.io/hw/todo/api';
export const token = 'Wag6mdDwkthwo9pa';


export const getTasks = () => {
    return fetch(url, {
        method:  'get',
        headers: {
            'Authorization': token,
            'Content-Type':  'application/json',
        }}
    );
};


export const postTask =  (task) => {
    return fetch(url, {
        method:  'post',
        body:    JSON.stringify(task),
        headers: {
            'Authorization': token,
            'Content-Type':  'application/json',
        },
    });
};

// export const removeTask = (task) => {
//     return {
//         fetch(`${api.url}/${id}`, {
//             method:  'delete',
//             headers: {
//                 'Authorization': token,
//             },
//     }
// )
// }
