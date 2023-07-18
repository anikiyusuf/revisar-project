import Images from "./images";
import { journals } from "../dummyData"
import { useState } from "react"

const ImageGrid = () => {
    const [items] = useState(journals)

    return (
        <>
        <Images items={items} />
        </>
    )
}

export default ImageGrid