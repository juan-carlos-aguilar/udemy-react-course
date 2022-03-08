import { render } from "@testing-library/react";
import { connect } from "http2";
import React from "react";
import { MapStateToProps } from "react-redux";
import { getTextOfJSDocComment } from "typescript";

class HomePage extends React.Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps {
        super(props);

        this.state = {
            selectedNote: null,
            currentAppNoteAction: null,
        }
    }

    handleClickNote = (note: NoteDetails) => {
        this.setState({
            selectedNote: note,
            currentAppNoteAction: APP_NOTE_ACTIONS.VIEW_NOTE,
        });
    }

    handleClickCloseButton = (note: NoteDetails) => (event: React.MouseEvent<HTMLDivElement>) => {
        this.setState({
            selectedNote: note,
            currentAppNoteAction: APP_NOTE_ACTIONS.DELETE_NOTE,
        });
    }

    handleEditNote = () => {
        this.setState({
            currentAppNoteAction: APP_NOTE_ACTIONS.EDIT_NOTE,
        });
    }

    handleAddNoteButtonClick = () => {
        this.setState({
            selectedNote: null,
            currentAppNoteAction: APP_NOTE_ACTIONS.ADD_NOTE,
        });
    }

    handleCloseModal = () => {
        this.setState({
            selectedNote: null,
            currentAppNoteAction: null,
        })
    }

    handleManageNote = (note: NoteDetails) => {
        this.handleCloseModal();

        this.props.manageNote(note);
    }

    render() {
        const { selectedNote, currentAppNoteAction } = this.state;

        let ModalComponent: React.ReactNode;

        switch (currentAppNoteAction) {
            case APP_NOTE_ACTIOPNS.VIEW_NOTE:
                ModalComponent = (
                    <ViewNoteModal
                        onEditNote={this.handleEditNote}
                        note={selectedNote as NoteDetails}
                        onClickOutsideModalBody={this.handleCloseModal}
                    />
                );
                break;
            case APP_NOTE_ACTIONS.ADD_NOTE:
            case APP_NOTE_ACTIONS.EDIT_NOTE:
                ModalComponent = (
                    <MaganeNoteModal
                        currentAppNoteaction={currentAppNoteAction as AppNoteAction}
                        manageNote={this.handleManageNote}
                        onClickOutsideModalBody={this.handleCloseModal}
                        note={selectedNote}
                    />
                );
                break;
            case APP_NOTE_ACTIONS.DELETE_NOTE:
                ModalComponent = (
                    <PromptModal
                        onYesClick={this.handleDeleteNote}
                        onNoClick={this.handleCloseModal}
                        questionText={`Are you sure you want to delete "${selectedNote?.title}" note?`}
                    />
                );
                break;
            default:
                ModalComponent: null;
        }

        return (
            <div className="home-page">
                <h1>My Notes</h1>
                {this.rnederNotes()}
                <br />
                <Button type="primary" onClick={this.handleAddNoteButtonClick}>Add Note</Button>
                {currentAppNoteAction && ModalComponent}
            </div>
        )
    }
}

const mapStateToProps: MapStateToProps<HomePageStateProps, HomePageOWnProps, StoreStateType> = ({ notes }) => {
    return {
        notes,
    };
}

const mapDispatchToProps: MapDispatchToPropsFunction<HomePageDispathProps, HomePageOwnProps> = (dispatch) => {
    const { manageNote, deleteNote } = new NotesAction();

    return {
        manageNote: (note) => dispatch(manageNote(note)),
        deleteNote: (noteId) => dispatch(deleteNote(noteId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);