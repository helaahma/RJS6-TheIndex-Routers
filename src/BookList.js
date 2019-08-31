import React, { Component } from "react";
//Component
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };
  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      `${book.title}`.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };
  booksList = <BookTable books={this.props.books} />;

  render() {
    let books = [];
    if (this.props.match.params.bookColor) {
      let colorBook = this.state.filteredBooks.filter(
        book => book.color === this.props.match.params.bookColor.toLowerCase()
      );
      books = <BookTable books={colorBook} />;
    } else {
      books = <BookTable books={this.state.filteredBooks} />;
    }
    return (
      <div>
        <h1>Books</h1>
        <SearchBar onChange={this.filterBooks} />
        <div className="author col-xs-10">{this.booksList}</div>
      </div>
    );
  }
}
export default BookList;
