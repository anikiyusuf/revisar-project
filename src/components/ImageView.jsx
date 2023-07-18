

// eslint-disable-next-line react/prop-types, no-unused-vars
const ImageView = ({ item: { id ,title,svg,   image , by , date }}) => {

    return (
        <>
            <div>
                 <div className="title">
                     <h3 className="uppercase inline-block mb-4 ">{title} <span className="inline-block"> <img src={svg} alt=''/></span></h3>
                     </div>
                     <img src={image} alt=''  className="w-70 mb-3"/>
                     <p>Submitted by: <span className="text-black dark:text-white  text-base font-medium leading-normal tracking-wider">{by}</span></p>
                     <p>Date: <span className="text-black dark:text-white text-base font-medium leading-normal tracking-wider">{date}</span></p>
            </div>
        </>
    )
}

export default ImageView