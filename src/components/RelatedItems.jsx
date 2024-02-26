import { item } from "../utils/constant"

const RelatedItems = () => {
    console.log(item.image)
    return (
        <>
            <p className="related-items-heading">Related deals you might like for</p>
            <div className="related-items">
                {[0, 1, 2].map((alt, i) => (
                    <div key={i}>
                        <img src={item.image} alt="" />
                        <div>
                            <p>{item.off}% Off</p> <p>{item.time}</p>
                        </div>
                        <h4>{item.heading}</h4>
                        <p className="text">{item.text}</p>

                        <div className="price">
                            <p>{item.pirce} <span>{item.basePrice} <span>({item.off}% Off)</span> </span></p>
                        </div>

                        <button>View Deal</button>

                    </div>
                ))}
            </div>s</>
    )
}

export default RelatedItems
