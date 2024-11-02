//Task 1: Setup HTML Structure for the Ticket System
//Done in HTML file



//Task 2: Fetch Tickets Using Async/Await and Handle Errors
//Did Task 2 and Task 3 together at the same time

//creat customer tickets variable from HTML file
const customerTickets = document.getElementById('customerTickets');

//Async function to fetch data from the Unresolved Tickets API
async function unresolvedTickets(ticketId) {
    try {
        //fetching data from API
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ticketId}`);
        if (!res.ok) {
            throw new Error('Failed to fetch customer data');
        }



//Task 3: Display Tickets Dynamically on the Page
//Only got it to work for the 1st ticket, not sure why

        const ticket = await res.json();
        console.log('Ticket:', ticket);

            const listItem = document.createElement('li');
            // Using text content to display the details of 
            listItem.textContent = `Ticket ID: ${ticket.id}, Customer Name: ${ticket.userId}, Issue Description: ${ticket.title}, Details: ${ticket.body}`;
            customerTickets.appendChild(listItem);

//Using catch
    } catch (error) {
        console.error('Error:', error.message);
    }
}

//Fetch and display tickets for customer with ID 1
unresolvedTickets(1);