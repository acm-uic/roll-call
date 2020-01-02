import React, { FC } from 'react';
import TextField from '@material-ui/core/TextField';


const signIn: FC = () => {


    return (
        <>

      <form noValidate autoComplete="off">
            <TextField id="filled-basic" label="UIN" variant="filled" />
      </form>

        </>
    );
}

export default signIn;



// ----------------------------- 

// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// // import SignaturePad from './react-signature-canvas'
// // import SignaturePad from 'react-signature-canvas'
// import styles from './styles.module.css'

// class signIn extends Component {
//   state = {trimmedDataURL: null}
//   sigPad = {}
//   clear = () => {
//     this.sigPad.clear()
//   }
//   trim = () => {
//     this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas()
//       .toDataURL('image/png')})
//   }
//   render () {
//     let {trimmedDataURL} = this.state
//     return <div className={styles.container}>
//       <div className={styles.sigContainer}>
//         <SignaturePad canvasProps={{className: styles.sigPad}}
//           ref={(ref) => { this.sigPad = ref }} />
//       </div>
//       <div>
//         <button className={styles.buttons} onClick={this.clear}>
//           Clear
//         </button>
//         <button className={styles.buttons} onClick={this.trim}>
//           Trim
//         </button>
//       </div>
//       {trimmedDataURL
//         ? <img className={styles.sigImage}
//           src={trimmedDataURL} />
//         : null}
//     </div>
//   }
// }

// export default signIn;



