
const Contact = () => {
  return (
    <div className="contact" >
      <div className="contactTop">
        <h1>Contact</h1>
      </div>
      <div className="contactCenter">
        <div className="contactIcons">
          <div className="contactIcon">
            <i className="fa fa-telegram"></i>
            <i className="fa fa-instagram" ></i>
            <i className="fa fa-phone-square" ></i>
            <i className="fa fa-location-arrow" ></i>
            <i className="fa fa-address-book" ></i>
            <i className="fa fa-twitter" ></i>
          </div>
          <div className="contactText">
            <p>t.meLocation</p>
            <p>instagram</p>
            <p>+998999999999</p>
            <p>It Center</p>
            <p>It Center</p>
            <p>Twitter</p>
          </div>
        </div>
        <div className="form">
          <div className="forms">
            <label>
              <span>Your Phone</span>
              <input type="text" />
            </label>
            <label>
              <span>Your Name</span>
              <input type="text" />
            </label>
            <label>
              <span>Your Telegram</span>
              <input type="text" />
            </label>
            <div>
            <button>Send <i className="fa fa-paper-plane-o" ></i></button>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d756.6146978994271!2d70.91778124950719!3d40.53401300466342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1708251558801!5m2!1suz!2s"
            width="100%" height="300" style={{ border: 0, }} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact