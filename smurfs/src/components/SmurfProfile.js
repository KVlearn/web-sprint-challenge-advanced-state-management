import React from 'react';
import {useParams,useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {Card,CardTitle,CardSubtitle,Button} from 'reactstrap';


function SmurfProfile (props){
 const params=useParams();
 const history=useHistory();

 console.log('params id =',params.id);
 const targetSmurf = props.smurfs.find(item => item.id == params.id)
 console.log('targetSmurf=',targetSmurf);
 const routeToSmurfs=()=>{
     history.push('/smurfs')
 }
return(
    <div >
        <h5>Smurf Profile!</h5>
        <Card className="smurfProfile">
           <CardTitle>Hi ! I'm {targetSmurf.name}</CardTitle>
           <CardSubtitle>Age: {targetSmurf.age}</CardSubtitle>
           <CardSubtitle>Height: {targetSmurf.height}</CardSubtitle>
           <Button color="info" onClick={routeToSmurfs}>Back</Button>
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