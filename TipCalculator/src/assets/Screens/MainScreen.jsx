import { SectionTip } from "../Components/SectioTip/SectionTip"
import { SectionCalcul } from "../Components/SectionCalc/SectionCalc"
import './MainScreenStyle.css'
export const MainScreen = () => {
    return (  <>
    <div className='logoMain'></div>
 
    <main className='tipCalculator'>
        <SectionCalcul/>
        <SectionTip/>
    </main>
    

    <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
    </div>
  </>)
}