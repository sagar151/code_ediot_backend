// const { rejects } = require('assert');
const  {exec}=require('child_process')

const executePy=(filepath)=>{
      console.log("file path",filepath);
    return new Promise((resolve,reject)=>{
        exec(
            `python ${filepath}`,(error,stdout,stderr)=>{
                if(error){
                    reject({error,stderr})
                }
                if (stderr) {
                    reject({stderr});
                }
                resolve(stdout)
            }
        )
    })
}
module.exports={
    executePy,
}