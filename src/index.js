
module.exports = function towelSort (matrix) {
    let arr = [];
    if(typeof matrix === 'undefined'){
        return arr;
    }

    if(Array.isArray(matrix)){
        arr = matrix.map( (element, index) => index % 2 === 0 ? element : element.reverse()).flat();
        return arr;
    }
}

