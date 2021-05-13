import React, { Component } from 'react'
import Select from 'react-select'


export default class contact extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        budget: "",
        help: ""

    }
     options = [
        { value: "$0 - $5,000", label: "$0 - $5,000"},
        { value: "$5,000 - $10,000", label: "$5,000 - $10,000" },
        { value: "$10,000 - $15,000", label: "$10,000 - $15,000" },
        { value: "$15,000 +", label: "$15,000 +" }
      ]

    handle_change = (event)=> this.setState({[event.target.name]: event.target.value})
    handle_select = (event) => this.setState({budget: event.value})
    

    handle_submit = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <div>
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
                                <input name='firstName' value={this.state.firstName}  onChange={this.handle_change}/>
                            </div>
                            <div>
                                <label>Last Name: *</label>
                                <input name='lastName' value={this.state.lastName} onChange={this.handle_change}/>
                            </div>
                            <div>
                                <label>Email: *</label>
                                <input type='email' name='email' value={this.state.email} onChange={this.handle_change}/>
                            </div>
                            <div>
                                <label>Phone: *</label>
                                <input type='tel' name='phone' value={this.state.phone} onChange={this.handle_change}/>
                            </div>
                             

                        </div>

                        <div>
                            <label for="budget-select">What is your approximate budget? *</label>
                            {/* Go to: https://react-select.com/home#custom-styles in order to add some styling*/}
                            <Select 
                                options={this.options} 
                                onChange={this.handle_select} 
                                name="budget"
                                placeholder ="Please choose an option"
                            />
                        </div>

                        <div>
                            <label>How can we help? *</label>
                            <textarea name='help' value={this.state.help} onChange={this.handle_change}>

                            </textarea>
                        </div>

                        <button> Send </button>

                    </form>
                </div>

                
            </div>
        )
    }
}
