import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addFavAction } from '../redux/actions'

// eslint-disable-next-line react/prop-types
const Job = ({ data }) => {

  const dispatch = useDispatch()

  const handleClick = () => {
    /* dispatch({ type: "ADD_FAVS", payload: data }) */
    dispatch(addFavAction(data))
    alert('added to favourites')
  }


  return (
    <Row
      className="mx-0 mt-3 p-3 fadeIn"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={4} className=' d-flex justify-content-between align-items-center'>
        {/*eslint-disable-next-line react/prop-types */}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        {/* <Link to={'/favourites'} className='me-5 favourite'>
        </Link> */}
        <Button variant='trasparent' onClick={handleClick} className='border-0'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-bookmark-heart favourite" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
          </svg>

        </Button>
      </Col>
      <Col xs={8} className='d-flex align-items-center'>
        {/* eslint-disable-next-line react/prop-types */}
        <a href={data.url} target="_blank" rel="noreferrer">
          {/* eslint-disable-next-line react/prop-types */}
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job
