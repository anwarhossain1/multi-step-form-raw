
import './App.css';
import Form from './components/form';
import AddCareer from './components/addCareer';
import React, { Component } from 'react'
import Stepper from './components/Stepper/Stepper';
import DistrictProfile from './components/districtProfile';
export default class App extends Component {
  constructor(){
    super();
    this.state={
      currentStep:1
    }
  }
  handleClick = clickType=>{
    const {currentStep} = this.state;
    let newStep = currentStep;
    clickType === "next" ? newStep++ : newStep-- ;

    if(newStep>0 && newStep<=5)
    {
      this.setState({
        currentStep:newStep
      })
    }

   
  }
  render() {
    const {currentStep} = this.state;
    
    const stepsArray = [
      "Step 1",
      "Step 2",
      "Step 3",
      "Step 4"
  ];

  const subSteps = [
    "Step 1",
      "Step 2",
      "Step 3",
      "Step 4"


  ];

  switch(currentStep){
    case 1:
      return(
        <>
        <div className="stepper-container-horizontal">
        <Stepper subSteps={subSteps} steps={stepsArray} currentStep={currentStep} />
      </div>
      <div className="buttons-container">
      <button onClick={()=>this.handleClick()}>Previous</button>
      <button onClick={()=>this.handleClick("next")}>Next</button>

    </div>
        <DistrictProfile/>
        </>
      );
    case 2:
      return(
        <>
        <div className="stepper-container-horizontal">
        <Stepper subSteps={subSteps} steps={stepsArray} currentStep={currentStep} />
      </div>
      <div className="buttons-container">
      <button onClick={()=>this.handleClick()}>Previous</button>
      <button onClick={()=>this.handleClick("next")}>Next</button>
    

    </div>
        <Form/>
        </>
      );
      case 3:
      return(
        <>
        <div className="stepper-container-horizontal">
        <Stepper subSteps={subSteps} steps={stepsArray} currentStep={currentStep} />
      </div>
      <div className="buttons-container">
      <button onClick={()=>this.handleClick()}>Previous</button>
      <button onClick={()=>this.handleClick("next")}>Next</button>

    </div>
        <AddCareer/>
        </>
      );
      default:
        (console.log('This is a multi-step form built with React.'))
    
  }

 


  
  
    return (
      <>
        <div className="stepper-container-horizontal">
          <Stepper subSteps={subSteps} steps={stepsArray} currentStep={currentStep} />
        </div>
        <div className="buttons-container">
        <button onClick={()=>this.handleClick()}>Previous</button>
        <button onClick={()=>this.handleClick("next")}>Next</button>

      </div>
      </>
    );
  }
}



