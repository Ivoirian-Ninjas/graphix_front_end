import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import Select from 'react-select'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/contact.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ReactGA from 'react-ga';
import gmailIcon from '../imgs/iconImage/icons8-mails-100.png'

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
           
            emailjs.sendForm('gmail', process.env.REACT_APP_EMAIL_TEMPLATE_ID, event.target, process.env.REACT_APP_EMAIL_USER_ID)
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
                // react event fired
                ReactGA.event({
                    category: "User submited form (Lead Capture)",
                    action: "User sent a lead capture form",
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
    

   componentDidMount(){
       const id = process.env.REACT_APP_GOOGLE_ID
       ReactGA.initialize(id);
       ReactGA.set({ page: window.location.pathname }); // Update the user's current page
       ReactGA.pageview(window.location.pathname); // Record a pageview for the given page

   }



    render() {
     


      const customStyles = {
        option: (provided, state) => ({
          ...provided,
          width: "98%",       
        }),
        control: (provided,state) => ({
            ...provided,
          width: "98%",
          height: "50px",
          border: "none",
          background :'rgb(245, 245, 245)',
          margin:'2% 0',
        })
    }
        return (
            <div className='divContact'>
                {/* Do not modify the code shown in Helmet. This is for the backend */}
                <Helmet>
                    <title>Graphix CK Contact Page Develop Affordable Web And Mobile Design Contact Us</title>
                    <meta name="description" content="Contact Graphix for your projects. We will be happy to help get one step closer to success." />
                </Helmet>

                {/* The ToastContainer is for the notification. There is no need to add CSS. */}
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
                <div className='divEmailUs'>
                    <div>
                        <span className='contactUs'>Contact us</span>
                        <p className='textContactUs'>Graphix CK Contact Page Develop Affordable Web And Mobile Design</p>
                        <a href="mailto:info@graphix-ck.com" target="blank" className='mailContact'>
                            <img src={gmailIcon} alt='icon' className='gmailIcon' />
                            info@graphix-ck.com
                        </a>
                    </div>
                </div>
               
                <div className='divFormContact'>
                    <p className='getInTouch'>
                        Get in Touch
                    </p>
                    <p className='titleContactText'>
                        Please fill out the form below and let us know how we can best assit you.
                    </p>
                    <form onSubmit={this.handle_submit}>
                        <div className='userInfoContact'>
                            <div className='divFirstInfo'>
                                <input name='firstName' placeholder='Frist Name' value={this.state.firstName}  onChange={this.handle_change} className={`${this.state.error_firstName && 'error' } inputContact`}/>
                            </div>
                            <div className='divFirstInfo'>
                                <input name='lastName' placeholder='Last Name' value={this.state.lastName} onChange={this.handle_change} className={`${this.state.error_lastName && 'error'} inputContact`}/>
                            </div>
                            <div className='div2ndInfo'>
                                <input type='email' placeholder='username@mail.com' name='email' value={this.state.email} onChange={this.handle_change} className={ `${this.state.error_email && 'error'}  inputContact`}/>
                            </div>
                        </div>
                        {/* Leave the budget at this position */}
                        <div className='userInfoContact' >
                            {/* Go to: https://react-select.com/home#custom-styles in order to add some styling*/}
                            <Select 

                                className={`${this.state.error_budget && 'error'} basic-single`}
                                options={this.options} 
                                onChange={this.handle_select} 
                                name="budget"
                                value={this.state.budget}
                                placeholder ="What is your approximate budget?"

                                // Modify CSS with those value below
                                styles={customStyles}
                                theme={theme => ({
                                    ...theme,
                                    borderRadius: 5,
                                    colors: {
                                      ...theme.colors,
                                      primary50: 'rgb(139, 166, 238)',
                                      primary: 'rgb(74, 119, 243)',
                                    }
                                })}
                            />
                        </div>
                      
                        <div className='userInfoContact'>
                            <textarea 
                             name='help' 
                             value={this.state.help} 
                             placeholder='How can we help? *'
                             onChange={this.handle_change}
                             className={`${this.state.error_help && 'error'} areaContact`}
                             >
                            </textarea>
                        </div>
                      
                        <div className='userInfoContact'>
                            <label className='phoneContact'>Phone:</label>
                            <PhoneInput
                                name="phone"
                                country={'us'}
                                value={this.state.phone}
                                onChange={phone => this.setState({phone})}
                                inputClass={`${this.state.error_phone && 'error'} `}
                                enableSearch={true}
                                enableLongNumbers={true}
                                inputProps={{
                                name: 'phone'
                                }}
                                // Use this to add style to the phone input
                                // containerClass="my-container-class"
                                // inputClass="my-input-class"
                                // containerStyle={{
                                //     border: "10px solid black"
                                // }}
                                inputStyle={{
                                    background: "rgb(245, 245, 245)",
                                    width: "98%",
                                    border:'none',
                                    height:'40px',
                                }}
                              
                             
                                 disableDropdown	
                            />
                        </div>
          

                        <button className='SendContactForm'> 
                           <i className='fa fa-paper-plane'></i> Send 
                        </button>

                    </form>
                </div>

            </div>
        )
    }
}
