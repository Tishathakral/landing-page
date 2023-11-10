import React from 'react';

// New component for guided lesson card
const GuidedLessonCard = ({ title, description, imageUrl }) => {
  return (
    <div className="flex-shrink-0 w-1/3 p-4 transform transition-transform hover:scale-105">
      <div className="bg-white rounded-lg p-6 h-full shadow-md hover:shadow-lg transition-shadow">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4 rounded-md" />
        <h2 className="text-2xl font-medium mb-2 text-black">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const GuidedLessons = () => {
    // Example data for guided lessons
    const guidedLessonsData = [
      {
        description: 'Meditation is renowned for its stress-relieving benefits. Mindfulness meditation cultivates awareness, enabling individuals to respond to stressors with greater composure and resilience.',
        title: 'Stress Reduction:',
        imageUrl: 'https://image.lexica.art/full_jpg/fd7b0cad-caab-46dc-9767-b6c331744b09', // Replace with your actual image URL
      },
      {
        description: 'Regular meditation enhances concentration and attention span. It nurtures cognitive skills that boost productivity and the ability to stay focused on tasks with clarity.',
        title: 'Improved Concentration and Focus',
        imageUrl: 'https://manishverma.in/wp-content/uploads/2022/02/improve-concentration-and-focus.jpeg', // Replace with your actual image URL
      },
      {
        description: 'Meditation promotes emotional well-being, reducing symptoms of anxiety and depression. It provides a valuable tool for maintaining mental health and fostering a positive outlook on life.',
        title: 'Emotional Well-Being',
        imageUrl: 'https://image.lexica.art/full_jpg/efed0ea6-b410-43f3-88f6-2e6619aa2941', // Replace with your actual image URL
      },
      {
        description: 'Meditation encourages self-reflection and awareness. Through mindfulness practice, individuals gain a deeper understanding of their thoughts and emotions, fostering personal growth and inner peace.',
        title: 'Enhanced Self-Awareness',
        imageUrl: 'https://placekitten.com/803/603', // Replace with your actual image URL
      },
      {
        description: 'Meditation contributes to improved sleep. By calming the mind and reducing stress, individuals find it easier to relax before bedtime, leading to more restful and rejuvenating sleep.',
        title: 'Better Sleep Quality',
        imageUrl: 'https://placekitten.com/803/603', // Replace with your actual image URL
      },
      {
        description: 'Mindfulness, a key component of meditation, involves non-judgmental attention to the present moment. This heightened awareness leads to better decision-making, improved relationships, and overall clarity in daily life.',
        title: 'Increased Mindfulness',
        imageUrl: 'https://placekitten.com/803/603', // Replace with your actual image URL
      },
    ];
  

  return (
    <div className ="h-full bg-yellow-200 m-16 rounded-lg"style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2023/06/03/15/26/ginkgo-8037886_1280.jpg")' }}>
      <section className="py-16 w-full backdrop-blur-sm rounded-lg">
        <div className="container mx-auto text-center text-white ">

          <h1 className="text-2xl font-medium mb-6">"Quiet the mind so the soul will speak" </h1>

          {/* Render guided lesson cards side by side */}
          <div className="flex flex-wrap">
            {guidedLessonsData.map((lesson, index) => (
              <GuidedLessonCard
                key={index}
                title={lesson.title}
                description={lesson.description}
                imageUrl={lesson.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuidedLessons;

