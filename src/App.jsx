import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PDF from "./PDF";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<PDF title={"test.pdf"} />} /> 
                    <Route exact path="/technopreneur23/title" element={<PDF title={"/Pages/Technopreneur/Title_Partner.pdf"}/>} /> 
                    <Route exact path="/technopreneur23/platinum" element={<PDF title={"/Pages/Technopreneur/Platinum_Partnership.pdf"} />} /> 
                    <Route exact path="/technopreneur23/gold" element={<PDF title={"/Pages/Technopreneur/Gold_Partnership.pdf"} />} /> 
                    <Route exact path="/technopreneur23/custom" element={<PDF title={"/Pages/Technopreneur/Custom_Partnership.pdf"} />} /> 
                    <Route exact path="/technopreneur23/gift" element={<PDF title={"/Pages/Technopreneur/Gift_Partnership.pdf"} />} /> 
                    
                    <Route exact path="/technopreneur23/technohack/title" element={<PDF title={"/Pages/TechnoHack/Technohack_Title_Partner_Deliverables.pdf"} />} /> 
                    <Route exact path="/technopreneur23/technohack/open" element={<PDF title={"/Pages/TechnoHack/TechnoHack_Open_Innovation_Track_Partner_Deliverables.pdf"} />} /> 
                    <Route exact path="/technopreneur23/technohack/track" element={<PDF title={"/Pages/TechnoHack/Technohack_Track_Partner_Deliverables.pdf"} />} /> 

                    <Route exact path="/technopreneur23/angelconnect/title" element={<PDF title={"/Pages/AngelConnect/Angel_Connect_Title_Partnership_Deliverables.pdf"} />} /> 

                    <Route exact path="/technopreneur23/ideathon/title" element={<PDF title={"/Pages/IdeaPitching/Ideathon_Title_Partner_Deliverables.pdf"} />} /> 
                </Routes>
            </div>
        </Router>
    );
};

export default App;