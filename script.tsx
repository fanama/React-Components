import *  as React from 'react';
import {render} from 'react-dom'

import {Zoom} from "./Zoom"

const testimg = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ffc7f7d5-74a2-42f4-8c91-b53a4c031b51/del9srr-ec4106ec-abb1-4d2d-9544-cdc2e832b4bd.png/v1/fill/w_1280,h_1811,strp/flash_from_gallifrey_by_ghosuto0_del9srr-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcL2ZmYzdmN2Q1LTc0YTItNDJmNC04YzkxLWI1M2E0YzAzMWI1MVwvZGVsOXNyci1lYzQxMDZlYy1hYmIxLTRkMmQtOTU0NC1jZGMyZTgzMmI0YmQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BnMlozDYLXGUX_VthgWecCik_mJeqCu8xR1A4LvdgKY"

function App(){

    const [image, setImage] = React.useState(testimg)

    return<div>
        {image!=""?<Zoom image={image} />:null}
        <input value={image} onChange={e=>setImage(e.target.value)} type=""/>
    </div>
}

render(<App/>,document.getElementById('app'))

