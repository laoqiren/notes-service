import React from 'react';
import { Tabs } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import CategoryList from './sub/CategoryList';
import Header from '../Header/Header';
import configs from '../../config';

const lifeCategories = configs.lifeCategories;

class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: lifeCategories.map(cate => ({
                title: cate.title,
            })),
        }
    }
    handleShowDetail(category, item) {
        this.props.history.push({
            pathname: '/detail',
            state: {
                category,
                item
            },
        });
    }
    render() {
        return (
            <div>
                <Header title="生活点滴" />
                <Tabs tabs={this.state.tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    {
                        lifeCategories.map(category => {
                            return (
                                <div
                                    style={{minHeight: 'calc(100vh - 200px)'}} 
                                    key={category.value}>
                                    <CategoryList
                                        category={category.value}
                                        handleShowDetail={(category, item) => this.handleShowDetail(category, item)}
                                    />
                                </div>)
                        })
                    }
                </Tabs>
            </div>
        )
    }
}

export default withRouter(ListContainer);