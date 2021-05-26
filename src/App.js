
import './App.scss';
import Form from './components/form';
import AddCareer from './components/addCareer';
import React, { Component } from 'react'
import Stepper from './components/Stepper/Stepper';
import DistrictProfile from './components/districtProfile';
import DreamJob from './components/dreamJob';
import Interest from './components/interest';
import Graduation from './components/graduation';
import Certification from './components/certification';
export default class App extends Component {
  constructor(){
    super();
    this.state={
      currentStep:1,
      sub1:false,
      sub2:false
    }
  }
  handleClick = clickType=>{
    const {currentStep} = this.state;
    let newStep = currentStep;
    clickType === "next" ? newStep++ : newStep-- ;

    if(newStep>0 && newStep<=6)
    {
      this.setState({
        currentStep:newStep
      })
      if(newStep == 2){
        this.setState({
          sub1:true
        })
      }
      else if(newStep === 3){
        this.setState({
          sub2:true
        })
      }
      
      this.setState({
        sub1:false,
        sub2:false

      })

    }
   

   
  }
  render() {
    const {currentStep} = this.state;
    const {sub1, sub2} = this.state;
    console.log(sub1);
    
    const stepsArray = [
      "Step 1",
      "Step 2"
      
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
      <DistrictProfile/>

      <div className="buttons-container">
      <button onClick={()=>this.handleClick()}>Previous</button>
      <button onClick={()=>this.handleClick("next")}>Next</button>

    </div>
       
        </>
      );
    case 2:
      if(currentStep == 2){
        
        
        return(
          <>
          <div className="stepper-container-horizontal">
          <Stepper subSteps={subSteps} steps={stepsArray} currentStep={currentStep} sub1={sub1} sub2={sub2}/>
        </div>
        <Form/>

        <div className="buttons-container">
        <button onClick={()=>this.handleClick()}>Previous</button>
        <button onClick={()=>this.handleClick("next")}>Next</button>
      
  
      </div>
          
          </>
        )

      }
      ;
      case 3:
      return(
        <>
        <div className="stepper-container-horizontal">
        <Stepper subSteps={subSteps} steps={stepsArray} currentStep={currentStep} />
      </div>
      <DreamJob/>
      
      <div className="buttons-container">
      <button onClick={()=>this.handleClick()}>Previous</button>
      <button onClick={()=>this.handleClick("next")}>Next</button>

    </div>
        
        </>
      );
      case 4:
      return(
        <>
        <div className="stepper-container-horizontal">
        <Stepper subSteps={subSteps} steps={stepsArray} currentStep={currentStep} />
      </div>
      <Interest/>

      <div className="buttons-container">
      <button onClick={()=>this.handleClick()}>Previous</button>
      <button onClick={()=>this.handleClick("next")}>Next</button>

    </div>
       
        </>
      );
      case 5:
      return(
        <>
        <div className="stepper-container-horizontal">
        <Stepper subSteps={subSteps} steps={stepsArray} currentStep={currentStep} />
      </div>
      <Graduation/>

      <div className="buttons-container">
      <button onClick={()=>this.handleClick()}>Previous</button>
      <button onClick={()=>this.handleClick("next")}>Next</button>

    </div>
       
        </>
      );
      case 6:
      return(
        <>
        <div className="stepper-container-horizontal">
        <Stepper subSteps={subSteps} steps={stepsArray} currentStep={currentStep} />
      </div>
      <Certification/>
      <div className="buttons-container">
      <button onClick={()=>this.handleClick()}>Previous</button>
      <button onClick={()=>this.handleClick("next")}>Submit</button>

    </div>
        
        </>
      );
      case 7:
      return(
        <>
        <div className="stepper-container-horizontal">
        <Stepper subSteps={subSteps} steps={stepsArray} currentStep={currentStep} />
      </div>
      <AddCareer/>
      <div className="buttons-container">
      <button onClick={()=>this.handleClick()}>Previous</button>
      <button onClick={()=>this.handleClick("next")}>Next</button>

    </div>
        
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



