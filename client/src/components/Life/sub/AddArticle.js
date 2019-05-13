import React from 'react';
import { withRouter } from 'react-router-dom';
import { List, InputItem, TextareaItem, Button, Picker, DatePicker, WhiteSpace, Toast  } from 'antd-mobile';
import Header from '../../Header/Header';
import configs from '../../../config';
import service from '../../../service';

const categories = configs.lifeCategories;

class AddArticle extends React.Component {
    state = {
        title: '',
        time: '',
        addr: '',
        content: '',
        category: '',
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
    handlePublish = () => {
        if(!this.validateData()) {
            return;
        }
        console.log("hhhh")
        const { title, time, addr, content, category } = this.state;
        service.life.addArticle({
            title,
            time,
            addr,
            content,
            category,
        })
        .then(result => {
            if(result) {
                this.props.history.push('/');
            } else {
                Toast.info("哎呀，好像发表失败啦，重新试一下吧");
            }
        });
    }
    render() {
        const categoriesPickers = categories.map(category => {
            return {
                label: category.title,
                value: category.value,
            }
        });
        return (
            <div className="add-article">
                <Header title="发表文章" />
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
                <Button type="primary" onClick={this.handlePublish}>发表</Button>
            </div>
        )
    }
}

export default withRouter(AddArticle);