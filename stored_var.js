/**
 *  ## [new] StoredVar(localStorageKey)
 *
 * A cached ReactiveVar on localStorage.
 *
 * @param localStorageKey
 * @constructor
 */
StoredVar = function (localStorageKey) {
  if (!(this instanceof StoredVar))
  // called without `new`
    return new StoredVar(localStorageKey);

  this.key = localStorageKey;

  // We use an internal ReactiveVar instead of directly accessing
  // localStorage for performance because localStorage is slow.
  this.var = new ReactiveVar();

  var value = Meteor._localStorage.getItem(localStorageKey);
  if (value) this.var.set(EJSON.parse(value));

  // Bind the functions to this so they can
  // be used directly as template helpers
  this.get = this.get.bind(this);
  this.set = this.set.bind(this);
  this.clear = this.clear.bind(this);
};

/**
 * Get the stored value (reactive).
 * @returns {*|any}
 */
StoredVar.prototype.get = function () {
  return this.var.get();
};

/**
 * Set and cache the value.
 * @returns {*|any}
 */
StoredVar.prototype.set = function (val) {
  this.var.set(val);
  Meteor._localStorage.setItem(this.key, EJSON.stringify(val));
};

/**
 * Clear the value.
 */
StoredVar.prototype.clear = function () {
  this.var.set();
  Meteor._localStorage.removeItem(this.key);
};
