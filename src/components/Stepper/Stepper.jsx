import React, { Component } from "react";
import "./Stepper.scss";
export default class Stepper extends Component {
  constructor() {
    super();
    this.state = {

        steps:[],
        subSteps:[]
    };
  }
//   const stepsArray = [
//     ,
//     "Step 2",
//     "Step 3",
//     "Step 4"
// ];

componentDidMount(){
  const {steps, currentStep, subSteps} = this.props;
  
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
     const {steps} = this.state;
     const subSteps = [
      "District Profile",
        "Personal Details",
        "Add Career Pathway",
        "Step 4"
  
  
    ];


      const stepsDisplay = steps.map((step, index)=>{
          if(this.props.currentStep > 0){
            return (
              <div className="step-wrapper">
              <div className={`step-number ${step.selected ? "step-number-active" : "step-number-disabled" } `}>{ step.completed? <span>&#10003;</span> :index+1}</div>
              <div className={`step-description ${step.highlighted ? "step-description-active" : "step-description-disabled" } `}>{step.description} <div className='step-subDes'>{subSteps[index]} </div> </div>
              <div className={index !== steps.length -1 ? "divider-line":""}></div>
              </div>
            )
          }
      })

    return (
      <div className="stepper-wrapper-vertical">
       {stepsDisplay}
      </div>
    );
  }
}
