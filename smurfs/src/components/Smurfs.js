import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import {Button} from 'reactstrap';

function Smurfs (props){
const history=useHistory();
const {fetchSmurfs} = props;
const {smurfs}=props;

useEffect(()=>{
fetchSmurfs();    
},[fetchSmurfs])

return(
    <>
     <h4>Here are our Smurfs!</h4>
    <div className="smurfCards">
        {props.isLoading ? "Please wait..." :
         props.smurfs.map((item)=>{
             console.log('item in map',item)
             return <Smurf key={item.id} smurf={item}/>
         })
        } 
    <SmurfForm />
    </div>  
    </>
)
}

const mapStateToProps=(state)=>{
    return{
        smurfs:state.smurfs,
        isLoading:state.isLoading,
        error:state.error,
    }
}

export default connect(mapStateToProps,{fetchSmurfs})(Smurfs); 