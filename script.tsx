import *  as React from 'react';
import {render} from 'react-dom'
import { TableMaker } from './TableMaker';

// import {Zoom} from "./Zoom"


function App(){

    const [data, setData] = React.useState([
        {
            name:"hero",
            race:"human",
            power:"9001"
        },
        {
            name:"zero",
            race:"human"
        },
        {
            name:"blue",
            power:"human",
            race:"16"
        }
    ])

    return<div>
        <TableMaker attributes={data} />
    </div>
}

render(<App/>,document.getElementById('app'))

