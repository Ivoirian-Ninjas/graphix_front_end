import React, { Component } from 'react'

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

    handle_change = (event)=> this.setState({[event.target.name]: event.target.value})



    handle_submit = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <div>
               <div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                        Lorem Ipsum has been the industry's standard dummy.
                    </p>
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
                            <label>When will you be available for a zoom meeting? (30 minutes) *</label>
                            {/* Add date selector here */}
                        </div>

                        <div>
                            <label>What is your approximate budget? *</label>
                            {/* Add a drop down menu here */}
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
