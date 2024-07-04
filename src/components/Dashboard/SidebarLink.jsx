import React from 'react'
// import * as Icons from 'react-icons/vsc'
// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import {resetCourseState} from '../../../slices/courseSlice';

const SidebarLink = ({link}) => {

    // const Icon = Icons[iconName];
    // const location = useLocation();
    // const dispatch = useDispatch();

    // const matchRoute = (route) => {
    //     return matchPath({path: route}, location.pathname);
    // }

  return (
    <NavLink
     to={link.path}
    >
      {link.name}
    </NavLink>
  )
}

export default SidebarLink
