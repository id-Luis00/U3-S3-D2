import { Button, Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"




const Favourites = () => {

    const favs = useSelector(state => state.favourite.content)

    return (
        <Container>
            {favs.map((element, index) => (
                <Row key={index}>
                    <Col>
                        <p>{element.title}</p>
                        <Button variant="danger" className="border-0" >elimina</Button>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}

export default Favourites