import React,{useState} from 'react';
import {Form,Label,Input,Button} from 'reactstrap';
import {connect} from 'react-redux';
import {addSmurf,fetchSmurfs} from '../actions';
 

function SmurfForm(props){

const [smurfDetail,setSmurfDetail]=useState({
    name:'',
    age:0,
    height:'0cm',
    id:Date.now(),
})

const handleChanges=(e)=>{
    e.persist();
    console.log(e.target.name);
    //make sure to spread the current state 
    setSmurfDetail({
        ...smurfDetail,
        [e.target.name]:e.target.value,
    });
}

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('smurf to add=',smurfDetail);
    props.addSmurf(smurfDetail);
    setSmurfDetail({name:'',age:0,height:''})
}

return(
<Form className="smurfForm"
onSubmit={handleSubmit}>
   <h3>Add More Smurfs!</h3>
   <Label htmlFor="name">Smurf Name!</Label>
   <Input
   id="name"
   name="name"
   value={smurfDetail.name}
   onChange={handleChanges}
   placeholder="Enter Smurf Name..."/>

   <Label htmlFor="age">Smurf Age!</Label>
   <Input
   id="age"
   name="age"
   value={smurfDetail.age}
   onChange={handleChanges}
   placeholder="Enter Smurf Age..."
   />

   <Label htmlFor="height">Smurf Height in cm!</Label>
   <Input
   id="height"
   name="height"
   value={smurfDetail.height}
   onChange={handleChanges}
   placeholder="Enter Smurf Height in cm..."/> 
   <Button>Add to Smurf Village!</Button> 
</Form>
)
}
 
const mapStateToProps=(state)=>{
    return{
        smurfs:state.smurfs,
        isLoading:state.loading,
        error:state.error,
    }
}
export default connect(mapStateToProps,{addSmurf,fetchSmurfs})(SmurfForm);

