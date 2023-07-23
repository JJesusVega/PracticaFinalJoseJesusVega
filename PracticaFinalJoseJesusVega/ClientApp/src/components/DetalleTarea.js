import { useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"

const modeloTarea = {
    idTarea: 0,
    persona: "",
    tarea1: "",
    estaCompleta: ""
}

const DetalleTarea = ({ mostrarModal, setMostrarModal, guardarTarea, editar, setEditar, editarTarea }) => {

    const [tarea, setTarea] = useState(modeloTarea);

    const actualizaDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setTarea(
            {
                ...tarea,
                [e.target.name]: e.target.value
            }
        )
    }

    const enviarDatos = () => {

        if (tarea.idTarea == 0) {
            guardarTarea(tarea)
        } else {
            editarTarea(tarea)
            setTarea(modeloTarea)
        }

    }

    useEffect(() => {
        if (editar != null) {
            setTarea(editar)
        } else {
            setTarea(modeloTarea)
        }

    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (

        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {tarea.idTarea == 0 ? "Nueva Tarea" : "Editar Tarea"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Tarea</Label>
                        <Input name="tarea1" onChange={(e) => actualizaDato(e)} value={tarea.tarea1} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Persona</Label>
                        <Input name="persona" onChange={(e) => actualizaDato(e)} value={tarea.persona} />
                    </FormGroup>
                    <FormGroup>
                        <Label>¿Esta completada?</Label>
                        <Input name="estaCompletada" onChange={(e) => actualizaDato(e)} value={tarea.estaCompletada} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>

    )

}

export default DetalleTarea;