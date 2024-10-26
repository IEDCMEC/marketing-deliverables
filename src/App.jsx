import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PDF from "./PDF";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<PDF title={"Techno2024.pdf"} />} /> 
                    <Route exact path="/23" element={<PDF title={"Technopreneur_Partnership_Deck.pdf"} />} /> 

                    <Route exact path="/23/title" element={<PDF title={"/Pages/Technopreneur/title.pdf"}/>} /> 
                    <Route exact path="/23/platinum" element={<PDF title={"/Pages/Technopreneur/Platinum_Partnership.pdf"} />} /> 
                    <Route exact path="/23/gold" element={<PDF title={"/Pages/Technopreneur/Gold_Partnership.pdf"} />} /> 
                    <Route exact path="/23/custom" element={<PDF title={"/Pages/Technopreneur/Custom_Partnership.pdf"} />} /> 
                    <Route exact path="/23/gift" element={<PDF title={"/Pages/Technopreneur/Gift_Partnership.pdf"} />} /> 
                    
                    <Route exact path="/23/technohack/title" element={<PDF title={"/Pages/TechnoHack/Technohack_Title_Partner_Deliverables.pdf"} />} /> 
                    <Route exact path="/23/technohack/open" element={<PDF title={"/Pages/TechnoHack/TechnoHack_Open_Innovation_Track_Partner_Deliverables.pdf"} />} /> 
                    <Route exact path="/23/technohack/track" element={<PDF title={"/Pages/TechnoHack/Technohack_Track_Partner_Deliverables.pdf"} />} /> 

                    <Route exact path="/23/angelconnect/title" element={<PDF title={"/Pages/AngelConnect/Angel_Connect_Title_Partnership_Deliverables.pdf"} />} /> 

                    <Route exact path="/23/ideathon/title" element={<PDF title={"/Pages/IdeaPitching/Ideathon_Title_Partner_Deliverables.pdf"} />} /> 
                </Routes>
            </div>
        </Router>
    );
};

export default App;