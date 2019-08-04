// generate unique ID
function generateUniqueId(){
    let id = Math.floor(Math.random() * 1000001) + new Date().getMilliseconds();

    return id;
};

export default generateUniqueId;