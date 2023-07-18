/* eslint-disable react/prop-types */
import ImageView from "./ImageView"


// eslint-disable-next-line react/prop-types
const Images = ({ items }) => {
    return (
        <>
          <div className="justify-center mt-12">
           <div className="font-normal text-[500] text-[32px] ml-20 mb-8">Journals </div>
          <div className="imageContainer flex justify-center gap-3 p-1">
              {items.map((item) => {
                        return(
                            <>
                            <ImageView key={item.id} item={item}/>
                            </>
                        )
                    })

                    }
          </div>
          </div>
        </>
    )


}
export default Images