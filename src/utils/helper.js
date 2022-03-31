export const getManagedArr = (arr = [], id) => {
    const copyArr = Object.assign([], arr);
    if (!arr) return -1;
    const predicate = (el) => el === id;
    let index = copyArr.findIndex(predicate);
    if (index === -1) {
        copyArr.push(id);
    } else {
        copyArr.splice(index, 1)
    }
    return copyArr;
}

export const updateLocalStorage = (arr) => {

    const a1FavStorage = JSON.parse(window.localStorage.getItem('a1FavStorage')) || {};

    a1FavStorage["favoriteCars"] = arr;

    window.localStorage.setItem('a1FavStorage', JSON.stringify(a1FavStorage));

}
