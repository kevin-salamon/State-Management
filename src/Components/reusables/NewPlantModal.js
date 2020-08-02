import React, { useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPlant } from '../../actions/plantActions';
import './modalstyle.css';

const NewPlantModal = () => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const idRef = useRef();
    const nameRef = useRef();
    const dateRef = useRef();
    const growRef = useRef();
    const waterRef = useRef();
    const sunRef = useRef();
    const pictureRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const newPlant = {
            id: idRef.current.value,
            name: nameRef.current.value,
            plantDate: dateRef.current.value,
            growTime: growRef.current.value,
            idealWater: waterRef.current.value,
            idealSun: sunRef.current.value,
            picture: pictureRef.current.value,
        };

        console.log(`Adding plant to state: ${newPlant.name}`);
        createPlant(newPlant)
        
        handleClose();
    }

    return (
        <>
            <button className="btn header-button-add" style={{margin: "0 auto", backgroundColor: "#463239", color: "white"}} onClick={handleShow}>
                Add Plant
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{backgroundColor: "#7FB285", color: "white"}} closeButton>
                    <Modal.Title style={{fontFamily: "'Roboto Slab', serif", fontSize: "30px"}}>Add Plant</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#FAB3A9", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}>
                    <form>

                        <div className="form-group text-center">
                            <label>ID: </label><br/>
                            <input
                                className="input"
                                ref={idRef}
                                type="text"
                                placeholder="ID"
                            />
                        </div>
                        <div className="form-group text-center">
                            <label>Name: </label><br/>
                            <input
                                className="input"
                                ref={nameRef}
                                type="text"
                                placeholder="Name"
                            />
                        </div>
                        <div className="form-group text-center">
                            <label>Planting Date: </label><br/>
                            <input
                                className="input"
                                ref={dateRef}
                                type="text"
                                placeholder="Planting Date"
                            />
                        </div>
                        <div className="form-group text-center">
                            <label>Days to Harvest: </label><br/>
                            <input
                                className="input"
                                ref={growRef}
                                type="text"
                                placeholder="Days to Harvest"
                            />
                        </div>
                        <div className="form-group text-center">
                            <label>Ideal Water: </label><br/>
                            <input
                                className="input"
                                ref={waterRef}
                                type="text"
                                placeholder="Ideal Water"
                            />
                        </div>
                        <div className="form-group text-center">
                            <label>Ideal Sun: </label><br/>
                            <input
                                className="input"
                                ref={sunRef}
                                type="text"
                                placeholder="Ideal Sun"
                            />
                        </div>
                        <div className="form-group text-center">
                            <label>Picture Link: </label><br/>
                            <textarea
                                rows="3"
                                style={{height: "65px"}}
                                className="input"
                                ref={pictureRef}
                                type="text"
                                placeholder="Full Link to Picture"
                            />
                        </div>
                    </form>

                    <button className="btn btn-light header-button" style={{margin: "0 auto"}} onClick={handleSubmit}>
                        Submit
                    </button>

                </Modal.Body>

            </Modal>
        </>
    );
}

NewPlantModal.propTypes = {
    createPlant: PropTypes.func.isRequired
}

export default connect(null, { createPlant })(NewPlantModal);