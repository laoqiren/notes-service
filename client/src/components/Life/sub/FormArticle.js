import React from 'react';
import { List, InputItem, TextareaItem, Button, Picker, DatePicker, WhiteSpace, Toast  } from 'antd-mobile';
import Header from '../../Header/Header';
import configs from '../../../config';

const categories = configs.lifeCategories;

class FormArticle extends React.Component {
    constructor(props) {
        super(props);
        const type = this.props.type;
        if(type === 'update') {
            const { title, time, addr, content, category } = this.props.oldItem;
            this.state = {
                title,
                time: new Date(time),
                addr,
                content,
                category: [category],
            }
        } else {
            this.state = {
                title: '',
                time: '',
                addr: '',
                content: '',
                category: '',
            }
        }
    }
    validateData = () => {
        const { title, time, addr, content, category } = this.state;
        if(!title) {
            Toast.info("别忘了输入标题哦");
            return false;
        }
        if(!time) {
            Toast.info("记录一下这件事的时间吧，亲爱的");
            return false;
        }
        if(!addr) {
            Toast.info("记录这件事的地点也很重要哟");
            return false;
        }
        if(!content) {
            Toast.info("又偷懒，内容都不写");
            return false;
        }
        if(!category) {
            Toast.info("要把它发表在哪个类目呀");
            return false;
        }
        return true;
    }
    handleSubmit = () => {
        if(!this.validateData()) {
            return;
        }
        this.props.handleSubmit(Object.assign({}, this.state, {
            category: this.state.category[0],
        }));
    }
    render() {
        const type = this.props.type;
        const categoriesPickers = categories.map(category => {
            return {
                label: category.title,
                value: category.value,
            }
        });
        return (
            <div className="form-article">
                <Header title={ type === 'add' ? '发表文章' : '更新文章' } />
                <div className="form-article-content" style={{ marginTop: '45px' }}>
                    <List renderHeader={() => ''}>
                        <InputItem
                            type="text"
                            placeholder="输入标题"
                            clear={true}
                            value={this.state.title}
                            onChange={title => this.setState({ title })}
                        >标题</InputItem>
                        <DatePicker
                            mode="date"
                            title="选择时间"
                            extra="请选择"
                            value={this.state.time}
                            onChange={time => this.setState({ time })}
                        >
                            <List.Item arrow="horizontal">时间</List.Item>
                        </DatePicker>
                        <InputItem
                            type="text"
                            placeholder="输入地点"
                            clear={true}
                            value={this.state.addr}
                            onChange={addr => this.setState({ addr })}
                        >地点</InputItem>
                        <TextareaItem 
                            title="内容"
                            autoHeight
                            rows={3}
                            value={this.state.content}
                            onChange={content => this.setState({ content })}
                        >
                        </TextareaItem>
                        <Picker
                            data={categoriesPickers}
                            cols={1}
                            value={this.state.category}
                            onChange={category => this.setState({ category })}
                        >
                            <List.Item arrow="horizontal">选择类目</List.Item>
                        </Picker>
                    </List>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.handleSubmit}>{ type === 'add' ? '发表' : '更新' }</Button>
                </div>
            </div>
        )
    }
}

export default FormArticle;