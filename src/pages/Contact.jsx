export const Contact = () => {

  const handleFormSubmit =(formData)=>{
    const formInputData = Object.fromEntries(formData.entries())

    console.log(formInputData)
  }

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
            className="form-control"
          />

          <input
            type="email"
            required
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
            className="form-control"
          />

          <textarea
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter your message"
            name="message"
            className="form-control"
          />

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
