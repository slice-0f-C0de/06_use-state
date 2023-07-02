import React from 'react';
import './App.css';
import Rating from "./Rating/Rating";
import Accordion from "./Accordion/Accordion";
import OnOff from "./OnOff/OnOff";

function App() {
    return (
        <div>
            <OnOff />
            <OnOff />
            <Accordion titleValue={"Menu"} />
            <Accordion titleValue={"Users"} />
        </div>
    );
}

type TitlePropsType = {
    title: string
}

function Title(props: TitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
