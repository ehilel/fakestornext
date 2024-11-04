import { NextResponse } from "next/server";


let BOOKS = [
    { id: 1, title: 'The Hobbit', price: 34.00, image: "https://m.media-amazon.com/images/I/71jD4jMityL._AC_UF1000,1000_QL80_.jpg",
      description: 'Bilbo Baggins embarks on a daring adventure to reclaim treasure from the dragon Smaug.' },
    { id: 2, title: 'The Hitchhiker’s Guide to the Galaxy', price: 13.95, image: "https://m.media-amazon.com/images/I/81F3posFCxL._AC_UF1000,1000_QL80_.jpg", 
      description: 'Arthur Dent explores the absurdities of space after Earth’s destruction.' },
    { id: 3, title: 'The Lord Of The Rings', price: 32.55, image: "https://www.booknet.co.il/Images/Site/Products/org/9780261103252.jpg", 
      description: 'Frodo Baggins sets out to destroy the One Ring and defeat Sauron.' },
    { id: 4, title: 'The Catcher in the Rye', price: 4.55, image: "https://m.media-amazon.com/images/I/819f7DOZwpL._AC_UF1000,1000_QL80_.jpg", 
      description: 'Holden Caulfield reflects on his struggles with growing up.' },
    { id: 5, title: 'Effective Modern C++', price: 34.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENn-1zu6qjnPKDPPz6FtlGCNzQ-UhkshjRw&s", 
      description: 'A guide to improving skills with modern C++ practices.' },
    { id: 6, title: 'The Silmarillion', price: 23.95, image: "https://www.booknet.co.il/Images/Site/Products/org/9780261102736.jpg", 
      description: 'Mythical tales of Middle-earths creation and ancient history.' },
    { id: 7, title: 'Dune', price: 25.00, image: "https://third-ear.com/wp-content/uploads/2021/08/71pUK2k0uHL.jpg", 
      description: 'Paul Atreides navigates power and survival on the desert planet Arrakis.' },
    { id: 8, title: '1984', price: 5.00, image: "https://www.booknet.co.il/Images/Site/Products/9780141036144.jpg", 
      description: 'A dystopian society under constant surveillance by Big Brother.' },
    { id: 9, title: 'Fahrenheit 451', price: 7.99, image: "https://www.danibooks.co.il/GoopSitesFiles/83758/User/catalog_528420-l.webp?638505170732500000", 
      description: 'In a world where books are banned, Montag begins to question his role.' },
    { id: 10, title: 'Brave New World', price: 9.99, image: "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg", 
      description: 'A futuristic society grapples with freedom, technology, and control.' },
];

export async function GET() {
  console.log('hiii');
  return NextResponse.json(BOOKS)
}
