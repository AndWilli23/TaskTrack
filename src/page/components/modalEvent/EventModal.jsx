import React,{useState} from 'react';
import {Modal, Button, Form, Collapse} from 'react-bootstrap'

const EventModal = ({evento, onClose, onDelete, onUpdate}) => {

    const [editEvent, setEditevent] = useState({...evento});
    const [collapse, setCollapse] = useState(true);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEditevent({...editEvent, [name]:value});
    }

    const handleColorChange = (e) => {
        setEditevent({...editEvent, color:e.target.value});
    }

    const handleStartDateChange = (e) => {
        const startDate = new Date (e.target.value);

        if(startDate <= editEvent.end){
            setEditevent({...editEvent, start:startDate});
        }
    }

    const handleEndDateChange = (e) => {
        const endDate = new Date (e.target.value);

        if(endDate <= editEvent.start){
            setEditevent({...editEvent, end:startDate});
        }
    }

    const handleDelete = () => {
        onDelete(evento.id);
    }

    const handleUpdate = () => {
        onUpdate(editEvent);
        onClose();
    }

    const adjustDate = (date) =>{
        const adjustedDate = new Date(date);
        adjustedDate.setHours(adjustedDate.getHours() - 3);
        return adjustedDate.toISOString().slice(0,-8);
    };

    return (
        <>
            <Modal show={true} onHide={onClose}>
                <Modal.Header>
                    <Modal.Title>{editEvent.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Título</Form.Label>
                            <Form.Control 
                                type="text"
                                name="title"
                                value={editEvent.title}
                                onChange={handleInputChange}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formDesc">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control 
                                as="textarea"
                                rows={3}
                                name="desc"
                                value={editEvent.desc}
                                onChange={handleInputChange}>
                            </Form.Control>
                        </Form.Group>

                        <Collapse in={!collapse}>
                            <div>
                            <Form.Group controlId="formStart">
                                <Form.Label>Início</Form.Label>
                                <Form.Control 
                                    type="datetime-local"
                                    name="start"
                                    value={editEvent.start}
                                    onChange={handleStartDateChange}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formEnd">
                                <Form.Label>Término</Form.Label>
                                <Form.Control 
                                    type="datetime-local"
                                    name="end"
                                    value={editEvent.end}
                                    onChange={handleEndDateChange}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formColor">
                                <Form.Label>Cor</Form.Label>
                                <Form.Control 
                                    type="color"
                                    name="color"
                                    value={editEvent.color}
                                    onChange={handleColorChange}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formTipo">
                                <Form.Label>Tipo</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="tipo"
                                    value={editEvent.tipo}
                                    onChange={handleInputChange}>
                                </Form.Control>
                            </Form.Group>
                            </div>
                        </Collapse>
                    </Form>
                </Modal.Body>  
                <Modal.Footer className='justify-content-between'>
                <Button variant='secondary' onClick={()=> setCollapse(!collapse)}>
                        {!collapse ? 'Ocultar Detalhes' : 'Mostrar Detalhes'}
                    </Button>
                    <Button variant='danger' onClick={handleDelete}>
                        Apagar
                    </Button>
                    <Button variant='primary' onClick={handleUpdate}>
                        Salvar Alterações
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EventModal