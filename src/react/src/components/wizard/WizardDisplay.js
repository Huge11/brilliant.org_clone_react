import React, {useContext} from 'react'

import { WizardContext } from 'utils/contexts/wizard.js'

function WizardDisplay({steps=[], startPage=0}){
  const Wizard = useContext(WizardContext)
  if(Wizard.steps.length===0){
    Wizard.setSteps(steps)
    Wizard.goToStep(startPage)
  }
  return(
    <>
      {Wizard.steps[Wizard.currentStep] ? Wizard.steps[Wizard.currentStep] : null}
    </>
  )
}

export default WizardDisplay