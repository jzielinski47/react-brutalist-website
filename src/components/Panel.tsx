import React from 'react'

const Panel = ({ title, description, image }: { title: string; description: string; image: string }) => {
    return (
        <div className='panel'>
            <img src={image} />
            <h2>{title}</h2>
            <p className='bodytext justified'>{description}</p>
        </div>
    )
}

export default Panel