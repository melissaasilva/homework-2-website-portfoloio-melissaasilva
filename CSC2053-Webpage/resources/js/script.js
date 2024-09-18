const Button = document.getElementById('toggle-schedule');
// Add an event listener to add a new paragraph with the student's major
const schedTable = document.getElementById('schedule-container')


Button.addEventListener('click', () =>{
 if (schedTable.style.display == 'none')
 {
 schedTable.style.display = 'block';
 Button.textContent ='Hide Schedule';
 }
 else
 {
 schedTable.style.display = 'none';
 Button.textContent = 'Show Schedule';
 }
});

