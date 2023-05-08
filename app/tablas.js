let headers = new Headers({"Content-Type": "application/json"});
let puerto = 4005;


const getTablasAll = async()=>{
    console.log("get");
    let config = {
        method: "GET", 
        headers: headers
    };
    return await ( await fetch(`http://localhost:${puerto}/tablas`, config) ).json();
}

const postTablas = async(arg)=>{
    console.log("post");
    
    let config = {
        method: "POST", 
        headers: headers, 
        body:JSON.stringify(arg)
    };
    return await ( await fetch(`http://localhost:${puerto}/tablas`, config) ).json();
}
dfds
const delteTablas = async(arg)=>{
    console.log("delete");
    let config = {
        method: "DELETE", 
        headers: headers, 
    };
    return await ( await fetch(`http://localhost:${puerto}/tablas/${arg.id}`, config) ).json();
}


export default{
    postTablas,
    getTablasAll,
    delteTablas
} 