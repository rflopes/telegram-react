/*
 *  Copyright (c) 2018-present, Evgeny Nadymov
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from '../../Utils/HOC';
import { withTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { modalManager } from '../../Utils/Modal';
import './PasteFilesDialog.css';

class PasteFilesDialog extends React.Component {
    handleDone = () => {
        const { onConfirm } = this.props;
        onConfirm();
    };

    handleCancel = () => {
        const { onCancel } = this.props;
        onCancel();
    };

    render() {
        const { files, t } = this.props;
        if (!files) return null;

        return (
            <Dialog
                manager={modalManager}
                transitionDuration={0}
                open={true}
                onClose={this.handleCancel}
                aria-labelledby='delete-dialog-title'>
                <DialogTitle id='delete-dialog-title'>{t('Confirm')}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {files.length > 1 ? t('SendFilesConfirmation') : t('SendFileConfirmation')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleCancel} color='primary'>
                        {t('Cancel')}
                    </Button>
                    <Button onClick={this.handleDone} color='primary'>
                        {t('Ok')}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

PasteFilesDialog.propTypes = {
    files: PropTypes.array,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

const enhance = compose(withTranslation());

export default enhance(PasteFilesDialog);
