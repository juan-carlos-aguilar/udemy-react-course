import React from "react";

class Pagination extends React.Component {
    renderPageButtons = () => {
        return null;
    }

    handleLeftCaretClick = () => {

    }

    handleRightCaretClick = () => {

    }

    render() {
        return (
            <div className="pagination-container">
                <i onClick={this.handleLeftCaretClick} className="fa fa-caret-left page-caret" aria-hidden="true"></i>
                <div className="pages-container">
                    {this.renderPageButtons()}
                </div>
                <i onClick={this.handleRightCaretClick} className="fa fa-caret-right page-caret" aria-hidden="true"></i>

            </div>
        );
    }
}

export default Pagination;