import React, { createContext, useContext, useState } from 'react';
import logo1 from '../img/RAWSSAH LOGO-04.png'
import logo2 from '../img/LOGO HEMA NEW-49.png'
import logo3 from '../img/eva.jpg'
import logo4 from '../img/pv1.jpg'
import logo5 from '../img/saylin.jpg'
import logo6 from '../img/222.jpg'
import raw1 from '../img/rawssha1.jpg'
import raw2 from '../img/rawssha2.jpg'
import raw3 from '../img/rawssha3.jpg'
import raw4 from '../img/4.jpg'
import raw5 from '../img/5.jpg'
import raw7 from '../img/7.jpg'

const DataContext = createContext();

const data = [
    {
        id: 1,
        title: 'Rawssah Logo',
        description: 'This is the Rawssah logo.',
        image: logo1,
        MoreData: [
            {
                id: 1,
                title: 'Rawssah Image 1',
                description: 'This is an additional image of Rawssah.',
                image: raw1
            },
            {
                id: 2,
                title: 'Rawssah Image 2',
                description: 'This is another image of Rawssah.',
                image: raw2
            },
            {
                id: 3,
                title: 'Rawssah Image 3',
                description: 'Yet another image of Rawssah.',
                image: raw3
            },
            {
                id: 4,
                title: 'Rawssah Image 4',
                description: 'This is a fourth image of Rawssah.',
                image: raw4
            },
            {
                id: 5,
                title: 'Rawssah Image 5',
                description: 'This is a fifth image of Rawssah.',
                image: raw5
            },

            {
                id: 6,
                title: 'Rawssah Image 7',
                description: 'This is a seventh image of Rawssah.',
                image: raw7
            }
        ]
    },
    {
        id: 2,
        title: 'Hema Logo',
        description: 'This is the Hema logo.',
        image: logo2,
        MoreData: [{
            id: 1,
            title: 'alrokon',
            description: 'This is an additional image of alrokon.',
            image: logo6}
        ] 
    },
    {
        id: 3,
        title: 'Eva',
        description: 'This is Eva image.',
        image: logo3,
        MoreData: [] 
    },
    {
        id: 4,
        title: 'PV Image',
        description: 'This is the PV1 image.',
        image: logo4,
        MoreData: []
    },
    {
        id: 5,
        title: 'Saylin',
        description: 'This is Saylin image.',
        image: logo5,
        MoreData: [] 
    }
];

export const DataProvider = ({ children }) => {
    const [items] = useState(data);

    return (
        <DataContext.Provider value={items}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
