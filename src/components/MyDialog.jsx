import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Dialog, DialogActionsBar, Window } from '@progress/kendo-react-dialogs';

export class MyDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleDialog: false,
            visibleWindow: false
        };
    }

    toggleDialog = () => {
        this.setState({
            visibleDialog: !this.state.visibleDialog
        });
    }
    toggleWindow= () => {
        this.setState({
            visibleWindow: !this.state.visibleWindow
        });
    }

    render() {
        return (
            <div style={{margin: 20 + 'em'}}>
                {(!this.state.visibleDialog && !this.state.visibleWindow) && (
                    <span>
                        <button className="k-button" onClick={this.toggleDialog}>Open Dialog</button>
                        <button className="k-button" onClick={this.toggleWindow}>Open Window</button>
                    </span>) }
                {this.state.visibleDialog && <Dialog title={"Please confirm"} onClose={this.toggleDialog}>
                    <p style={{ margin: "25px", textAlign: "center" }}>Are you sure you want to continue?</p>
                    <DialogActionsBar>
                        <button className="k-button" onClick={this.toggleDialog}>No</button>
                        <button className="k-button" onClick={this.toggleDialog}>Yes</button>
                    </DialogActionsBar>
                </Dialog>}
                {this.state.visibleWindow && <Window title={"Status"} onClose={this.toggleWindow}>
                    <input type="text" value="Enter Name"></input>
                    <button type="submit" >ثبت</button>
                </Window>}
            </div>
        );
    }
}