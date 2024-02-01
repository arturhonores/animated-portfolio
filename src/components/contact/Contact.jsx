import "./contact.scss"

const Contact = () => {
    return (
        <div className="contact">
            <div className="textContainer">
                <h1>Let´s work together</h1>
                <div className="item">
                    <h2>Mail</h2>
                    <span>Hello@react.dev</span>
                </div>
                <div className="item">
                    <h2>Addres</h2>
                    <span>Hello street Madrid</span>
                </div>
                <div className="item">
                    <h2>Phone</h2>
                    <span>+34 123456789</span>
                </div>
            </div>
            <div className="formContainer">
                <form>
                    <input type="text" required placeholder="Name" />
                    <input type="email" required placeholder="Email" />
                    <textarea rows="8" placeholder="Message"></textarea>
                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact