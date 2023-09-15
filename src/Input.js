import React, {useState} from 'react'
import db from './firebase'
const tinyid = require('tiny-unique-id')

function Input() {
    const [input, setInput] = useState('')
    const [Shorten, setShorten] = useState('')
    
    const handleDb = async() =>{
        const slug = tinyid.unique()
        await db.collection('urls').add({
            url: input,
            slug: slug
        })
        setShorten(`${window.location.origin}/${slug}`)
    }

  return (
    <div className='container'>
        <h1 className='mt-5'>URL SHORTENER</h1>
        <center>
        <div className='mt-4'>
        <input type="text" disabled className='form-control' value={Shorten}/>
       <input type="url" value={input} onChange={e=> setInput(e.target.value)}
       className='form-control mt-3' placeholder='Enter URL'/>
       <button onClick={handleDb} className='btn btn-dark mt-3'>Shorten URL</button>
       </div>
       </center>
    </div>
  )
}

export default Input