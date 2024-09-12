const SignUpComponent = () => {
  return (
    <>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        placeholder="Please Enter First Name"
      ></input>

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        placeholder="Please Enter Last Name"
      ></input>

      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Please Enter Username"
      ></input>

      <label htmlFor="number">Number</label>
      <input
        type="text"
        id="number"
        placeholder="Please Enter Mobile Number"
      ></input>

      <label htmlFor="email">Email</label>
      <input type="text" id="email" placeholder="Please Enter Email"></input>

      <label htmlFor="password">Password</label>
      <input type="text" id="password" placeholder="Choose Password"></input>

      <label htmlFor="confirmPassword">Re-TypePassword</label>
      <input
        type="text"
        id="confirmPassword"
        placeholder="Re-Enter Password"
      ></input>
    </>
  );
};

export default SignUpComponent;
