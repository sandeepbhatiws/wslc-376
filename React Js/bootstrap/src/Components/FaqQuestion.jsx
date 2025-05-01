import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function FaqQuestion({ index, data }) {
    return (
        <>
            <Accordion.Item eventKey={index}>
                <Accordion.Header>{data.question}</Accordion.Header>
                <Accordion.Body>
                    {data.answer}
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}
