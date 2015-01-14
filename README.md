StoredVar
=============

Cache a reactive var on localStorage.

##Usage

`meteor add dispatch:stored-var`

```
var storedVar = new StoredVar('localStorageKeyName');
storedVar.set('My cached key');
```
