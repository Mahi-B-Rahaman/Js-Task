//iniializing the interface book 
interface book {
id: number,
title: string,
author: string,
isBorrowed: boolean
}

//created a class named Library and added a private object book  
class Library {
    private books: book[];
    constructor() {
        this.books = [];
    }
    //addBook constructor
     addBook(bookInfo:book) : void {
        this.books.push(bookInfo);
        console.log(`${bookInfo.title} has been added.`);
    }
//borrowBook Constructor
    borrowBook(bookId:number) : string {
        const book = this.books.find(b => b.id === bookId); 
        if (book) {
            if (book.isBorrowed==true) {
                return `${bookId} is already borrowed.`;
            } else {
                book.isBorrowed = true;
                return ` ${bookId} has been borrowed.`;
            }
        } 
    }
//returnBook constructor
    returnBook(bookId:number) : string {
        const book = this.books.find(b => b.id === bookId);
        if (book) {
            if (book.isBorrowed==false) {
                return `wrong book id`;
            } else {
                book.isBorrowed = false;
                return ` ${bookId} has been returned.`;
            }
        }
    }

//getAvailableBooks Constructor
    getAvailableBooks() : book[] {
        return this.books.filter(b => b. isBorrowed == false);
    }

//getBorrowedBooks Constructor
    getBorrowedBooks() : book[] {
        return this.books.filter(b => b. isBorrowed == true);
    }

}



const library = new Library();

library.addBook({ id: 1, title: "TypeScript Basics", author: "John Doe", isBorrowed: false });

library.borrowBook(1);

console.log(library.getAvailableBooks());
console.log(library.getBorrowedBooks());
console.log(library.returnBook(1));
console.log(library.getAvailableBooks());
