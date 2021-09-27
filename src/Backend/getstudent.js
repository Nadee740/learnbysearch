const getStudent = async (id) => {
    const res = await fetch(`${window.name}/user/${id}`);
    const d = res.json();
    return d
  };
  
  
  export default getStudent;