import { CheckCircleIcon, ChevronDownIcon, ChevronRightIcon, InformationCircleIcon } from "@heroicons/react/24/outline"
import { options, pathing } from "../utils/constant"

const MainSection = () => {
    return (
        <div className="top-section">
            <h1>Best Website builders in the US</h1>

            <div className="first-section">
                <div>
                    <p>
                        <CheckCircleIcon className="icons" />
                        Last Update - February 26, 2020
                    </p>
                    <p>
                        <InformationCircleIcon className="icons" />
                        Advertising Disclosure
                    </p>
                </div>
                <div>
                    <p>
                        Top Relevant
                        <ChevronDownIcon className="icons" />
                    </p>
                </div>
            </div>

            <div className="second-section">
                {options.map((o) => (
                    <p>{o}</p>
                ))}
            </div>

            <div className="third-section">
                {pathing.map((p, i) => (
                    <>
                        <p>{p}</p>
                        {pathing.length - 1 !== i && <ChevronRightIcon className="icons" />}
                    </>
                ))}
            </div>

        </div>
    )
}

export default MainSection
