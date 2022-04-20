import SingleChoiceQuestion from '../../components/SingleChoiceQuestion/SingleChoiceQuestion'
import MultiChoiceQuestion from '../../components/MultiChoiceQuestion/MultiChoiceQuestion'
import { Form, Container, Navbar, Nav } from 'react-bootstrap'
import './Quiz.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Quiz() {
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [errMsg, setErrMsg] = useState('');
    
    useEffect(() => {
        return () => {
            axios.get('/quiz')
                .then(res => {
                    setQuizQuestions(res.data)
                    setErrMsg('')
                })
                .catch(err => {
                    setErrMsg(err)
                })
        };
      }, []);

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <h1>QUIZ!!!</h1>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Reports</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Form className="quiz">
                {
                    (quizQuestions && quizQuestions.length > 0) ? quizQuestions.map((item, key) => {
                        if (item && item.type === 'single-choice') return <SingleChoiceQuestion item={item} key={'single-choice-'+key}/>
                        else if (item && item.type === 'multi-choice') return <MultiChoiceQuestion item={item} key={'multi-choice-'+key}/>
                        else return (<></>)
                    }) : (errMsg) ? (<h1>{errMsg}</h1>) : (<h1>No Questions Found!!</h1>)
                }
            </Form>
        </div>
    )
}

export default Quiz