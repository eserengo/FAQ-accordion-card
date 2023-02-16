import DisplayOnResize from "./components/Display.js";
import Heading from "./components/Headings.js";
import Accordion from "./components/Accordion.js";
import Attribution from "./components/Attribution.js";

(function () {

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(DisplayOnResize(), 500);
  });

  const App = () => {
    React.useEffect(() => {
      DisplayOnResize()
    }, []);
    return (
      <>
        <div className='container abs center'></div>
        <main className='card'>
          <Heading query='h1' className='title uppercase' content='faq' />
          <section className='flex-col'>
            <Accordion question='How many team members can I invite?' answer='You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.' />
            <Accordion question='What is the maximum file upload size?' answer='No more than 2GB. All files in your account must fit your allotted storage space.' />
            <Accordion question='How do I reset my password?' answer='Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.' />
            <Accordion question='Can I cancel my subscription?' answer='Yes! Send us a message and we’ll process your request no questions asked.' />
            <Accordion question='Do you provide additional support?' answer='Chat and email support is available 24/7. Phone lines are open during normal business hours.' />
          </section>
        </main>
        <Attribution />
      </>
    )
  }

  document.querySelector('body').insertAdjacentHTML('afterbegin', `<div id='root' class='rel' />`);
  ReactDOM.createRoot(document.getElementById('root')).render(<App tab='home' />);
})();