import { useState } from 'react';

const Form = () => {
  const [formState, setFormState] = useState({
    name: '',
    password: ''
  });

  const handleChange = event => {
    setFormState(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <>
      <div>
        {formState.name} {formState.password}
      </div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={formState.name} onChange={handleChange} />
        <input type='password' name='password' value={formState.password} onChange={handleChange} />
        <input type='submit' />
      </form>
    </>
  );
};

export default Form;
