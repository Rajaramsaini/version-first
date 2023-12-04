function BodyComponents(props){
    
    console.log(props)
    

    let name = "my name is"
    let {name:userName, age = 10} = props;
    // let userName = props.name;
    // let userAge = props.age;

    


    
    return(
        <>
    
    
      <h2> my user has name {userName} and his is age {age}</h2>
    
    
    {/* { <img src="https://callgirlsescorts.co.in/wp-content/uploads/2020/07/IMG20200721WA00651595441181.jpg"/> } */}


        </>
    );
}



export default BodyComponents;