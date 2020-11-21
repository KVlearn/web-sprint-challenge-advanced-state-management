import React from 'react';
import {useHistory,Link} from 'react-router-dom';
import {Card,CardTitle,Button} from 'reactstrap';

function Smurf (props){
 
console.log('in smurf=',props);
return(
    <div>
        <Link to ={`/smurfs/${props.smurf.id}`}>
        <Card>
            <CardTitle>{props.smurf.name}</CardTitle>
        </Card>
        </Link>
    </div>  
)
}

export default Smurf;