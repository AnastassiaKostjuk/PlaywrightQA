// task 1 -  A class with only fields (no constructor)

class Person {
    firstName : string;
    lastName : string;
}

const person1 = new Person();
person1.firstName = "Hermione";
person1.lastName = "Granger";
console.log(person1.firstName + " " + person1.lastName);


// task 2 - Class with a Construction

class Book {
    title: string;
    author: string;
    pages: number;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

const book1 = new Book("Harry Potter and The Chamber of Secrets", "Joanne Rowling", 251);
console.log(book1);

