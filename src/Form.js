import React, { Component } from 'react'

class Form extends Component {
    state = {
        searchQuery: '',
    }

    handleChange = (event) => {
        this.setState({
            searchQuery: event.target.value,
        })
    }
    
    handleSearch = () => {
        this.props.onSearch(this.state.searchQuery)
    }

    render() {
        const { searchQuery } = this.state;

        return (
            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="search">搜索学生姓名</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        value={searchQuery}
                        onChange={this.handleChange}
                        placeholder="输入学生姓名进行搜索"
                        style={{ flex: 1 }}
                    />
                    <input type="button" value="搜索" onClick={this.handleSearch} />
                    <input type="button" value="生成数据" onClick={this.props.onGenerate} />
                </div>
            </div>
        );
    }
}
export default Form;

