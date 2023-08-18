import "./contact_us.scss";

const ContactUs = () => {
  return (
    <div className="contact_us_wrapper">
      <div className="select_info_wrapper">
        <div>
          <h3>Կապ</h3>
          <input type="text" placeholder="Անուն Ազգանուն" />
          <input type="email" placeholder="ԷԼ. ՓՈՍՏ" />
          <input type="text" placeholder="Հեռախոսահամար" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="ՀԱՂՈՐԴԱԳՐՈՒԹՅՈՒՆ"
          ></textarea>
          <button>
            Ուղարկել <img src="" alt="" />
          </button>
        </div>
        <div className="line"></div>
        <div className="info_in_door">
          <p>info@idoors.am </p>
          <p>Նար-Դոս 36/19 (խանութ սրահ)</p>
          <p>Խաղաղ Դոնի 1/9 (Արտադրամաս)</p>
          <p>+374 93 10 00 12</p>
          <p>+374 33 01 00 12</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ContactUs;
