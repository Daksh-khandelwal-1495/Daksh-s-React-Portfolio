import React from 'react';
import '../css/about/AboutHeader.css';
const About = () => {
  return (
    <div>
      <header>
        <h1>ABOUT ME</h1>
      </header>
      <div className="card">
        <div className="image-container">
          <img className="image" src="/images/daksh-inox.jpg" alt="Your Image" />
        </div>
        <div className="text-container">
          <p className="text">Hello, I'm Daksh Khandelwal, a Computer Science undergraduate student based in India. My journey in the world of technology is driven by a profound passion for learning and a fascination with the ever-evolving landscape of innovation. As a curious explorer, I find joy in unraveling the mysteries of new technologies and understanding their potential impact on our lives. My vision extends beyond mere curiosity—I aspire to leverage technology as a powerful tool to address real-life challenges. In the pursuit of building solutions, I see each project as an opportunity to not only contribute to the tech realm but also to refine and master my skills. Join me on this exciting adventure as we delve into the boundless possibilities of technology and strive to make a positive impact on the world.</p>
        </div>
      </div>
      <div className="card right">
        <div className="image-container">
          <img className="image" src="/images/daksh-hill.jpg" alt="Your Image" />
        </div>
        <div className="text-container">
          <p className="text">Recently, I've embarked on a transformative journey, intertwining spirituality and physical well-being. Recognizing the profound connection between mind, body, and spirit, I've delved into the realms of spirituality with a newfound curiosity. This exploration has opened pathways to self-discovery and a deeper understanding of the essence of existence. Simultaneously, I've embraced the invigorating world of exercise, viewing it not just as a physical activity but as a holistic practice to cultivate inner strength and balance. With each mindful step, both spiritually and physically, I find myself on a path of self-improvement and holistic wellness. The fusion of these two elements has become a cornerstone of my daily routine, offering a harmonious blend that nourishes both my inner and outer self.</p>
        </div>
      </div>
      <div className="card">
        <div className="image-container">
          <img className="image" src="/images/books.jpg" alt="Your Image" />
        </div>
        <div className="text-container">
          <p className="text">When I'm not immersed in the world of technology, you'll often find me with a book in hand, exploring the realms of self-help, spirituality, and non-fiction. My passion for reading goes beyond mere entertainment; it's a journey of personal growth and enlightenment. From the wisdom of self-help literature to the contemplative depths of spiritual texts, and the fascinating narratives of non-fiction works, each book is a treasure trove of insights that enrich my perspective on life. These literary companions serve not only as a source of knowledge but also as a guide on my path of continuous self-discovery. Join me in this exploration of the written word, where each page unfolds a new chapter in the never-ending story of personal and intellectual development.</p>
        </div>
      </div>
      <div className="card right">
        <div className="image-container">
          <img className="image" src="/images/piano.jpg" alt="Your Image" />
        </div>
        <div className="text-container">
          <p className="text">Beyond the world of algorithms and coding, my heart finds its rhythm in the gentle cadence of piano keys. The keyboard, an instrument of grace and expression, has become my refuge. I am drawn to the joy of playing, not as a composer but as an interpreter of melodies that resonate with emotions. Whether it's the timeless classics or contemporary tunes, the piano becomes a canvas where I bring existing compositions to life. With each stroke, I immerse myself in the beauty of established music, finding fulfillment in the act of translating notes into a harmonious symphony. Join me on this musical journey as I explore the keys, relishing the art of interpretation and continually seeking to deepen my connection with the vast repertoire of musical expression.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
