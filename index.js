function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
return function joe (){}
}

function returnsAnAnonymousFunction() {
    return function (){}
}