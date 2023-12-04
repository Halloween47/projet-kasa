import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return(

      console.log(location.pathname)
  )
}

export default Navigation