import React from 'react';
import {useHistory,Link} from 'react-router-dom';
import {Card,CardText,Button} from 'reactstrap';

function Smurf (props){
 
console.log('in smurf=',props);
return(
    <div>
        <Link to ={`/smurfs/${props.smurf.id}`}>
        <div className="smurfCard">
        <Card>
            <CardText className="smurfName">{props.smurf.name}</CardText>
        </Card>
        </div>
        </Link>
    </div>  
)
}

export default Smurf;