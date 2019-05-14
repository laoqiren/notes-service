import React from 'react';
import { Tabs } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import CategoryList from './sub/CategoryList';
import Header from '../Header/Header';
import configs from '../../config';
import './ListContainer.scss';

import LoverConsumer from '../LoverConsumer';
import LoverContext from '../../loverContext';

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
    gotoAddArticle = () => {
        this.props.history.push('/addArticle');
    }
    render() {
        const lover = this.props.context;
        const headerRightContent = lover.hasLogin ? [
            <img onClick={this.gotoAddArticle} key="0" src={require('../../icons/edit.svg')} alt="lover icon" width={20}/>
        ] : [];
        return (
            <div className="category-list-container">
                <Header title="生活点滴" rightContent={headerRightContent}/>
                <div className="category-tabs">
                    <Tabs tabs={this.state.tabs}
                        initialPage={0}
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
            </div>
        )
    }
}

export default LoverConsumer(LoverContext)(withRouter(ListContainer));