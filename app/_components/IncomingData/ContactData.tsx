export const ContactData = () => (
  <div>
    <form action="https://formspree.io/f/xbjnnjaq" method="POST">
      <label className="block pb-3">
        <p className="pb-1">Your email:</p>
        <input
          type="email"
          name="email"
          className="border-sky-700 border-2 rounded bg-sky-950 w-full"
        />
      </label>
      <label className="block pb-3">
        <p className="pb-1">Your message:</p>
        <textarea
          name="message"
          className="border-sky-700 border-2 rounded bg-sky-950 w-full h-60"
        ></textarea>
      </label>
      <button
        type="submit"
        className="border-2 rounded border-sky-500 px-3 py-1 hover:bg-sky-500 hover:text-sky-950 transition-all"
      >
        Send
      </button>
    </form>
  </div>
);
