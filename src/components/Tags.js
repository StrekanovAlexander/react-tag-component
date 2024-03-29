import { useState } from 'react';
import { dataTags } from '../data/tags';
import Tag from './Tag';
import './Tags.module.css';

export default function Tags() {
    const [ tags, setTags ] = useState(dataTags);
    const setActive = (ev, id) => {
        ev.preventDefault();
        setTags(tags.map((el, ix) => {
            el.isActive = ix === id ? true : false;
            return el;
        }));
    }

    const items = tags.map((el, ix) => 
        <Tag 
            key={ ix } 
            id={ ix }
            tag={ el } 
            setActive={ setActive } />
    );
    return (
        <ul>{ items }</ul>
    );
}