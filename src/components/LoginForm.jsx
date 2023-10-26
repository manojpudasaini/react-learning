import Styles from "../styles/loginForm.module.css";

const LoginForm = () => {
  return (
    <form className={Styles.form_container}>
      <h2 className={Styles.form_header}>Login</h2>
      <input
        type="email"
        placeholder="Enter email"
        required
        className={Styles.text_input}
      />
      <input
        type="password"
        placeholder="Enter password"
        required
        className={Styles.text_input}
      />
      <button type="submit" className={Styles.submit_button}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
