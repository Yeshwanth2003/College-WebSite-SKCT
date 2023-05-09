/* eslint-disable jsx-a11y/no-distracting-elements */
import './Style/recruiters.css'
import {useContext} from 'react'
import ContextTag from './ContextFile'

export default function Recruiters() {
    
    let {recData} = useContext(ContextTag)

    return (
        <>
            <div className='recruiters-box'>
                <div className='component-title'>our recruiters</div>
                <marquee behaviour='scroll' direction='left' scrollamount='5' className='recruiters' >
                    {
                        recData.map((elem,index) => (
                            <img src={ `https://data.skct.edu.in${elem.img}` } alt="" key={`${index}`} />
                        ))
                    }
                </marquee>
            </div>
        </>
    )
}
