import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faPaypal, faVimeoSquare } from '@fortawesome/free-brands-svg-icons';
import { faBeer, faHamburger, faBacon, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = ({ tipJars }) => {
  let newTipJars = tipJars.map((tipJar => {
    let position = ''
    switch(tipJar.position) {
      case 'Bartender':
        position = <FontAwesomeIcon icon={faBeer} />
        break;
      case 'Server':
        position = <FontAwesomeIcon icon={faHamburger} />
        break;
      case 'Cook':
        position = <FontAwesomeIcon icon={faBacon} />
        break;
      case 'Manager':
        position = <FontAwesomeIcon icon={faUserCog} />
        break;
      default: // Host/Hostess
        position = <FontAwesomeIcon icon={faSmile} />
        break;
    }
    const location = (
      <React.Fragment>
        {tipJar.company}
        <br />
        <strong><small>{tipJar.city}, {tipJar.state}</small></strong>
      </React.Fragment>
    )
    const tips = (
      (tipJar.payment === 'Paypal') ? (
        <a href={`https://www.paypal.me/${tipJar.paypal}`} className="badge badge-primary p-2">
          <FontAwesomeIcon icon={faPaypal} className="fa-2x" />
        </a>
      ) : (
        <React.Fragment>
          <a href={`https://www.venmo.com/${tipJar.venmo}`} className="badge badge-primary p-2">
            <FontAwesomeIcon icon={faVimeoSquare} className="fa-2x" />
          </a>
          <br />
          <small className="text-muted">{tipJar.code}</small>
        </React.Fragment>
      )
    )
    return Object.assign(tipJar, {
      position,
      location,
      tips,
    });
  }));
  const data = {
    columns: [{
      field: 'name',
      label: 'Name',
      sort: 'asc',
    }, {
      field: 'position',
      label: '',
      sort: 'asc',
    }, {
      field: 'location',
      label: 'Location',
      sort: 'asc',
    }, {
      field: 'tips',
      label: 'Tips',
      sort: 'asc',
    }],
    rows: newTipJars
  };

  return (
    <MDBDataTable
      small
      hover
      data={data}
    />
  );
}

export default DatatablePage;