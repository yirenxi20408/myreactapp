import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }
    //Form组件的state，注意和App的state区别，每个组件都有自己的state
    state = this.initialState

    handleChange = (event) => {
        const { name, value } = event.target
        //更新组件中的值，注意下面的语法[name],是动态根据event中的组件名称修改对应的属性
        this.setState({
            [name]: value,
        })
    }
    
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { name, job } = this.state;

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}
export default Form;

