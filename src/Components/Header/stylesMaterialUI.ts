import { makeStyles } from '@material-ui/core/styles';


export const StylesList:any = {
    padding:'20px', 
    display:'flex',
    flexDirection:'column', 
    gap:'20px', 
    width:'100%'
}
export const MakeStyleDrawer:any = {
    width:'100%'
}

export const useStyles = makeStyles((theme) => ({
    drawer: {
      width: '100%',
      maxWidth: '100%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));