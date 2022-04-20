import './MultiChoiceQuestion.css'
import { Form } from 'react-bootstrap'

function MultiChoiceQuestion(props) {
    return (     
        <Form.Group className='single-choice' id={props.item.id}>      
            <Form.Label>{ props.item.question }</Form.Label><br/>
            {
                (props.item.options && props.item.options.length > 0) ? props.item.options.map((item, key) => {
                    return (<><Form.Check type="checkbox" inline name={item.questionId} label={item.option} key={key}/><br/></>)
                }) : null
            }
        </Form.Group>
    );
}

export default MultiChoiceQuestion