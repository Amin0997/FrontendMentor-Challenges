import './Card.scss'


function Card({text, author, authorPost, authorImage}) {
    return (
        <div className="card__container flex justify-center items-center p-36 text-por bg-white rounded-lg absolute">
            <div className="card__text-section -mr-24 z-50">
                <p className="card__text text-2xl font-light w-11/12 opacity-80">
                    {text}
                </p>

                <p className="card__text_author mt-10 font-bold text-base">
                    {author} <span className='text-slate-400 font-normal'>{authorPost}</span>
                </p>
            </div>

            <div className="card__img-and-buttons-section flex h-full justify-end">
                <img className='rounded-md shadow-2xl' src={authorImage} alt=""/>
            </div>

        </div>
    )
}

export default Card
