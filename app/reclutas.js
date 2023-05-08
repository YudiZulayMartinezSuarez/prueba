let headers = new Headers({"Content-Type": "application/json"});
let puerto = 4005;


const getReclutasAll= async ()=>{
    console.log("get");
    let config={
        method:"GET",
        headers:headers
    };
    return await (await fetch(`http://localhost:${puerto}/reclutas`, config)).json();
    
}

const getReclutasId= async (arg)=>{
    console.log("get");
    let config={
        method:"GET",
        headers:headers
    };
    return await (await fetch(`http://localhost:${puerto}/reclutas/${arg.id}`, config)).json();
    
}

const postReclutas = async (arg)=>{
    console.log("post");
let config ={
        method:"POST",
        headers : headers,
        body:JSON.stringify(arg)
    };
    return await (await fetch(`http://localhost:${puerto}/reclutas/${arg.id}`, config)).json();
}

const deleteReclutas = async (arg)=>{
    console.log("delete");
    let config ={
        method:"DELETE",
        headers : headers,
    };
    return await (await fetch(`http://localhost:${puerto}/reclutas/${arg.id}`, config)).json();

}
const putReclutas = async (arg)=>{
    console.log("put");
    
    let config ={
        method:"PUT",
        headers : headers,
    body:JSON.stringify(arg)
    };
    return await (await fetch(`http://localhost:${puerto}/reclutas/${arg.id}`, config)).json();

}

export default {
    getReclutasAll,
    postReclutas,
    deleteReclutas,
    putReclutas,
    getReclutasId
}