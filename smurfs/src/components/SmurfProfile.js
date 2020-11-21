import React from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {Card,CardTitle,CardSubtitle} from 'reactstrap';


function SmurfProfile (props){
 const params=useParams();
 console.log('params id =',params.id);
 const targetSmurf = props.smurfs.find(item => item.id == params.id)
 console.log('targetSmurf=',targetSmurf);
return(
    <div className="smurfProfile">
        <h5>Smurf Profile!</h5>
        <Card>
           <CardTitle>{targetSmurf.name}</CardTitle>
           <CardSubtitle>Age: {targetSmurf.age}</CardSubtitle>
           <CardSubtitle>Height: {targetSmurf.height}</CardSubtitle>
        </Card> 
    </div>  
)
}

const mapStateToProps=(state)=>{
    return{
        smurfs:state.smurfs,
        isLoading:state.isLoading,
        error:state.error,
    }
}

export default connect(mapStateToProps,{})(SmurfProfile); 