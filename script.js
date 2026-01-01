const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

input = display.value;
buttons.forEach(button => {
  button.addEventListener('click', () => {
      const action = button.getAttribute('data-action');
      if (action === 'clear') {
          input = '';
      }
      else if (action === 'back') {
          input = input.slice(0, -1);
      }
      else if (action === 'equals') {
          try {
              input = eval(input);
          } catch (error) {
              input = 'Error';
          }
      }
      else {
          input += button.textContent;
      }
      display.value = input;
  });
});