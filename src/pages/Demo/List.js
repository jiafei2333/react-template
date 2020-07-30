import React, {useState, useCallback, useReducer} from 'react';
import { DatePicker, Button, Input, Checkbox   } from 'antd';
import moment from 'moment';
import TableFunction from 'Components/Base/TableFunction';
import {getEditorialCenterListReviewJson} from 'Redux/actionServer/content';
import useRequest from '../hooks/useRequest';
import './style.less';

const { RangePicker } = DatePicker;



let initialState = {
    timeV: "",
    Keyword: "",
}

function reducer(state, action){
    switch (action.type) {
        case 'SetParams':
          return {
              ...state,
              [`${action.paramsN}`]: action.paramsV
          };
        default:
          return state;
    }
}

function getColumns(){
  // table中的columns
  const columns =  [
    {
      title: '',
      dataIndex: 'checkout' ,
      key:'checkout',
      width:'5%',
      render: (text, record) => ( <Checkbox />)
    },{
      title: '稿件标题',
      dataIndex: 'Title' ,
      key:'Title',
      width:'30%',
      render: (text, record) => ( 
        <a href="#" > {record.Title.length>25?record.Title.substring(0,26)+'...':record.Title} </a>
      )
    },{
      title: '投稿人',
      dataIndex: 'SourceAccountName',
      key:'SourceAccountName',
      render:(text, record)=>{
        return(
            <p style={{marginBottom:'0'}}>{record.SourceOrganizationName}</p>
        )
      }
    },{
      title: '状态',
      dataIndex: 'ArticleAccountName',
      key:'ArticleAccountName',
      render: (text, record) => (
        <div>
          {
            record.CanReviewable === true ?
            <span>可编辑</span> :
            <span>编辑中</span>
          }

        </div>
      )
    },{
      title: '送审时间',
      dataIndex: 'PubTime',
      key: 'PubTime',
    }
  ];
  return columns;
}

const List = () =>{
    const [{timeV, Keyword }, dispatch] = useReducer(reducer, initialState);

    // 本页面组件的参数项(不唯一，所以不封装)
    const [params, setParams] = useState({
        Keyword: "",
        SSubmitTime: "",
        ESubmitTime: "",
        FlowType: 0,
        Sort: 0,
    });
    // 自定义hook
    const {data, loading, PageIndex, PageSize, setPagination} = useRequest(()=>{
        let new_params = Object.assign({}, params, {PageIndex: PageIndex, PageSize: PageSize}); // 拼接列表参数
        return getEditorialCenterListReviewJson(new_params);
    }, [params]);


    /* --------------- 筛选操作     ---------------------------------------------------------------------------*/
    // 时间控件
    const setRangePicker = useCallback((value) => {
        dispatch({type: 'SetParams', paramsN: 'timeV', paramsV: value});
    }, [timeV]);
    // 关键词搜索
    const searchInput = useCallback((e) => {
        dispatch({type: 'SetParams', paramsN: 'Keyword', paramsV: e.target.value});
    }, [Keyword])
    // 清空操作
    const clearState = useCallback(() => {
        dispatch({type: 'SetParams', paramsN: 'timeV', paramsV: ''});
        dispatch({type: 'SetParams', paramsN: 'Keyword', paramsV: ''});
        setParams(Object.assign({}, params, {Keyword: "", SSubmitTime: "", ESubmitTime: ""}));
    }, []);
    // 筛选操作
    const searchFun = () => {
        if(PageIndex !== 1) setPagination({current: 1, pageSize: PageSize}); // 添加搜索条件，PageIndex 初始化
        setParams(Object.assign({}, params, {Keyword: Keyword, SSubmitTime: timeV ? moment(timeV[0]).format('YYYY-MM-DD') : "", ESubmitTime: timeV ? moment(timeV[1]).format('YYYY-MM-DD') : ""}));
    };

    /** -----------------  权限按钮操作   -------------------------------------------------------------------**/


  return (
    <>
        {/* 筛选条件 */}
        <div className={'searchBox'}>
            <span>关键词：</span>
            <Input placeholder="请输入关键词" value={Keyword}  onChange={searchInput} style={{width: 160}} className={'marR20'}/>
            <span>提交时间：</span>
            <RangePicker onChange={setRangePicker}  value={timeV} className={'marR20'}/>
            <Button onClick={searchFun}type="primary" className={'marR20'} >筛选</Button>
            <Button onClick={clearState}>清空</Button>
        </div>
        {/* 按钮权限 */}
        {/* 列表通用 table 组件 */}
        <TableFunction loading={loading} getColumns={getColumns()} data={data} PageIndex={PageIndex} PageSize={PageSize} setPagination={setPagination}/>
    </>  
 );
}

export default List;