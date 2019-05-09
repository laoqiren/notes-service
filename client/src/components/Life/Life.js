import React from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import CategoryList from './sub/CategoryList';
import configs from '../../config';

const lifeCategories = configs.lifeCategories;

export default class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: lifeCategories.map(cate => ({
                title: cate,
            })),
        }
    }
    render() {
        return (
            <div>
                <Tabs tabs={this.state.tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    {
                        lifeCategories.map(category => {
                            return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                                <CategoryList category={category} />
                            </div>
                        })
                    }
                </Tabs>
            </div>
        )
    }
}