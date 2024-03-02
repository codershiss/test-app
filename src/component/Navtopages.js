import { useNavigate } from 'react-router-dom';

    const navigate=useNavigate();

      function navtopages(url) {
                 navigate(url,{state:{page:"pagename"}});
        
      }
 

