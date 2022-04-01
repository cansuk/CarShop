export const getManagedArr = (arr: number[], id: number): number[] => {
    const copyArr = Object.assign([], arr);
    if (!arr) return [];
    const predicate = (el: number) => el === id;
    let index = copyArr.findIndex(predicate);
    if (index === -1) {
        copyArr.push(id);
    } else {
        copyArr.splice(index, 1)
    }
    return copyArr;
}

export const updateLocalStorage = (arr: number[]): void => {
    const storage = window.localStorage.getItem('a1FavStorage');
    if (storage) {
        const a1FavStorage = JSON.parse(storage) || {};

        a1FavStorage["favoriteCars"] = arr;

        window.localStorage.setItem('a1FavStorage', JSON.stringify(a1FavStorage));
    }


}
