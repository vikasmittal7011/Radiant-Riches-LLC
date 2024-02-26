import { ChevronDownIcon } from "@heroicons/react/24/outline"

const Footer = () => {
    return (
        <div className="footer">

            <div className="links">
                <div>
                    <h2>Categories</h2>
                    <p>Web Builder</p>
                    <p>Hosting</p>
                    <p>Data Center</p>
                    <p>Robotic-Automation</p>
                </div>

                <div>
                    <h2>Contact</h2>
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Service</p>
                    <p>Categories</p>
                    <p>About</p>
                </div>
            </div>

            <div>
                <p>United States  <ChevronDownIcon className="icon" /></p>

            </div>
        </div>
    )
}

export default Footer
