import React from 'react'

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
