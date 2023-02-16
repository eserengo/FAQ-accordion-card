const Accordion = (props) => {
  const [state, setState] = React.useState('off');
  
  const actualizeEl = () => {
    document.querySelectorAll('.answer').forEach(item => item.classList.add('hidden'));
    document.querySelectorAll('.question').forEach(item => item.classList.remove('active'));
  }

  const showEl = (event) => {
    actualizeEl();
    event.target.parentElement.querySelector('.answer').classList.remove('hidden');
    setState('on');
  }

  const hideEl = (event) => {
    event.target.parentElement.querySelector('.question').classList.remove('active');
    event.target.parentElement.querySelector('.answer').classList.add('hidden');
    setState('off');
  }

  return (
    <div className='faq'>
      {state == 'off' && <p className='question inline left selectable' onClick={showEl}>{props.question}</p>}
      {state == 'on' && <p className='question active inline left selectable' onClick={hideEl}>{props.question}</p>}
      {state == 'off' && <i className='fa fa-chevron-down inline right selectable' onClick={showEl}></i>}
      {state == 'on' && <i className='fa fa-chevron-up inline right selectable' onClick={hideEl}></i>}
      <br />
      <p className='answer hidden'>{props.answer}</p>
    </div>
  )
}

export default Accordion;