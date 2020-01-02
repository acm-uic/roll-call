// import React, { FC } from 'react';
// import TextField from '@material-ui/core/TextField'
// import { makeStyles } from "@material-ui/core/styles";
// import SignatureCanvas from 'react-signature-canvas';


// const useStyles = makeStyles(theme => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(5),
//       width: 600
//     }
//   }
// }));


// const signIn: FC = () => {

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const classes = useStyles();

//     return (
//         <>


//       <form className={classes.root} noValidate autoComplete="off">

//         <h2>Sign into event</h2>
//         <h5>Tap on the UIN textfield and Scan your card. Sign your signature and hit submit</h5>

//         <TextField id="filled-basic" label="UIN" variant="filled" />
//       </form>      


//         </>
//     );
// }

// export default signIn;



// ----------------------------- 

import React, { Component } from 'react'
import SignatureCanvas from 'react-signature-canvas';
import styles from './styles.module.css'

class signIn extends Component {
  state = {trimmedDataURL: null}
  sigPad = {};
  clear = () => {
      //@ts-ignore
      this.sigPad.clear();
  }
  trim = () => {
    //@ts-ignore
    this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas()
      .toDataURL('image/png')})
  }
  render () {

    return <div className={styles.container}>
      <div className={styles.sigContainer}>
        <SignatureCanvas canvasProps={{className: styles.sigPad}}
          //@ts-ignore
          ref={(ref) => { this.sigPad = ref }} />
      </div>
      <div>
        <button className={styles.buttons} onClick={this.clear}>
          Clear
        </button>
        <button className={styles.buttons} onClick={this.trim}>
          Trim
        </button>
      </div>


    </div>
  }
}

export default signIn;



