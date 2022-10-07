const FormInput = ({}) => {
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default FormInput;
