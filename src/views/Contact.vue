<template>
  <section id="contact">
    <div class="row">
      <div class="col-md-6">
        <h1 class="heading2">Contact Us</h1>
        <form action="https://formspree.io/f/xvolwzda" method="POST">
          <div class="user-box my-3">
            <input class="input" type="email" name="email" required />
            <label>Email</label>
          </div>
          <div class="user-box my-3">
            <input class="input" type="subject" name="subject" required />
            <label>Subject</label>
          </div>
          <div class="user-box my-3">
            <input class="input" type="message" name="message" required />
            <label>Message</label>
          </div>
          <!-- your other form fields go here -->
          <button type="submit">Send</button>
        </form>
      </div>
      <div class="col-md-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.2674197088063!2d18.490509915594316!3d-33.98566428062414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bedd50e81%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1657287963522!5m2!1sen!2sza"
          width="550"
          height="450"
          style="border: 0; padding: 2rem"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div class="direct-contact-container">
      <ul class="contact-list">
        <li class="list-item">
          <i class="fa fa-map-marker"></i
          ><span class="contact-text place">Cape Town, South Africa</span>
        </li>

        <li class="list-item">
          <i class="fa fa-phone"></i
          ><span class="contact-text phone"
            ><a href="tel:+21-666-6969" title="Give us a call"
              >(+27) 69 420 960
            </a></span
          >
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
#contact {
  min-height: 100vh;
  background: rgb(27, 27, 27);
  padding-top: 8rem;
  overflow-x: hidden;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.form-control {
  width: 100%;
}

.heading {
  color: white;
  font-weight: 500px;
  font-size: 5rem;
}
form {
  max-width: 420px;
  margin: 50px auto;
  padding-top: 0.6rem;
  padding-bottom: 2rem;
}
.row {
  display: flex;
}

.col-4 {
  flex: 50%;
}
@media screen and (max-width: 1060px) {
  .row {
    display: flex;
    flex-direction: column;
  }
}
.container {
  /* background-color: #ececec71;*/
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: fit-content;
  margin: 5rem;
  padding: 2rem;
}

iframe {
  filter: invert();
}
.feedback-input {
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-size: 16px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border-bottom: 1px solid #ffffff;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
}

.feedback-input:focus {
  border: 1px solid #3d3d3d;
}

textarea {
  height: 150px;
  line-height: 150%;
  resize: vertical;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  color: rgb(255, 255, 255);
}

.contact-text {
  color: rgb(255, 255, 255);
}

.place {
  margin-left: 1.2rem;
  font-size: 1.1rem;
}

.phone {
  margin-left: 1.2rem;
  font-size: 1.1rem;
}

.gmail {
  margin-left: 1.2rem;
  font-size: 1.1rem;
}

.contact-text a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: rgb(97, 97, 97);
  text-decoration: none;
}

/* Social Media Icons */
.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.social-media-list li a {
  color: #fff;
}

.social-media-list li {
  position: relative;
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(27, 27, 27);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.social-media-list li:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px #fff;
  transition: all 0.2s ease-in-out;
}

.social-media-list li:hover {
  background-color: rgb(196, 196, 196);
}

.social-media-list li:hover:after {
  opacity: 1;
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
}

.social-media-list li:hover a {
  color: #000;
}

.copyright {
  color: rgb(56, 56, 56);
  letter-spacing: 1px;
  text-align: center;
}

hr {
  border-color: rgba(255, 255, 255, 0.6);
}

iframe {
  padding-bottom: 5px;
  /* width: auto; */
}

@media screen and (max-width: 607px) {
  iframe {
    width: auto;
    /* height: 400px; */
  }
}
@media screen and (max-width: 838px) {
  form {
    padding-left: 50px;
  }
}

.user-box {
  position: relative;
}

.user-box input {
  width: 90%;
  padding: 10px 0;
  padding-left: 1rem;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  padding-left: 4rem;
  font-size: 1.1rem;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.user-box input:focus ~ label,
.user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #9967cc;
  font-size: 1rem;
}
</style>
