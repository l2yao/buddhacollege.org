import React from 'react';
import ReactPlayer from 'react-player';
import { withStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

export default function PaginatedPlayer(props) {
  const [url, setURL] = React.useState(props.baseURL + '0001.' + props.ext);
  const handleChange = (event, value) => {
    const episode = value.toString().padStart(4, "0");
    const url = props.baseURL + episode + '.' + props.ext;
    setURL(url);
  };
  const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
      '.MuiPaginationItem-root': {
        color: 'inherit',
      },
    },
  })(() => null);

  return (
    <div>
      <GlobalCss />
      <ReactPlayer controls url={url} />
      <Pagination count={props.count} onChange={handleChange} />
    </div>
  );
}