import React from 'react';
import { Icon } from 'react-icons-kit'
import {stop} from 'react-icons-kit/metrize/music'
import {pause} from 'react-icons-kit/metrize/music'
import {prevStep} from 'react-icons-kit/metrize/music'



const buttons = () => {
    return(
        <React.Fragment>
            <div style={{ color: '#7C7C7D' }}>
            <Icon size={35} icon={pause} />
            </div>
            <div style={{ color: '#7C7C7D', margin:'20px' }}>
            <Icon size={35} icon={stop} />
            </div>
            <div style={{ color: '#7C7C7D' }}>
            <Icon size={35} icon={prevStep} />
            </div>
        </React.Fragment>
    )
}

export default buttons;

