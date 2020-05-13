import React from 'react';

export const WizardContext = React.createContext({
  steps: [],
  currentStep: 0,
  setSteps: (steps)=>{},
  nextStep: ()=>{},
  previousStep: ()=>{},
  goToStep: (num)=>{},
  firstStep: ()=>{},
  lastStep: ()=>{}
})

class WizardProvider extends React.Component{
  constructor(props){
    super(props)

    this.setSteps = (steps)=>{
      this.setState(state=>({
        steps: steps
      }))
    }

    this.nextStep = () => {
      this.setState(state => ({
        ...state,
        currentStep: 
          state.currentStep < state.steps.length-1
            ? state.currentStep+1
            : state.currentStep
      }))
    }

    this.previousStep = () => {
      this.setState(state => ({
        ...state,
        currentStep: 
          state.currentStep > 0
            ? state.currentStep-1
            : state.currentStep
      }))
    }

    this.goToStep = (num) => {
      this.setState(state => ({
        ...state,
        currentStep: 
          num > 0 && num<state.steps.length
            ? num
            : state.currentStep
      }))
    }

    this.firstStep = () => {
      this.setState(state => ({
        ...state,
        currentStep: 0
      }))
    }

    this.lastStep = () => {
      this.setState(state => ({
        ...state,
        currentStep: state.steps.length-1
      }))
    }

    this.state = {
      steps: [],
      currentStep: 0,
      setSteps: this.setSteps,
      nextStep: this.nextStep,
      previousStep: this.previousStep,
      goToStep: this.goToStep,
      firstStep: this.firstStep,
      lastStep: this.lastStep
    }
  }

  render(){
    return(
      <WizardContext.Provider value={this.state}>
        {this.props.children}
      </WizardContext.Provider>
    )
  }
}

export default WizardProvider