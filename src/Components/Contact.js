import React from 'react';

const axios = require('axios').default;
            
function Contact() {
   const [phone, setPhone] = React.useState('')
   const [street, setStreet] = React.useState('')
   const [web, setWeb] = React.useState('')
   const [name, setName] = React.useState('')
   const [email, setEmail] = React.useState('')
   const [sdt, setSdt] = React.useState('')
   const [content, setContent] = React.useState('')
   const [sendData, setSendData] = React.useState(null)

   function handleSubmit(event) {
      event.preventDefault()
      if (!name || !sdt) {
         alert("Bạn không được để trống tên hoặc số điện thoại!")
         return
      }
      setSendData(false)
      axios({
         method: "post",
         url: "https://jscserveremail.herokuapp.com/email",
         data: { name, email, sdt, content }
      }).then(res => setSendData(true))
         .catch(error => setSendData(false))
   }

   React.useEffect(() => {
      axios({
         method: 'get',
         url: '/resumeData.json'
      }).then(res => {
         setPhone(res.data.main.phone)
         setStreet(res.data.main.address.street)
         setWeb(res.data.main.name)
      }).catch(err => console.log(err))

   }, [])

   return (
      <section id="contact">

         <div className="row section-head">
            <div className="ten columns">
               <p style={{ textAlign: "center" }} className="lead">Thông tin liên hệ chi tiết.</p>
            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form onSubmit={handleSubmit} id="contactForm" name="contactForm">
                  <fieldset>

                     <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input type="text" value={name} size="35" id="contactName" name="contactName" onChange={event => setName(event.target.value)} />
                     </div>

                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="text" value={email} size="35" id="contactEmail" name="contactEmail" onChange={event => setEmail(event.target.value)} />
                     </div>

                     <div>
                        <label htmlFor="contactSubject">Số điện thoại <span className="required">*</span></label>
                        <input type="text" value={sdt} size="35" id="contactSubject" name="contactSubject" onChange={event => setSdt(event.target.value)} />
                     </div>

                     <div>
                        <label htmlFor="contactMessage">Tin nhắn <span className="required">*</span></label>
                        <textarea onChange={event => setContent(event.target.value)} cols="50" rows="15" id="contactMessage" name="contactMessage" value={content}></textarea>
                     </div>
                     <div className='abc'>
                        {sendData === false && <img alt="load..." width="70px" height="20px" src="images/loader.gif" />}
                        <br />
                        {sendData === true && <div><i className="fa fa-check"></i>Tin nhắn đã được gửi, cảm ơn bạn đã phản hồi!<br /></div>}
                     </div>
                     <button className="submittt" type="submit">Gửi</button>

                  </fieldset>
               </form>
            </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

                  <h4>Address and Phone</h4>
                  <p className="address">
                     {web}<br />
                     {street} <br />
                     <span>{phone}</span>
                  </p>
               </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title">Webhiendai.net</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                           Webhiendai.net được phát triên bời những lập trình viên có nhiều kinh nghiệm phát triển web, công nghệ sử dụng hiện đại nhất hiện nay, tốc độ truyền tải siêu nhanh. Bảo hành web trọn đời, hỗ trợ trực tuyến 24/7,trọn gọi hosting và tên miền,phạm vi hoạt động toàn quốc, giá đảm bảo rẻ hơn 3-4 triệu so với thị trường.
                           <br />
                           <a href="https://www.facebook.com/Webhiendai.net0982839405/">Facebook</a>
                        </span>
                     </li>
                  </ul>
               </div>
            </aside>
         </div>
      </section>
   );
}


export default Contact;
