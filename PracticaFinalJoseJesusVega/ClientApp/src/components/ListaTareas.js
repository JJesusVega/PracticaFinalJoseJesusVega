import { Button, Table } from "reactstrap"

const ListaTareas = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarTarea }) => {

    const enviarDatos = (tarea) => {
        setEditar(tarea)
        setMostrarModal(!mostrarModal)
    }

    return (

        <Table striped responsive>
            <thead>
                <tr>
                    <th>Tarea</th>
                    <th>Persona</th>
                    <th>Completada ?</th>                    
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4">Sin tareas para mostrar</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.idTarea}>
                                <td>{item.tarea1}</td>
                                <td>{item.persona}</td>
                                <td>{item.estaCompletada}</td>
                                
                                <td>
                                    <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}>Editar</Button>
                                    <Button color="danger" size="sm" onClick={() => eliminarTarea(item.idTarea)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    )

}

export default ListaTareas;