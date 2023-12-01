import { useParams } from 'react-router';
import { useContextGlobal } from '../Components/utils/global.context'
import { useEffect } from 'react';
import axios from 'axios';

const Detail = () => {
  const { state, dispatch } = useContextGlobal()
  const { id } = useParams()

  const detailStyle = state.theme ? {
    backgroundColor: 'rgba(0, 0, 0, 0.345)'
  } : {
    backgroundColor: 'rgba(255, 255, 255, 0.19)'
  }

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => dispatch({ type: 'DETAIL', payload: response.data }))
  }, [])

  return (
    <div className='detailContainer'>
      <h1>Detail Dentist {state.detaiList.id} </h1>
      <div className='detailContent' style={detailStyle}>
        <h2>Nombre: {state.detaiList.name}</h2>
        <h3>Email: {state.detaiList.email}</h3>
        <h3>Telefono: {state.detaiList.phone}</h3>
        <h3>Sitio: {state.detaiList.website}</h3>
      </div>
    </div>
  )
}

export default Detail;