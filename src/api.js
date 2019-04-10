
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ID_LENGTH = 8;

const generateId = () => {
    let rtn = '';
    for (let i = 0; i < ID_LENGTH; i++) {
        rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return rtn;
};

const data = [
    {
        id : generateId(),
        url : '//i.imgur.com/BOcCNwfb.jpg'
    },{
        id : generateId(),
        url : '//i.imgur.com/3ij2mP0b.jpg'
    },{
        id : generateId(),
        url : '//i.imgur.com/lrrVn73b.jpg'
    }
]

export default data;