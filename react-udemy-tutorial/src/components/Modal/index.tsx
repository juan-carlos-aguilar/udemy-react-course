import React from "react";
import { ModalProps } from './interface';
import ReactDOM from 'react-dom';
import './style.css';

class Modal extends React.Component<ModalProps> {
    root: HTMLElement;
    el: HTMLDivElement;

    constructor(props: ModalProps) {
        super(props);
        this.root = document.getElementById('root') as HTMLElement;
        this.el = document.createElement('div');
    }

    componentDidMount() {
        this.root.append(this.el)
    }

    componentWillUnmount() {
        this.root.removeChild(this.el)
    }

    handleCloseModal = () => {
        this.props.onClose();
    }

    modalPreventEventPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
    }

    render() {
        const { show = true } = this.props;
        const modalUI = ReactDOM.createPortal (
            <div className="modal-container">
                <div className="modal-overlay" />
                <div className="class-body">
                    <h3>Modal</h3>
                    <button className="modal-button">Close Button</button>
                </div>
            </div>,
            this.root
        )

        return show ? modalUI : null;
    }
}

export default Modal;