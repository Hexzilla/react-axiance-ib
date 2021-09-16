import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const DocLink = ({ title, path }) => (
  <Link className="doc-link" to={path}>
    <div>{title}</div>
    <img src="/assets/dashboard/pdf-icon.svg" alt="pdf" />
  </Link>
);

const LegalDocuments = () => {
  const history = useHistory();

  return (
    <div className="legal-docs">
      <div className="head-line">
        <ArrowBackIcon onClick={() => history.goBack()} />
        <div className="title">Legal Documents</div>
      </div>

      <div className="content">
        {[{ title: 'Cookies Policy', to: '/gd' },
          { title: 'Conflict of Interest', to: '/gd' },
          { title: 'Client Agreement', to: '/gd' },
          { title: 'Privacy Policy', to: '/gd' },
          { title: 'Complaints Handling Policy', to: '/gd' },
          { title: 'Account Verification', to: '/gd' },
          { title: 'Cost & Charges', to: '/gd' },
          { title: 'VPS Terms & Conditions', to: '/gd' },
          { title: 'Reverse Solicitation Policy', to: '/gd' },
          { title: 'Risk Disclosure Notice', to: '/gd' },
        ].map(({ title, path }) => <DocLink title={title} path={path} />)}
      </div>
    </div>
  );
};

export default LegalDocuments;
