function Contact() {
  return (
    <main>
      <section className="contact-section">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">Have questions or want to reserve the latest tech? Drop us a message.</p>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Inquiry Type</label>
            <select id="subject" name="subject">
              <option value="general">General Question</option>
              <option value="preorder">Pre-Order Request</option>
              <option value="support">Technical Support</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="How can we help?"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;