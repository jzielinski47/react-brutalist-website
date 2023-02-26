import React from 'react'

const Panel = ({ title, description, image }: { title: string; description: string; image: string }) => {
    return (
        <div>
            {/* <img className='panelImage' /> */}
            <h2>{title}</h2>
            <p className='bodytext'>{description}</p>
        </div>
    )
}

export default Panel