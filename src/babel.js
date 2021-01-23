async function start() {
    return await Promise.resolve('ready')
}

start().then(console.log)