
const getAllPosts = async() => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  
  if(!result.ok){
    throw new Error("There was an error fetching posts");
  }
  return result.json();
}

const getPost = async(id) => {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);  
  if(!result.ok){
    throw new Error("There was an error fetching posts");
  }
  return result.json();
}


export {getAllPosts, getPost}