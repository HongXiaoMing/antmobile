import React from 'react';
import { connect } from 'dva';
import { Tabs, WhiteSpace } from 'antd-mobile';

const TabPane = Tabs.TabPane;


function news() {
  return <div>
    <Tabs defaultActiveKey="1" >
      <TabPane tab="选项卡一" key="1">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          选项卡一内容
        </div>
      </TabPane>
      <TabPane tab="选项卡二" key="2">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          选项卡二内容
        </div>
      </TabPane>
      <TabPane tab="选项卡三" key="3">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          选项卡三内容
        </div>
      </TabPane>
      <TabPane tab="选项卡三" key="4">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          选项卡三内容
        </div>
      </TabPane>
      <TabPane tab="选项卡三" key="5">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          选项卡三内容
        </div>
      </TabPane>
      <TabPane tab="选项卡三" key="6">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          选项卡三内容
        </div>
      </TabPane>
    </Tabs>
         </div>
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(news);
