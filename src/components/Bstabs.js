import React from 'react'
import {Container,Row,Tabs,Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bstabs = () => {
  return (
    <Container className='py-4'>
        <Row className='justify-content-center'>
            <Tabs justify variant="pills" defaultActiveKey="tab-1" className='mb-1 p-0'>
                <Tab eventKey="tab-1" title="Tab 1">
                    Tab 1 content..
                </Tab>
                <Tab eventKey="tab-2" title="Tab 2">
                    Tab 2 content..
                </Tab>
                <Tab eventKey="tab-3" title="Tab 3">
                    Tab 3 content..
                </Tab>
            </Tabs>
        </Row>
    
    </Container>
  )
}

export default Bstabs

