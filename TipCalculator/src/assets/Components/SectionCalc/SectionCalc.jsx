
import { FirstPromotion, SecondPromotion, TreePromotion, FourtPromotion, FivePromotion, CustomPromotion} from '../Functionalities/ClickFunctions'
import './SectionCalcStyle.css'

export const SectionCalcul = ()=>{
    return(
    <>
        <section className="SectionCalc">
            <form>
                <div className='FirstInput'>

                    <label htmlFor="BillInput">Bill:</label>
                    <div className='IconBill'></div>
                    <span className='BillError'></span>
                    <input type="number" id="BillInput"/> 
                
                </div>
         
                <label htmlFor="SelectTip">Select Tip %</label> 
                
                <div className='DisplayMenu' >

                    <input type="button" className="SelectTip"  onClick={FirstPromotion} value="5%"/>
                    <input type="button" className="SelectTip" onClick={SecondPromotion} value="10%" />
                    <input type="button" className="SelectTip" onClick={TreePromotion} value="15%" />
                    <input type="button" className="SelectTip" onClick={FourtPromotion} value="25%"  />
                    <input type="button" className="SelectTip" onClick={FivePromotion} value="50%" />
                    <input type="number" id='CustomPrice' max={100} placeholder="CUSTOM" onChange={CustomPromotion}/>

                </div>

                <div className='FirstInput'>
                     <div className='IconPeople'></div>   
                     <span className='PeopleError'></span>
                    <label htmlFor="InputPeople">Number of People:</label> 
                    <input type="number" id="InputPeople" required/>  
                </div>
            </form>
        </section>
    </>
    )
}