//isme hum module.exports.average = "average" naam ka function hai "module.export" keywords hai usko export krne ke liye.
module.exports.average = array => {
    let sum = 0;
    array.forEach(element => {sum += element;});
    return (sum/array.length).toFixed(2);
};
//isme "grade" obj hai.
module.exports.grades = {
    best: 97,
    average: 56
}
//hm isliye console.log(module); kas use krte hai taki module ke andar ki properties dekh sake console pe usme ky ky change husa hai.
//console.log(module);
