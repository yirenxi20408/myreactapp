import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        students: [],
        filteredStudents: [],
    }

    // 生成随机学生数据
    generateStudents = () => {
        const lastNames = ['王', '李', '张', '刘', '陈', '杨', '黄', '赵', '周', '吴', '徐', '孙', '马', '朱', '胡', '郭', '何', '林', '高', '罗']
        const firstNames = ['伟', '芳', '娜', '秀英', '敏', '静', '丽', '强', '磊', '军', '洋', '勇', '艳', '杰', '娟', '涛', '明', '超', '秀兰', '霞']
        const genders = ['男', '女']
        const classes = ['一班', '二班', '三班', '四班', '五班']
        
        const students = []
        for (let i = 1; i <= 50; i++) {
            const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
            const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
            const student = {
                id: String(20240000 + i).padStart(8, '0'),
                name: lastName + firstName,
                gender: genders[Math.floor(Math.random() * genders.length)],
                className: classes[Math.floor(Math.random() * classes.length)]
            }
            students.push(student)
        }
        
        this.setState({ 
            students: students,
            filteredStudents: students 
        })
    }

    // 搜索学生
    handleSearch = (query) => {
        const { students } = this.state
        if (!query.trim()) {
            this.setState({ filteredStudents: students })
        } else {
            const filtered = students.filter(student => 
                student.name.includes(query)
            )
            this.setState({ filteredStudents: filtered })
        }
    }

    render() {
        const { filteredStudents } = this.state;
        return (
            <div className="container">
                <h1>学生列表</h1>
                <Form onSearch={this.handleSearch} onGenerate={this.generateStudents} />
                <Table studentData={filteredStudents} />
            </div>
        )
    }
}
export default App


