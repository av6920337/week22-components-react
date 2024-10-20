export default function HeroesItem({name, universe, alterego, occupation, friends, superpowers, url, info}) {
    return <section className='sectionHero'>
    <h2 className='title'>{name}</h2>
    <div className='blockForInfo'>
        <p className="item">
            <span className="bold">Вселенная:</span> {universe}</p>
        <p className="item">
            <span className="bold">Альтер эго:</span> {alterego}</p>
        <p className="item">
            <span className="bold">Род деятельности:</span> {occupation}</p>
        <p className="item">
            <span className="bold">Друзья:</span> {friends}</p>
        <p className="item">
            <span className="bold">Суперсилы:</span> {superpowers}</p>
        <img src={url} alt={name} className='item'/>
        <p className='infoText'>{info}</p>
    </div>
</section>
}

{/* <div className="star-rating" data-hero-index="${index}">
        <span className="star" data-value="1"></span>
        <span className="star" data-value="2"></span>
        <span className="star" data-value="3"></span>
        <span className="star" data-value="4"></span>
        <span className="star" data-value="5"></span>
    </div> */}