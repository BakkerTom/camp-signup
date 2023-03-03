import {Formik} from "formik";
import {useCallback} from "react";

export default function Form() {
  const onSubmit = useCallback((values) => {
    console.log(values)
  }, [])

  return (
    <Formik initialValues={{ name: '', email: '', phoneNumber: '' }} onSubmit={onSubmit}>
      {props => (
        <form onSubmit={props.handleSubmit}>
          <div className="">
            <label className='block'>Naam</label>
            <input 
              type='text' 
              className="bg-slate-700 py-4 px-6 rounded-md" 
              value={props.values.name} 
              onChange={props.handleChange} 
              name='name' 
            />
          </div>
          <div className="">
            <label className='block'>E-mail</label>
            <input 
              type='text' 
              className="text-gray-800" 
              value={props.values.email} 
              onChange={props.handleChange} 
              name='email' 
            />
          </div>
          <div className="">
            <label className='block'>Telefoon</label>
            <input 
              type='text' 
              className="text-gray-800" 
              value={props.values.phoneNumber} 
              onChange={props.handleChange} 
              name='phoneNumber' 
            />
          </div>
          <button type='submit'>Aanmelden</button>
        </form>
      )}
    </Formik>
  )
}
