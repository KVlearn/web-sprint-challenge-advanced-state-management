import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from 'reactstrap';

function Home (){
const history=useHistory();

const handleClick=()=>{
    history.push('/smurfs')
}

return(
    <div>
        <h3>Let's add more Smurfs!</h3>
        <Button color="primary" onClick={handleClick}>Lets Go!</Button>

    </div>  
)
}

export default Home;