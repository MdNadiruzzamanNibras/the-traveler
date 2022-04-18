import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ fontSize:  " 20px" ,textDecoration: "none", fontWeight:match && "700", color:match && "blue", marginLeft:'30px'}}
          to={to}
          {...props}
        >
          {children}
        </Link>
       
      </div>
    );
  }

export default CustomLink;