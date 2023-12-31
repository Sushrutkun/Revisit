import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:'10px 40px',
  },
  heading: {
    color: 'rgba(0, 0, 0, 0.9)',
  },
  image: {
    marginLeft: '15px',
    marginBottom:'6px',
  },
}));