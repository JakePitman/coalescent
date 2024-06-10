export const ContactData = () => (
  <div>
    <form action="https://formspree.io/f/xbjnnjaq" method="POST">
      <label>
        Your email:
        <input type="email" name="email" />
      </label>
      <label>
        Your message:
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  </div>
);
