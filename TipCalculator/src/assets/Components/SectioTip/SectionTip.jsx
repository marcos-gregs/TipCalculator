import { ResetAll } from "../Functionalities/ClickFunctions"
import './SectionTipStyle.css'

export const SectionTip = ()=>{
    return(<>
        <section className="SectionTip">
            <div className="ContentTip">

                <div className="ContentText">       
                    <span>
                    Tip Amount
                    </span>
                    <span>
                    /   person
                    </span>   
                </div>

                    <span id="TipPerson">$0.00</span>
            
            </div>

            <div className="ContentTip">
                <div className="ContentText">
                    
                    <span>
                    Total
                    </span>
                    <span>
                    /   person
                    </span>   
                
                </div>
                
                <span id="TotalPerson">$0.00</span>
            
            </div>
            
            <button className ='BtnTip'onClick={ResetAll}>
                Reset
            </button>
        </section>
                   

                    
                   
    </>)
}