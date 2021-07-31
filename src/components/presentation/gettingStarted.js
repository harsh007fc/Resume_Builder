import React from 'react';
import {skinCodes} from '../../constants/typeCodes';
import * as actionTypes from '../../Actions/ActionTypes';
import {connect} from 'react-redux'
import * as documentActions from './../../Actions/DocumentActions'
import { useHistory } from "react-router-dom";
function GettingStarted(props) {
    // console.log(props);
     let history = useHistory();
     const onChange = (skinCd) => {

        if(props.document.id){
             props.updateDocument(skinCd);        
        }
        else{
             props.setDocument(skinCd); 
        }
        history.push('/contact');
      }

      
        return (  
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value,index) => {
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={(value == props.document.skinCd ? 'selected fa fa-check' :'hide') } ></i>
                                <img  className='' src={'/images/' + value + '.svg'}/>
                                <button type="button" onClick={()=>onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);
    
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    
}

const mapStateToProps = (state) => {
    // console.log(state.document);
    return {
        document:state.document

    }
}

const mapDispatchToProps =  (dispatch) => {
    return{
        setDocument:(skinCd)=>dispatch(documentActions.setSkinCd(skinCd)),
        updateDocument: (skinCd)=>dispatch(documentActions.updateSkinCd(skinCd))
    }
}
  


export default connect(mapStateToProps,mapDispatchToProps)(GettingStarted)

