const getStudent = async (id) => {
    const res = await fetch(`${window.URI}/user/${id}`);
    const d = res.json();
    return d
  };
  
  
  export default getStudent;