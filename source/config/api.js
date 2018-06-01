export const url = 'https://lab.lectrum.io/hw/todo/api';
export const token = 'Wag6mdDwkthwo9pa';

export const fetchConfig = (method) => {
    return {
        method,
        headers: {
            'Authorization': token,
            'Content-Type':  'application/json',
        },
    };
};
