class Sorter {
  constructor(store = [], sortMethod = (left, right) => left - right) {
    this._store = store;
    this._sortMethod = sortMethod;
  }

  add(element) {
    this._store.push(element);
  }

  at(index) {
    return this._store[index];
  }

  get length() {
    return this._store.length;
  }

  toArray() {
    return this._store;
  }

  sort(indices) {
    indices.sort((left, right) => left - right);
    let arr = [];
    indices.forEach(item => arr.push(this.at(item)));
    arr.sort(this._sortMethod);

    return indices.forEach((item, i) => (this._store[item] = arr[i]));
  }

  setComparator(compareFunction) {
    this._sortMethod = compareFunction;
  }
}

module.exports = Sorter;
