import styles from './Tags.module.css';

export default function Tag({ id, tag, setActive }) {
    const item = tag.isActive ? 
        <li className={ styles.active } title={ tag.title }>{ tag.title }</li> :
        <li onClick={ (ev) => setActive(ev, id) }>
            <a 
                href={ tag.href } 
                title={ tag.title }
            >{ tag.title }</a>
        </li>;
    return (
        item
    );
}