import React from 'react'
import { Child } from './Child';

interface ParentProps {

}

export const Parent: React.FC<ParentProps> = ({}) => {
        return (<Child color = "blue" onClick={() => console.log("click")} >
            ghbhvgv
        </Child>);
}
