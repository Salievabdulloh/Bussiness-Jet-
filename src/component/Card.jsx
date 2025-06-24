import arrow from '../assets/arrow.png'

const Card = ({ title, desc, img }) => {
    return (
        <div className="flex flex-col items-center md:flex-row md:items-start gap-[30px]">
            <img src={img} />
            <div className="flex md:items-start items-center flex-col md:text-start text-center">
                <p className='font-medium'>{title}</p>
                <p className='py-3 text-[14px] font-medium'>{desc}</p>
                <button className='border-[#FE9A4C] mt-5 flex items-center gap-[10px] rounded-[10px] px-4 py-2 border-1'>Подробнее<img src={arrow} /></button>
            </div>
        </div>
    )
}

export default Card
