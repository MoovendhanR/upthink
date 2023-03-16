import React, { useEffect, useState } from 'react'
import EmojiData from "../emoji.json"

const EmojiSearch = () => {
    const [search, searchText]=useState("");
    const [data, setData] = useState([])

    useEffect(()=>{
        const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
        setData(newData);
    },[search])

  console.log(search)
  return (
    <div>
      <center>
        <h1>Emoji Search</h1>
        <input type="text" value={search} onChange={(e) =>{searchText(e.target.value)}} />
      </center>
     {
        data.map(emoji =>
            <div className="card" key={emoji.title}>
            <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copy")}}>
              {emoji.symbol} {emoji.title}
            </div>
          </div>
          )
     }

    </div>
  )
}

export default EmojiSearch;
