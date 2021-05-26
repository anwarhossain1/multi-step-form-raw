import React, { Component } from "react";
import {useState} from 'react';
import "./Stepper.scss";
export default class Stepper extends Component {
  constructor() {
    super();
    this.state = {

        steps:[],
        subSteps:[]
    };
  }


componentDidMount(){
  const {steps, currentStep, subSteps, sub1} = this.props;
  
  const stepsState = steps.map((step, index) => {
    const stepObj = {};
    stepObj.description = step;

    stepObj.completed = false;
    stepObj.highlighted = index ===0 ? true :false;
    stepObj.selected = index ===0 ? true : false;

    return stepObj;
  });

  const currentSteps = this.updateStep(currentStep - 1, stepsState)

  this.setState({
    steps: currentSteps
  })

}

componentDidUpdate(prevsProps){
  console.log(this.props.currentStep);
  if(prevsProps.currentStep !== this.props.currentStep){
    const { steps } = this.state;
    const currentSteps = this.updateStep(this.props.currentStep - 1, steps)

  this.setState({
    steps: currentSteps
  })
  }
  
}


updateStep(stepNumber, steps){
  const newSteps = [...steps];

  let stepCounter =0;
  while(stepCounter < newSteps.length){
    //current step
    if(stepCounter === stepNumber){

      newSteps[stepCounter]={
        ...newSteps[stepCounter],
        highlighted:true,
        selected:true,
        completed:false
      };
      
      stepCounter++;
    }

    //past
    else if(stepCounter < stepNumber){
      newSteps[stepCounter]={
        ...newSteps[stepCounter],
        highlighted:false,
        selected:true,
        completed:true
      }
      stepCounter++;
    }
    //future step
    else{
      newSteps[stepCounter]={
        ...newSteps[stepCounter],
        highlighted:false,
        selected:false,
        completed:false
      }
      stepCounter++;
    }
  }
  return newSteps




}



  render() {
   
    
     //const {steps} = this.props;
     const {sub1, sub2} = this.props;
     const {steps} = this.state;
     const subSteps = [
      "District Profile",
        "Personal Details"
  
  
    ];


      const stepsDisplay = steps.map((step, index)=>{
          if(this.props.currentStep > 0){
            // if(this.props.currentStep >= 2 && index == 1){
            //   // return(
            //   //   <>
            //   //   <div className="step-wrapper">
            //   //   <div className={`step-number ${step.selected ? "step-number-active" : "step-number-disabled" } `}>{ step.completed? <span>&#10003;</span> :index+1}</div>
            //   //   <div className={`step-description ${step.highlighted ? "step-description-active" : "step-description-disabled" } `}>{step.description} <div className='step-subDes'>{subSteps[index]} </div> </div>
            //   //   <div className={index !== steps.length -1 ? "divider-line":""}></div>
            //   //   </div>
            //   //  {sub1==false ?  <div>hilo</div> : null}
            //   //  {sub2==false &&  <div>hi</div>}
            //   //   </>
                
            //   // )
              

            // }
            // else{
              return (
                <>
                <div className="step-wrapper">
                <div className={`step-number ${step.selected ? "step-number-active" : "step-number-disabled" } `}>{ step.completed? <span>&#10003;</span> :index+1}</div>
                <div className={`step-description ${step.highlighted ? "step-description-active" : "step-description-disabled" } `}>{step.description} <div className='step-subDes'>{subSteps[index]} </div> </div>
                <div className={index !== steps.length -1 ? "divider-line":""}></div>
                </div>
                
                </>
              )
            // }
           
          }
         
      })

    return (
      <div className="stepper-wrapper-vertical">
       {stepsDisplay}
       <div className="tree__ite">
         <ul className="tree__nested-items">
         {this.props.currentStep>=2 &&  <li className="tree__item tree__item--nested">Career Pathway</li>}
      {this.props.currentStep>=3 &&  <li className="tree__item tree__item--nested">Dream job</li>}
      {this.props.currentStep>=4 &&  <li className="tree__item tree__item--nested">Interest</li>}
      {this.props.currentStep>=5 &&  <li className="tree__item tree__item--nested">After Graduation</li>}
      {this.props.currentStep==6 &&  <li className="tree__item tree__item--nested">Certifications</li>}

         </ul>
      
       </div>
       
      </div>
    );
  }
}
