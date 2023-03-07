import texture1 from './gfx/texture1.png';
import texture2 from './gfx/texture2.png';

import image1 from './gfx/image1.png';
import image2 from './gfx/image2.png';
import image3 from './gfx/image3.png';
import image4 from './gfx/image4.png';

import hotelforum from './gfx/hotelforum.png';
import thenationaltheatre from './gfx/thenationaltheatre.png';
import embassyofczechoslovakia from './gfx/embassyofczechoslovakia.png';

export const CONTENT = {
    header: {
        title: 'Brutalism',
        navigation: [
            { title: 'about', href: '#' },
            { title: 'linkedin', href: 'https://www.linkedin.com/in/jakub-zieli%C5%84ski-750747243/' },
            { title: 'github', href: 'https://github.com/jzielinski47' },
        ],
    },
    hero: {
        title: 'Brutalism',
        description: 'Discover the Beauty of Brutalism: Embrace a Bold New Way of Seeing!',
        panels: [
            {
                title: 'What is Brutalism',
                description: 'Brutalism is an architectural style that emerged in the 1950s and flourished in the 1960s and 1970s. It is characterized by the use of exposed raw concrete and steel, angular forms and geometric shapes, and a focus on functionality rather than aesthetics. The term “Brutalism” is derived from the French phrase “béton brut”, which means “raw concrete”.',
                image: texture1
            },
            {
                title: 'Origins',
                description: 'Brutalism is a style of architecture that first emerged in the mid-twentieth century as a reaction against the sleek modernism of the International Style. It was initially associated with the works of Le Corbusier, who was one of the pioneers of the style. However, the term “Brutalism” was actually coined by British architects Alison and Peter Smithson in 1953. ',
                image: texture2
            }
        ],
    },
    sections: [
        {
            title: 'Key elements',
            description: 'The key elements of Brutalism include large, modular forms; plain surfaces; and the predominance of exposed concrete, which is often used in bold geometric shapes. Other materials such as brick, steel, and glass may also be used.',
            image: image1
        },
        {
            title: 'World war influence',
            description: 'Europe was heavily affected by World War II and its architecture was greatly impacted. Many cities and towns across Europe were destroyed or heavily damaged from bombing and warfare. In the immediate aftermath of the war, Europe saw a drastic change in its architecture. Cities had to rebuild and many temporary structures were built in place of the destroyed buildings.',
            image: image2
        },
        {
            title: 'Post war era',
            description: 'Brutalism was popular in post-war Europe, and is still used today for public and institutional buildings. It is often used for educational, governmental, and religious buildings, as it conveys a sense of solidity and permanence. It is also gaining popularity in residential architecture, as homeowners appreciate its modern, minimalist aesthetic.',
            image: image3
        },
        {
            title: 'Web Brutalism',
            description: 'Web Brutalism is a relatively new trend in web design that has been gaining traction in recent years. This style of design is characterized by its rough, raw aesthetic with heavy use of text, basic shapes, and a minimalistic approach. Web Brutalism eschews the sleek, polished look of modern web design in favor of a more edgy and industrial feel.',
            image: image4
        }
    ],
    examples: [
        {
            title: 'Hotel forum, Krakow',
            description: 'Construction of the hotel was relied on the project by Janusz Ingarden began in 1978 and lasted for over 10 years. The official opening took place in 1989. At the time, it was one of the most modern buildings in Krakow. The hotel had four stars and was incorporated into the IHG hotel system. It had 278 rooms, including 19 single rooms and 15 apartments, and was fully air-conditioned. Inside, there were 2 restaurants, a grill bar and a drink bar. The hotel had, among others, a photocell door, automatic flush in the toilet, and an electronic outdoor clock with a thermometer and calendar.',
            image: hotelforum
        },
        {
            title: 'The National Theatre, London',
            description: 'Europe was heavily affected by World War II and its architecture was greatly impacted. Many cities and towns across Europe were destroyed or heavily damaged from bombing and warfare. In the immediate aftermath of the war, Europe saw a drastic change in its architecture. Cities had to rebuild and many temporary structures were built in place of the destroyed buildings.',
            image: thenationaltheatre
        },
        {
            title: 'Embassy of Czechoslovakia, Berlin',
            description: 'Europe was heavily affected by World War II and its architecture was greatly impacted. Many cities and towns across Europe were destroyed or heavily damaged from bombing and warfare. In the immediate aftermath of the war, Europe saw a drastic change in its architecture. Cities had to rebuild and many temporary structures were built in place of the destroyed buildings.',
            image: embassyofczechoslovakia
        },
    ],
    footer: {
        content: 'Jakub Zieliński © 2023'
    }
}

