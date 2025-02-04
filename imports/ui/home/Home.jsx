  
import React, { Component } from 'react';
import {Row, Col } from 'reactstrap';
import ChainStatus from './ChainStatusContainer.js';
import ChainInfo from '../components/ChainInfo.jsx'
import Consensus from './ConsensusContainer.js';
import TopValidators from './TopValidatorsContainer.js';
import Chart from './ChartContainer.js';
import { Helmet } from "react-helmet";
import BlocksTable from '/imports/ui/blocks/BlocksTable.jsx'
import Transactions from '/imports/ui/transactions/TransactionsList.jsx'

export default class Home extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return <div id="home">
            <Helmet>
                <title>Althea Testnet 2v3 | Block Exploder</title>
                <meta name="description" content="Blockchain Software for decentralized ISPs" />
            </Helmet>
            { /* <ChainInfo/> */ }
            <Consensus />
            <ChainStatus />
            <Row>
                <Col md={6} className="mb-2">
                    <BlocksTable homepage={true} />
                </Col>
                {/*
                <Col md={6} className="mb-2">
                    <Transactions homepage={true}/>
                </Col>
                */}
            </Row>
        </div>
    }

}
