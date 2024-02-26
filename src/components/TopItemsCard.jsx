import { CheckIcon } from "@heroicons/react/24/outline"
import { mainItems, rating } from "../utils/constant"

const TopItemsCard = () => {
    return (
        <div className="top-card-item">
            {mainItems.map((item, i) => (
                <div className="card" key={i}>
                    <div className="left">
                        {
                            item.icon && <div className="main">
                                <p>{item.icon} {item.iconLabel}</p>
                            </div>
                        }
                        <p className="main2">{i + 1}</p>
                        <img src={item.image} alt="" />
                        <p>{item.imageLabel}</p>
                    </div>

                    <div className="middle">
                        <p> <span>{item.heading}</span> {item.info}</p>

                        <h4>Main highlights</h4>

                        <div className={`${item.highlights.length > 1 && "bg"}`}>
                            {item.highlights.map((hi, i) => {
                                const length = item.highlights.length
                                return length === 1 ?
                                    <p key={i}>{hi.text}</p> :
                                    <div>
                                        <span>{hi.number}</span> {hi.text}
                                    </div>
                            })}
                        </div>

                        <div className="loving">
                            <p className="heading">Why we love it</p>
                            {item?.loving?.map((lo, i) => (
                                <div>
                                    <CheckIcon className="icons" />
                                    <p key={i}>{lo.text}</p>
                                </div>
                            ))}
                        </div>

                        <p className="last-line">Show More</p>
                    </div>

                    <div className="right">
                        <div>
                            <p className="rating">{item.rating}</p>
                            <p className="text">{item.ratingName}</p>
                            {rating(item.rating)}
                        </div>

                        <button>View</button>
                    </div>


                </div>
            ))}
        </div>
    )
}

export default TopItemsCard
