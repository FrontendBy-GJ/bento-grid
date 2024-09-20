import BentoGrid from './components/BentoGrid';
import Card from './components/Card';
import Footer from './components/Footer';
import {
  aiContent,
  audience,
  createPost,
  fiveStars,
  grow,
  platforms,
  calendar,
  schedule,
} from './assets/images/index';

function App() {
  return (
    <div id="app">
      <main>
        <BentoGrid>
          <Card number={1} name="five-stars">
            <h1>
              Social Media <span>10x</span> <span>Faster</span> with AI
            </h1>
            <img src={fiveStars} alt="5 stars" />
            <p>Over 4,000 5-star reviews</p>
          </Card>

          <Card number={2} name="platforms">
            <img src={platforms} alt="Social media platforms" />
            <h2>Manage multiple accounts and platforms.</h2>
          </Card>

          <Card number={3} name="calendar">
            <h2>Maintain a consistent posting schedule.</h2>
            <img src={calendar} alt="Calendar" />
          </Card>

          <Card number={4} name="schedule">
            <h2>Schedule to social media.</h2>
            <img src={schedule} alt="Graph of best times to post" />
            <p>
              Optimize post timings to publish content at the perfect time for
              your audience
            </p>
          </Card>

          <Card number={5} name="grow">
            <img src={grow} alt="Grow your followers" />
            <h2>Grow followers with non-stop content.</h2>
          </Card>

          <Card number={6} name="audience">
            <div>
              <h2>
                <span>&gt;</span>56%
              </h2>
              <p>faster audience growth</p>
            </div>
            <img src={audience} alt="Faster audience growth" />
          </Card>

          <Card number={7} name="create">
            <h2>
              Create and schedule content <span>quicker.</span>
            </h2>
            <img src={createPost} alt="Create post" />
          </Card>

          <Card number={8} name="ai">
            <h2>Write your content using AI.</h2>
            <img src={aiContent} alt="Write your content using AI" />
          </Card>
        </BentoGrid>
      </main>
      <Footer />
    </div>
  );
}

export default App;
