function QuirkSort(array) {
    return array.sort(function(a, b) {
        return a - b;
    });
}
module.exports = QuirkSort;