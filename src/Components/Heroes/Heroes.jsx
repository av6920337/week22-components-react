import heroes from '../../data/heroes.json';
import HeroesItem from '../HeroesItem/HeroesItem';

export default function Heroes(){
    return (
    <div className='main'>
        {heroes.map((item, index) => {
        return <HeroesItem key = {index} {...item}/>
    })}
    </div>
    );
} 