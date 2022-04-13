import React from 'react';
import Heading from '../common/Heading';
import "../../style/history.css" ; 
import HistoryList from './HistoryList';

function History(props) {
    return (
        <div className='history-section'>
            <Heading name="lịch sử đã xem" />
            <HistoryList />
        </div>
    );
}

export default History;