import React, {useState} from 'react';
import axios from "axios";

const Contact = () => {

    const [input, setInput] = useState({})

    const [errors, setErrors] = useState([]);
    const handleInput = (e) => {
        setInput(prevState => ({...prevState, [e.target.name]: e.target.value}))
        console.log(input)
    }

    const handleSubmit = () => {
      axios.post('http://localhost:8000', input).then(res=>{

      }).catch(errors => {
          if (errors.response.status == 422) {
              setErrors(errors.response.datasetErrors.errors)
          }
      })
    }

    const handleImageInput = (e) => {
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.onloadend = () => {
            setInput(prevState => ({...prevState, [e.target.name]: reader.result}))
        }
        reader.readAsDataURL(file)
    }

    return (
        <div className='container my-5'>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Contact Us</h4>
                        </div>
                        <div className="card-body">
                            <label className={'w-100  my-2'}>
                                <span>Name</span>
                                <input
                                    type={'text'}
                                    className={errors.name != undefined ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'}
                                    placeholder={'Enter your name'}
                                    name={'name'}
                                    value={input.name}
                                    onChange={handleInput}
                                />
                                {errors.title != undefined ? <p className={'error-message'}><small><i className="fas fa-exclamation-triangle"/>{errors.title[0]}</small></p> : null}
                            </label>
                            <label className={'w-100 my-2'}>
                                <span>Email</span>
                                <input
                                    type={'email'}
                                    className={'form-control'}
                                    placeholder={'Enter your email'}
                                    name={'email'}
                                    value={input.email}
                                    onChange={handleInput}
                                />
                            </label><label className={'w-100 my-2'}>
                            <span>Select Topic</span>
                            <select
                                className={'form-select'}
                                name={'topic_id'}
                                value={input.topic_id}
                                onChange={handleInput}
                            >
                                <option value={1}>Technical</option>
                                <option value={2}>Accounts</option>
                                <option value={3}>Refund</option>
                            </select>
                        </label>
                            <label className={'w-100 my-2'}>
                                <span>Subject</span>
                                <input
                                    type={'text'}
                                    className={'form-control'}
                                    placeholder={'Enter your subject'}
                                    name={'subject'}
                                    value={input.subject}
                                    onChange={handleInput}
                                />
                            </label>
                            <label className={'w-100 my-2'}>
                                <span>Message</span>
                                <textarea
                                    className={'form-control'}
                                    placeholder={'Enter your message'}
                                    name={'message'}
                                    value={input.message}
                                    onChange={handleInput}
                                />
                            </label>

                            <label className={'w-100 my-2'}>
                                <span>Attachment</span>
                                <input type='file'
                                       className={'form-control'}
                                       name={'attachment'}
                                       onChange={handleImageInput}
                                />
                            </label>

                            <button onClick={handleSubmit} className={'btn btn-outline-info my-2'}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
