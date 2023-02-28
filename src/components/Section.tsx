import React from 'react'

interface ISection { title: string; description: string; image: string; index: number; }

const Section = ({ title, description, image, index }: ISection) => {
    return (
        <div className='section' style={index % 2 == 0 ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }}>
            <div className='textWrapper'>
                <h2>{title}</h2>
                <p className='bodytext justified'>{description}</p>
            </div>
            <img src={image} />
        </div>
    )
}

export default Section