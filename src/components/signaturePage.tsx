import React, { FC, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Fab from '@material-ui/core/Fab';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import { Theme, createStyles, withStyles } from '@material-ui/core/styles';

interface SignProps {
  setSign: Function;
  classes: {
    clear: string;
    done: string;
    sigPad: string;
    pad: string;
  };
}

const styles = ({ spacing }: Theme) =>
  createStyles({
    clear: {
      position: 'absolute',
      right: spacing(2),
      top: spacing(9)
    },
    done: {
      position: 'absolute',
      right: spacing(2),
      bottom: spacing(2)
    },
    sigPad: {
      width: '100%',
      height: '100px'
    },
    pad: {
      border: 'black 1px'
    }
  });

const SignaturePad: FC<SignProps> = (props: SignProps) => {
  let sigPad: SignatureCanvas | null = null;
  let [signed, setSigned] = useState(false);

  const handleClear = () => {
    sigPad!.clear();
    setSigned(false);
  };

  const handleSubmit = () => {
    let signatureBase64: string | undefined = sigPad?.getTrimmedCanvas().toDataURL('image/png');
    signatureBase64 = signatureBase64?.substring(22, signatureBase64.length);

    props.setSign(signatureBase64);
  };

  const handleStroke = () => {
    if (sigPad !== null) {
      setSigned(!sigPad.isEmpty());
    }
  };

  const { classes } = props;
  return (
    <>
      <SignatureCanvas
        canvasProps={{ className: classes.sigPad }}
        ref={ref => {
          sigPad = ref;
        }}
        backgroundColor="lightgray"
        onEnd={handleStroke}
      />
      <Fab
        color="primary"
        aria-label="clear"
        onClick={handleClear}
        disabled={sigPad !== null}
        className={classes.clear}
      >
        <ClearIcon />
      </Fab>
      <Fab
        color="primary"
        aria-label="done"
        onClick={handleSubmit}
        disabled={!signed}
        className={classes.done}
      >
        <DoneIcon />
      </Fab>
    </>
  );
};

export default withStyles(styles)(SignaturePad);
