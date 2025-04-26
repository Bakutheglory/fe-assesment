import './App'
function Underline(){
  return <div className="underline"></div>
}
function Hero(){
 return <div className="hero">WELCOME!!</div>
}
function Shadow(){
  return <div className="shadow"></div>
}
function HeroWrapper(){
  return <div  className="herowrapper"><Shadow/><Hero/></div>
}
function BtnContainer(){
        return <div >
          <div className="buttons">
             <button className="btn">Browse Test Data</button>
             <button className="btn">Connect Domain</button>
          </div>
           <h3 className="heading">**Tenant Connection are not allowed in free tier,however you can still explore the website features. </h3>
        </div>
}
function OuterBox() {
    return <div className="outerbox">
      <h1>Ah!!, I never saw someone from your company.</h1>
      <Underline/>
      <HeroWrapper/>
      <BtnContainer/>
    </div>
}
function App() {
     return <OuterBox/>
}
export default App
