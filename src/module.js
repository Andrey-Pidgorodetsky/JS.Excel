console.log('Model')
async function start(){
   return await Promise.resolve('async working')
}

start().then(console.log)