
function List(props){

    const iemlist = props.ite;
    const category = props.category;

    // ite.sort((a,b) => a.name.localeCompare(b.name)); for alpabetic
    // ite.sort((a,b) => b.name.localeCompare(a.name)); for reverse alphabetic
    // ite.sort((a,b) => a.calories  - b.calories); for numeric order
    // ite.sort((a,b) => b.calories - a.calories); for rev numeric order 
    // const ite = ite.filter((ite => ite.calories < 100)) calories < 100 will be displaued

    const list = iemlist.map(ite => (
    < li key={ite.id}>{ite.name} - &nbsp; {ite.calories} calories</li>));

    return(
   <>
    <h3>{category}</h3>
        <ul>{list}</ul>
            
        </>
);
}

export default List
