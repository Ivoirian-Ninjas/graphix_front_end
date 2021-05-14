import React, { Component } from 'react'
import Select from 'react-select'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default class contact extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        budget: "",
        help: "",
        error_firstName: false,
        error_lastName: false,
        error_email: false,
        error_budget: false,
        error_phone: false,
        error_help: false

    }
     options = [
        { value: "$0 - $5,000", label: "$0 - $5,000"},
        { value: "$5,000 - $10,000", label: "$5,000 - $10,000" },
        { value: "$10,000 - $15,000", label: "$10,000 - $15,000" },
        { value: "$15,000 +", label: "$15,000 +" }
      ]

    resetForm = () => {
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            budget: {value: "", label: ""},
            help: "",
            error_firstName: false,
            error_lastName: false,
            error_email: false,
            error_budget: false,
            error_phone: false,
            error_help: false

        })

    }

    

  

   

    handle_change = (event)=> this.setState({[event.target.name]: event.target.value})
    handle_select = (event) => this.setState({budget: {value: event.value,label: event.label}})
    

    handle_submit = (event) => {
        event.preventDefault()
        if(this.validate_form()){
           
            emailjs.sendForm('gmail', 'template_keokgzb', event.target, 'user_8ciVfWI2vuQXQWhN3imHh')
            .then((result) => {
                toast.success('We received your message', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                this.resetForm()
            }, (error) => {
                console.log(error.text);
            });
        }else{

            toast.error('Please make sure you fill out all the information', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            this.state.firstName === "" && this.setState({error_firstName: true})
            this.state.lastName === "" && this.setState({error_lastName: true})
            this.state.email === "" && this.setState({error_email: true})
            this.state.phone === "" && this.setState({error_phone: true})
            this.state.budget === "" && this.setState({error_budget: true})
            this.state.help === "" && this.setState({error_help: true})

        }
      
      
    }

    validate_form =() => !(this.state.firstName === "" || this.state.lastName === "" || this.state.email === "" || this.state.phone ==="" || this.state.budget.value  === "" || this.state.help === "")
    





    render() {
        return (
            <div className="homeDiv">
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
               <div>
                    <p>
                        Please fill out the form below and let us know how we can best assit you.
                    </p>
                </div> 

                <div>
                    <p>
                        Email us at
                    </p>
                    <a href="mailto:info@graphix-ck.com" target="blank">
                        info@graphix-ck.com
                    </a>
                </div>
               
                <div>
                    <form onSubmit={this.handle_submit}>
                        <div>
                            <div>
                                <label>Frist Name: *</label>
                                <input name='firstName' value={this.state.firstName}  onChange={this.handle_change} className={`${this.state.error_firstName && 'error' } `}/>
                            </div>
                            <div>
                                <label>Last Name: *</label>
                                <input name='lastName' value={this.state.lastName} onChange={this.handle_change} className={`${this.state.error_lastName && 'error'} `}/>
                            </div>
                            <div>
                                <label>Email: *</label>
                                <input type='email' name='email' value={this.state.email} onChange={this.handle_change} className={ `${this.state.error_email && 'error'}  `}/>
                            </div>
                            <div>
                                <label>Phone: *</label>
                                <PhoneInput
                                    name="phone"
                                    country={'us'}
                                    value={this.state.phone}
                                    onChange={phone => this.setState({phone})}
                                    className={`${this.state.error_phone && 'error'} `}
                                    enableSearch={true}
                                    enableLongNumbers={true}
                                    inputProps={{
                                        name: 'phone'
                                    }}
                                />
                            </div>
                             

                        </div>

                        <div>
                            <label htmlFor="budget-select">What is your approximate budget? *</label>
                            {/* Go to: https://react-select.com/home#custom-styles in order to add some styling*/}
                            <Select 
                                className={`${this.state.error_budget && 'error'} `}
                                options={this.options} 
                                onChange={this.handle_select} 
                                name="budget"
                                value={this.state.budget}
                                placeholder ="Please choose an option"
                            />
                        </div>

                        <div>
                            <label>How can we help? *</label>
                            <textarea 
                             name='help' 
                             value={this.state.help} 
                             onChange={this.handle_change}
                             className={`${this.state.error_help && 'error'} `}
                             >
                            </textarea>
                        </div>

                        <button> Send </button>

                    </form>
                </div>

                
            </div>
        )
    }
}
