function game(human_choice)
{
    let computer_choice = get_comp_choice();
    //console.log(human_choice);
    //console.log(computer_choice);

    const compoption = document.querySelector('.compoption');
    compoption.textContent = computer_choice;
    
    if (human_choice === computer_choice)
    {
      //console.log('draw');
    }
    else if (human_choice === 'rock' & computer_choice !== 'paper')
    {
      //console.log('human wins')
      human_points = human_points + 1;
      const hum_point_indicator = document.querySelector('.humanscore .number');
      hum_point_indicator.textContent = human_points.toString();
    }
    else if (human_choice === 'paper' & computer_choice !== 'scissor')
    {
      //console.log('human wins')
      human_points = human_points + 1;
      const hum_point_indicator = document.querySelector('.humanscore .number');
      hum_point_indicator.textContent = human_points.toString();
    }
    else if (human_choice === 'scissor' & computer_choice !== 'rock')
    {
      //console.log('human wins')
      human_points = human_points + 1;
      const hum_point_indicator = document.querySelector('.humanscore .number');
      hum_point_indicator.textContent = human_points.toString();
    }
    else
    {
      //console.log('computer wins')
      computer_points = computer_points +1;
      const comp_point_indicator = document.querySelector('.computerscore .number');
      comp_point_indicator.textContent = computer_points.toString();
    }

    if (human_points === 5 || computer_points === 5)
{
  console.log('Finished')
    rockbtn.removeEventListener('click',send_rock);
    paperbtn.removeEventListener('click',send_paper);
    scissorbtn.removeEventListener('click',send_scissor);  



  let new_node = document.createElement("h2");
  new_node.classList.add('final_message');
  new_node.style.color = 'white';
  new_node.style.fontSize = '40px';  
  let ref = document.querySelector('.footer');
  let parentnode = ref.parentNode;
  console.log(parentnode)
  parentnode.insertBefore(new_node, ref);
  //new_node.textContent = 'You WIN !!!';
    if (human_points > computer_points)
    {
      new_node.textContent = 'You WIN !!!';
    }
    else
    {
      new_node.textContent = 'Computer WINS !!!';
    }
}

}

function get_comp_choice()
{
  let ran = Math.floor((Math.random() * 3) + 1);
  //console.log(ran)
  if (ran === 1)
  {
    return 'paper';
  }
  else if (ran === 2)
  {
    return 'rock';
  }
  else
  {
    return 'scissor';
  }
}


let computer_points = 0;
let human_points = 0;

  const rockbtn = document.querySelector('#rock');
  rockbtn.addEventListener('click',send_rock);
  const paperbtn = document.querySelector('#paper');
  paperbtn.addEventListener('click',send_paper);
  const scissorbtn = document.querySelector('#scissor');
  scissorbtn.addEventListener('click',send_scissor);

  function send_rock()
  {game('rock');}
  function send_paper()
  {game('paper');}
  function send_scissor()
  {game('scissor');}